import React, { Component } from "react";

import { Route } from "react-router-dom";

import Index from "../index";
import House from "../house";
import Profile from "../profile";

// 引入TabBar选项卡组件
import { TabBar } from "antd-mobile";

// 引入样式
import "./index.css";

// 定义常量 tabBarList
const tabBarList = [
  {
    title: "首页",
    icon: "icon-ind",
    path: "/home",
  },
  {
    title: "找房",
    icon: "icon-findHouse",
    path: "/home/house",
  },
  {
    title: "我的",
    icon: "icon-my",
    path: "/home/profile",
  },
];

class index extends Component {
  state = {
    selectedTab: "/home",
  };

  // 绘制TabBar
  renderTabBar = () => (
    <TabBar
      unselectedTintColor="#949494"
      tintColor="#33A3F4"
      barTintColor="white"
    >
      {/* 遍历tabBarList 返回一个数组 */}
      {tabBarList.map((item) => (
        <TabBar.Item
          title={item.title}
          key={item.path}
          icon={<i className={`iconfont ${item.icon}`} />}
          selectedIcon={<i className={`iconfont ${item.icon}`} />}
          selected={this.state.selectedTab === item.path}
          onPress={() => {
            // 更新 selectedTab
            this.setState({
              selectedTab: item.path,
            });
            // 跳转路由
            this.props.history.push(item.path);
          }}
        ></TabBar.Item>
      ))}
    </TabBar>
  );

  render() {
    return (
      <div>
        <Route exact path="/home" component={Index} />
        <Route path="/home/house" component={House} />
        <Route path="/home/profile" component={Profile} />

        {/* TabBar */}
        <div className="tabBar">{this.renderTabBar()}</div>
      </div>
    );
  }
}

export default index;
