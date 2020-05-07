import React, { Component } from "react";

import { Route } from "react-router-dom";

// 引入TabBar选项卡组件
import { TabBar } from "antd-mobile";

// 引入样式
import "./index.scss";

// 引入常量
import { tabBarList } from "../../utils/homeConfig";

const Index = React.lazy(() => import("../index"));
const House = React.lazy(() => import("../house"));
const Profile = React.lazy(() => import("../profile"));

class index extends Component {
  state = {
    selectedTab: this.props.location.pathname,
  };

  componentDidMount() {
    // 添加监听
    this.unListen = this.props.history.listen((location) => {
      // 如果浏览器地址路径和state中的selectedTab值一致 不执行
      if (this.state.selectedTab === location.pathname) {
        return;
      }

      // 值不一致
      this.setState({
        selectedTab: location.pathname,
      });
    });
  }

  componentWillUnmount() {
    // 销毁监听
    this.unListen();
  }

  // 绘制TabBar
  renderTabBar = () => {
    return (
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
              // 跳转路由
              this.props.history.push(item.path);
              // 更新 selectedTab 这里不更新了，因为设置了监听
              // this.setState({
              //   selectedTab: item.path,
              // });
            }}
          ></TabBar.Item>
        ))}
      </TabBar>
    );
  };

  render() {
    return (
      <div className="home">
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
