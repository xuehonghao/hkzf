import React from "react";

import { Flex } from "antd-mobile";

import Filter from "./components/Filter";
// 导入样式
import styles from "./index.module.css";
import { getCurrCity } from "../../utils/currentCity";
import { getHouses } from "../../utils/api/house";
import Axios from "axios";

import "react-virtualized/styles.css";
import { List, AutoSizer } from "react-virtualized";

export default class HouseList extends React.Component {
  state = {
    // 房屋列表数据
    list: [1, 2, 3],
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
    console.log(res);
  };

  // 渲染列表项的方法
  renderHouseItem = ({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style, // Style object to be applied to row (to position it)
  }) => {
    return (
      <div key={key} style={style} className="">
        {index}
      </div>
    );
  };

  render() {
    return (
      <div className={styles.root}>
        {/* 条件筛选栏 */}
        <Filter onFilter={this.onFilter} />
        {/* 列表 */}
        <AutoSizer>
          {({ height, width }) => {
            return (
              <List
                height={height}
                rowCount={this.state.list.length}
                rowHeight={130}
                rowRenderer={this.renderHouseItem}
                width={width}
              />
            );
          }}
        </AutoSizer>
      </div>
    );
  }
}
