import React, { Component } from "react";

import { NavBar, Icon } from "antd-mobile";

import "./index.scss";

import { getCurrCity } from "../../utils/currentCity";
import styles from "./index.module.css";
import { getMapHouses } from "../../utils/api/area";
import { getHouses } from "../../utils/api/house";
import HouseItem from "../../components/HouseItem";
import { BaseURL as Base_URL } from "../../utils/axios";

class index extends Component {
  state = {
    list: [],
    isShowList: false,
  };

  componentDidMount() {
    // 初始化地图
    this.initMap();
  }

  // 初始化地图
  initMap = async () => {
    this.BMap = window.BMap;
    // 创建地图实例
    this.map = new this.BMap.Map("container");
    this.map.addEventListener("movestart", () => {
      if (this.state.isShowList) {
        this.setState({
          isShowList: false,
        });
      }
    });
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
    const { type, nextLevel } = this.getTypeAndZoom();
    if (status === 200) {
      data.forEach((item) => {
        this.createOverlays(type, nextLevel, item);
      });
    }
  };

  // 根据当前覆盖物的类型，决定调用哪个方法创建覆盖物
  createOverlays = (type, nextLevel, item) => {
    if (type === "rect") {
      // 小区
      this.createRect(item);
    } else {
      // 区和镇
      this.createCircle(nextLevel, item);
    }
  };

  // 小区  长方形的
  createRect = (item) => {
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
      offset: new this.BMap.Size(-50, -20), // 设置文本偏移量
    };
    const label = new this.BMap.Label(null, opts);
    label.setContent(
      `
      <div class="${styles.rect}">
        <span class="${styles.housename}">${areaName}</span>
        <span class="${styles.housenum}">${count}</span>
        <i class="${styles.arrow}"></i>
      </div>
      `
    );
    label.setStyle({
      border: "none",
    });
    // 添加点击事件
    label.addEventListener("click", (e) => {
      this.moveToCenter(e);
      this.handlerHouseList(value);
    });
    this.map.addOverlay(label);
  };

  // 区和镇  圆形的
  createCircle = (nextLevel, item) => {
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
      this.map.centerAndZoom(ipoint, nextLevel);
      // 渲染下一层覆盖物
      this.renderOverlays(value);
      // 清除第一层覆盖物
      setTimeout(() => this.map.clearOverlays());
    });
    this.map.addOverlay(label);
  };

  // 计算要绘制的覆盖物类型和下一个缩放级别
  // 区 -> 11  , 范围：>=10 <12
  // 镇 -> 13  , 范围：>=12 <14
  // 小区 -> 15, 范围：>=14 <16
  // 提供地图缩放级别和覆盖物类型
  getTypeAndZoom = () => {
    let type, nextLevel;
    // 获取小区缩放级别
    const currZoom = this.map.getZoom(); // 获取当前缩放级别， 项目中默认缩放级别为：11
    if (currZoom >= 10 && currZoom < 12) {
      // 区
      type = "circle";
      nextLevel = 13;
    } else if (currZoom >= 12 && currZoom < 14) {
      // 镇
      type = "circle";
      nextLevel = 15;
    } else if (currZoom >= 14 && currZoom < 16) {
      // 小区
      type = "rect";
    }
    return {
      type,
      nextLevel,
    };
  };

  // 获取小区下的房源列表
  // 调用之前定义的根据过滤条件获取房源列表方法，传入cityId
  handlerHouseList = async (id) => {
    let res = await getHouses(id);
    if (res.status === 200) {
      this.setState({
        list: res.data.list,
        isShowList: true,
      });
    }
  };

  // 渲染小区下房屋列表
  renderHouseList = () => {
    return (
      <div
        className={[
          styles.houseList,
          this.state.isShowList ? styles.show : "",
        ].join(" ")}
      >
        <div className={styles.titleWrap}>
          <h1 className={styles.listTitle}>房屋列表</h1>
          <a className={styles.titleMore} href="/home/house">
            更多房源
          </a>
        </div>
        <div className={styles.houseItems}>
          {/* 房屋结构 */}
          {this.state.list.map((item) => (
            <HouseItem
              onClick={() =>
                this.props.history.push(`/detail/${item.houseCode}`)
              }
              key={item.houseCode}
              src={Base_URL + item.houseImg}
              title={item.title}
              desc={item.desc}
              tags={item.tags}
              price={item.price}
            />
          ))}
        </div>
      </div>
    );
  };

  // 移动地图到当前小区位置
  moveToCenter = (e) => {
    let { clientX, clientY } = e.changedTouches[0];
    const x = window.innerWidth / 2 - clientX,
      y = (window.innerHeight - 330) / 2 - clientY;
    this.map.panBy(x, y);
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
        {this.renderHouseList()}
      </>
    );
  }
}

export default index;
