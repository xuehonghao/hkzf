import React, { Component } from "react";

import { NavBar, Icon } from "antd-mobile";

import "./index.scss";

import { getCurrCity } from "../../utils/currentCity";
import styles from "./index.module.css";

class index extends Component {
  componentDidMount() {
    // 初始化地图
    this.initMap();
  }

  // 初始化地图
  initMap = async () => {
    const { BMap } = window;
    // 创建地图实例
    const map = new BMap.Map("container");
    // 获取定位城市
    const { value, label } = await getCurrCity();
    // 创建地址解析器实例
    let myGeo = new BMap.Geocoder();

    // 将地址解析结果显示在地图上，并调整地图视野
    myGeo.getPoint(
      null,
      function (point) {
        if (point) {
          // 初始化地图，设置中心点坐标和地图级别
          map.centerAndZoom(point, 11);
          // 添加控件
          map.addControl(new BMap.NavigationControl());
          map.addControl(new BMap.ScaleControl());

          // 创建文本覆盖物
          const opts = {
            position: point, // 指定文本标注所在的地理位置
            offset: new BMap.Size(0, 0), // 设置文本偏移量
          };
          const label = new BMap.Label(null, opts);
          label.setContent(
            `
              <div class="${styles.bubble}">
                <p class="${styles.bubbleName}">浦东新区</p>
                <p>388套</p>
              </div>
            `
          );
          label.setStyle({
            border: "none",
          });
          // 添加点击事件
          label.addEventListener("click", () => {
            console.log("====================================");
            console.log("覆盖物被点击了", point);
            console.log("====================================");
          });
          map.addOverlay(label);
        }
      },
      label
    );
  };
  render() {
    return (
      <>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => {
            this.props.history.goBack();
          }}
        >
          地图找房
        </NavBar>
        <div id="container"></div>
      </>
    );
  }
}

export default index;
