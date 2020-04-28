import React from "react";

import { Flex } from "antd-mobile";

import Filter from "./components/Filter";
// 导入样式
import styles from "./index.module.css";
import { getCurrCity } from "../../utils/currentCity";
import { getHouses } from "../../utils/api/house";
import { BaseURL } from "../../utils/axios";

import "react-virtualized/styles.css";
import { List, AutoSizer } from "react-virtualized";

import HouseItem from "../../components/HouseItem";

export default class HouseList extends React.Component {
  state = {
    // 房屋列表数据
    list: [],
  };

  // 设置回调，接收数据
  onFilter = async (filters) => {
    console.log("找房列表数据:", filters);
    this.filters = filters;
    this.getHouseList();
  };

  async componentDidMount() {
    // 获取城市ID
    const { value } = await getCurrCity();
    this.cityId = value;
    // 默认加载一次
    this.getHouseList();
  }

  // 获取房屋列表
  getHouseList = async () => {
    const res = await getHouses(this.cityId, this.filters, 1, 20);
    this.setState({
      list: [...res.data.list],
    });
    // console.log(res);
  };

  // 渲染列表项的方法
  renderHouseItem = ({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style, // Style object to be applied to row (to position it)
  }) => {
    const { list } = this.state;
    const item = list[index];
    // 处理图片地址
    item.src = BaseURL + item.houseImg;
    return <HouseItem {...item} key={key} style={style} />;
  };

  // 渲染列表
  renderHouseList = () => {
    const { list } = this.state;
    return (
      <AutoSizer>
        {({ height, width }) => {
          console.log(height, width);

          return (
            <List
              className={styles.houseList}
              height={height}
              rowCount={list.length}
              rowHeight={130}
              rowRenderer={this.renderHouseItem}
              width={width}
            />
          );
        }}
      </AutoSizer>
    );
  };

  render() {
    return (
      <div className={styles.root}>
        {/* 条件筛选栏 */}
        <Filter onFilter={this.onFilter} />
        {/* 列表 */}
        {this.renderHouseList()}
      </div>
    );
  }
}
