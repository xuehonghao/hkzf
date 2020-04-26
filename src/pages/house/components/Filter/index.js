import React, { Component } from "react";

import FilterTitle from "../FilterTitle";
import FilterPicker from "../FilterPicker";
import FilterMore from "../FilterMore";

import styles from "./index.module.css";

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
          {this.isShow() ? (
            <FilterPicker onCancel={this.onCancel} onOk={this.onOk} />
          ) : null}

          {/* 最后一个菜单对应的内容： */}
          {/* <FilterMore /> */}
        </div>
      </div>
    );
  }
}
