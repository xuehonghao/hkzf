import React, { Component } from "react";

import { NavBar, Icon } from "antd-mobile";

import "./index.scss";

import { getCurrCity } from "../../utils/currentCity";
import styles from "./index.module.css";
import { getMapHouses } from "../../utils/api/area";

class index extends Component {
  componentDidMount() {
    // 初始化地图
    this.initMap();
  }

  // 初始化地图
  initMap = async () => {
    this.BMap = window.BMap;
    // 创建地图实例
    this.map = new this.BMap.Map("container");
    // 获取定位城市
    const { value, label } = await getCurrCity();
    // 创建地址解析器实例
    let myGeo = new this.BMap.Geocoder();

    // 将地址解析结果显示在地图上，并调整地图视野
    myGeo.getPoint(
      null,
      async (point) => {
        if (point) {
          // 初始化地图，设置中心点坐标和地图级别
          this.map.centerAndZoom(point, 11);
          // 添加控件
          this.map.addControl(new this.BMap.NavigationControl());
          this.map.addControl(new this.BMap.ScaleControl());

          // 调用后台接口获取覆盖物数据
          this.renderOverlays(value);
        }
      },
      label
    );
  };

  // 封装渲染覆盖物
  renderOverlays = async (id) => {
    let { status, data } = await getMapHouses(id);
    if (status === 200) {
      data.forEach((item) => {
        const {
          coord: { longitude, latitude },
          label: areaName,
          count,
          value,
        } = item;
        // 转换地理位置坐标
        const ipoint = new this.BMap.Point(longitude, latitude);
        // 绘制覆盖物
        const opts = {
          position: ipoint, // 指定文本标注所在的地理位置
          offset: new this.BMap.Size(0, 0), // 设置文本偏移量
        };
        const label = new this.BMap.Label(null, opts);
        label.setContent(
          `
            <div class="${styles.bubble}">
              <p class="${styles.bubbleName}">${areaName}</p>
              <p>${count}套</p>
            </div>
          `
        );
        label.setStyle({
          border: "none",
        });
        // 添加点击事件
        label.addEventListener("click", () => {
          // 设置显示下一区域的位置和缩放级别
          this.map.centerAndZoom(ipoint, 13);
          // 清除第一层覆盖物
          setTimeout(() => this.map.clearOverlays());
        });
        this.map.addOverlay(label);
      });
    }
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
