import React, { Component } from "react";

class index extends Component {
  componentDidMount() {
    // 初始化地图
    this.initMap();
  }

  // 初始化地图
  initMap = () => {
    const { BMap } = window;
    const map = new BMap.Map("container");
    var point = new BMap.Point(116.404, 39.915);
    map.centerAndZoom(point, 15);
  };
  render() {
    return <div id="container"></div>;
  }
}

export default index;
