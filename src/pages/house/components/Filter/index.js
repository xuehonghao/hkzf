import React, { Component } from "react";

import FilterTitle from "../FilterTitle";
import FilterPicker from "../FilterPicker";
import FilterMore from "../FilterMore";

import styles from "./index.module.css";

import { getHousesCondition } from "../../../../utils/api/house";
import { getCurrCity } from "../../../../utils/currentCity";
// 标题高亮状态(默认值)
const titleSelectedStatus = {
  area: false,
  mode: false,
  price: false,
  more: false,
};

// 选中数据维护
const selectedValues = {
  area: ["area", "null"],
  mode: ["null"],
  price: ["null"],
  more: [],
};

export default class Filter extends Component {
  // 设置状态
  state = {
    titleSelectedStatus: { ...titleSelectedStatus },
    // 打开当前的type状态
    openType: "",
  };

  componentDidMount() {
    this.getFilterData();
    // 初始化：存储到实例属性上
    this.selectedValues = { ...selectedValues };
  }

  // 获取过滤条件
  getFilterData = async () => {
    // 获取当前城市id
    const { value } = await getCurrCity();
    const res = await getHousesCondition(value);

    // 把组件筛选数据存放到组件实例的成员属性上
    this.filterData = res.data;
  };

  // 判断是否为前三个菜单
  isShow = () => {
    const { openType } = this.state;
    return openType === "area" || openType === "mode" || openType === "price";
  };

  // 点击标题
  onTitleClick = (type) => {
    // console.log(type)
    this.setState({
      titleSelectedStatus: { ...titleSelectedStatus, [type]: true },
      openType: type,
    });
  };

  // 关闭前三个筛选器内容和遮罩层
  onCancel = () => {
    // 处理高亮
    let newVal = this.handlerSel();
    this.setState({
      openType: "",
      titleSelectedStatus: newVal,
    });
  };

  // 确定选择过滤条件 获取选中的筛选条件
  onOk = (value) => {
    const { openType } = this.state;
    // 存储当前选中筛选数据
    this.selectedValues[openType] = value;
    // 处理高亮
    let newVal = this.handlerSel();
    this.setState(
      {
        openType: "",
        titleSelectedStatus: newVal,
      },
      () => {
        // 处理筛选条件数据
        const filters = this.handlerFilters(this.selectedValues);
      }
    );
  };

  // 处理筛选器选中后有无条件的高亮状态
  handlerSel = () => {
    // 创建新的标题选中状态的对象
    const newTitleSelectedStatus = {};
    // 遍历selectedValues
    Object.keys(this.selectedValues).forEach((key) => {
      // 获取当前过滤器选中值 数组
      let cur = this.selectedValues[key];
      // 判断数组的值
      if (key === "area" && (cur[1] !== "null" || cur[0] === "subway")) {
        newTitleSelectedStatus[key] = true;
      } else if (key === "mode" && cur[0] !== "null") {
        newTitleSelectedStatus[key] = true;
      } else if (key === "price" && cur[0] !== "null") {
        newTitleSelectedStatus[key] = true;
      } else if (key === "more" && cur.length !== 0) {
        // 更多选择项 FilterMore 组件情况
        newTitleSelectedStatus[key] = true;
      } else {
        newTitleSelectedStatus[key] = false;
      }
    });
    return newTitleSelectedStatus;
  };

  // 处理后台需要的筛选条件数据
  handlerFilters = (selectedValues) => {
    // 筛选条件数据
    const { area, mode, price, more } = selectedValues;
    // 组装数据
    const filters = {};
    // area | subway
    let areaKey = area[0],
      aval;
    if (area.length === 2) {
      aval = area[1];
    } else {
      if (area[2] !== "null") {
        aval = area[2];
      } else {
        aval = area[1];
      }
    }
    filters[areaKey] = aval;
    // mode
    filters.rentType = mode[0];
    // price
    filters.price = price[0];
    // more
    filters.more = more.join(",");
    console.log("filters:", filters);
    return filters;
  };

  // 渲染选择器 前三个菜单对应的内容
  renderFilterPicker = () => {
    // 获取当前筛选类型
    const { openType } = this.state;
    // 判断是否是前三个菜单
    if (openType === "area" || openType === "mode" || openType === "price") {
      // 获取筛选条件
      const { area, subway, rentType, price } = this.filterData;
      let data,
        col = 1; // 控制PickerView的列数

      switch (openType) {
        case "area": // 区域
          data = [area, subway];
          col = 3;
          break;
        case "mode": // 方式
          data = rentType;
          break;
        case "price": // 租金
          data = price;
          break;
        default:
          break;
      }

      return (
        <FilterPicker
          key={openType}
          value={this.selectedValues[openType]}
          data={data}
          col={col}
          onCancel={this.onCancel}
          onOk={this.onOk}
        />
      );
    } else {
      return null;
    }
  };

  // 渲染第四个菜单--筛选
  renderFilterMore = () => {
    const { openType } = this.state;
    if (openType === "more") {
      // 传递筛选器数据
      const { roomType, oriented, floor, characteristic } = this.filterData;
      const data = { roomType, oriented, floor, characteristic };
      return (
        <FilterMore
          data={data}
          value={this.selectedValues[openType]}
          onOk={this.onOk}
          onCancel={this.onCancel}
        />
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <div className={styles.root}>
        {/* 前三个菜单的遮罩层 */}
        {this.isShow() ? (
          <div className={styles.mask} onClick={this.onCancel} />
        ) : null}

        <div className={styles.content}>
          {/* 标题栏 */}
          <FilterTitle
            titleSelectedStatus={this.state.titleSelectedStatus}
            onTitleClick={this.onTitleClick}
          />

          {/* 前三个菜单对应的内容： */}
          {this.isShow() ? this.renderFilterPicker() : null}

          {/* 最后一个菜单对应的内容： */}
          {this.renderFilterMore()}
        </div>
      </div>
    );
  }
}
