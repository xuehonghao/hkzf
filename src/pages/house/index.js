import React from "react";

import { Flex } from "antd-mobile";

import Filter from "./components/Filter";
// 导入样式
import styles from "./index.module.css";
import { getCurrCity } from "../../utils/currentCity";
import { getHouses } from "../../utils/api/house";
import { BaseURL } from "../../utils/axios";

import "react-virtualized/styles.css";
import { List, AutoSizer, InfiniteLoader } from "react-virtualized";

import HouseItem from "../../components/HouseItem";

export default class HouseList extends React.Component {
  state = {
    // 房屋列表数据
    list: [],
    count: 0,
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
      count: res.data.count,
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
    // 处理暂时没有加载到数据情况
    if (!item) return null;
    // 处理图片地址
    item.src = BaseURL + item.houseImg;
    return <HouseItem {...item} key={key} style={style} />;
  };

  // 渲染列表
  renderHouseList = () => {
    const { list } = this.state;

    return (
      <InfiniteLoader
        isRowLoaded={this.isRowLoaded}
        loadMoreRows={this.loadMoreRows}
        // 远程数据总条数
        rowCount={this.state.count}
      >
        {({ onRowsRendered, registerChild }) => (
          <AutoSizer>
            {({ height, width }) => (
              <List
                className={styles.houseList}
                height={height}
                rowCount={list.length}
                rowHeight={130}
                rowRenderer={this.renderHouseItem}
                onRowsRendered={onRowsRendered}
                ref={registerChild}
                width={width}
              />
            )}
          </AutoSizer>
        )}
      </InfiniteLoader>
    );
  };

  // 判断列表中的每一行是否加载完成
  isRowLoaded = ({ index }) => {
    const { list } = this.state;
    return !!list[index];
  };

  // 下拉加载更多时触发：加载下一页数据
  loadMoreRows = ({ startIndex, stopIndex }) => {
    console.log("loadmore", startIndex, stopIndex);
    // 调用封装的api(返回一个Promise对象)
    return getHouses(this.cityId, this.filters, startIndex, stopIndex).then(
      (res) => {
        console.log("loadmore:", res);
        // 刷新视图
        this.setState({
          list: [...this.state.list, ...res.data.list],
          count: res.data.count,
        });
      }
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
