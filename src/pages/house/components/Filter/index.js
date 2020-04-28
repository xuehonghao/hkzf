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

export default class Filter extends Component {
  // 设置状态
  state = {
    titleSelectedStatus: { ...titleSelectedStatus },
    // 打开当前的type状态
    openType: "",
  };

  componentDidMount() {
    this.getFilterData();
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
    this.setState({
      openType: "",
    });
  };

  // 确定选择过滤条件
  onOk = () => {
    this.setState({
      openType: "",
    });
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
          {/* <FilterMore /> */}
        </div>
      </div>
    );
  }
}
