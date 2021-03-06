import React, { Component } from "react";

import { SearchBar } from "antd-mobile";

import { getCurrCity } from "../../../utils/currentCity";

import styles from "./index.module.css";
import { getCommunity } from "../../../utils/api/area";

export default class Search extends Component {
  state = {
    // 搜索框的值
    searchTxt: "",
    tipsList: [],
  };

  async componentDidMount() {
    console.log("====================================");
    console.log(this.props);
    console.log("====================================");
    // 获取城市ID
    const { value } = await getCurrCity();
    this.cityId = value;
  }

  // 渲染搜索结果列表
  renderTips = () => {
    const { tipsList } = this.state;

    return tipsList.map((item) => (
      <li
        key={item.community}
        className={styles.tip}
        onClick={() => {
          this.props.history.replace({
            pathname: "/rent/add",
            id: item.community,
            name: item.communityName,
            data: this.props.location.data,
          });
        }}
      >
        {item.communityName}
      </li>
    ));
  };

  // 处理搜索
  handlerSearch = (v) => {
    // 去空格
    let val = v.trim();
    // 处理空的情况
    if (val.length === 0) {
      return this.setState({
        searchTxt: "",
      });
    }
    this.setState(
      {
        searchTxt: val,
      },
      async () => {
        // 接口调用查询小区
        let { status, data } = await getCommunity(val, this.cityId);
        if (status === 200) {
          this.setState({
            tipsList: data,
          });
        }
      }
    );
  };

  render() {
    // const { history } = this.props;
    const { searchTxt } = this.state;

    return (
      <div className={styles.root}>
        {/* 搜索框 */}
        <SearchBar
          placeholder="请输入小区或地址"
          value={searchTxt}
          showCancelButton={true}
          onChange={this.handlerSearch}
          onCancel={() =>
            this.props.history.replace({
              pathname: "/rent/add",
              data: this.props.location.data,
            })
          }
        />

        {/* 搜索提示列表 */}
        <ul className={styles.tips}>{this.renderTips()}</ul>
      </div>
    );
  }
}
