import React, { Component } from "react";

// 引入组件
import { Carousel, Flex } from "antd-mobile";

// 引入当前组件样式
import "./index.css";

// 引入基地址
import { BaseURL } from "../../utils/axios";

// 引入接口
import { getSwiper } from "../../utils/api/index";

// 引入图片
import Nav1 from "../../assets/images/nav-1.png";
import Nav2 from "../../assets/images/nav-2.png";
import Nav3 from "../../assets/images/nav-3.png";
import Nav4 from "../../assets/images/nav-4.png";

// nav导航栏数据
const navs = [
  {
    id: 1,
    img: Nav1,
    title: "整租",
    path: "/home/house",
  },
  {
    id: 2,
    img: Nav2,
    title: "合租",
    path: "/home/house",
  },
  {
    id: 3,
    img: Nav3,
    title: "地图找房",
    path: "/map",
  },
  {
    id: 4,
    img: Nav4,
    title: "去出租",
    path: "/rent/add",
  },
];

class index extends Component {
  state = {
    data: [],
    imgHeight: 176,
    autoplay: false,
  };
  componentDidMount() {
    // 获取轮播图片
    this.getSwiper();
  }
  // 获取轮播图片
  getSwiper = async () => {
    let res = await getSwiper();
    this.setState(
      {
        data: res.data,
      },
      () => {
        this.setState({
          autoplay: true,
        });
      }
    );
  };

  // 轮播图组件渲染
  renderSwiper = () => {
    return (
      // 轮播图
      <Carousel className="swiper" autoplay={this.state.autoplay} infinite>
        {this.state.data.map((val) => (
          <a
            key={new Date()}
            href=""
            style={{
              display: "inline-block",
              width: "100%",
              height: this.state.imgHeight,
            }}
          >
            <img
              src={`${BaseURL}${val.imgSrc}`}
              alt=""
              onLoad={() => {
                // 屏幕适配
                // fire window resize event to change height
                window.dispatchEvent(new Event("resize"));
                this.setState({ imgHeight: "auto" });
              }}
            />
          </a>
        ))}
      </Carousel>
    );
  };

  // nav导航栏渲染
  renderNav = () => {
    return (
      <Flex className="nav">
        {navs.map((item) => (
          <Flex.Item
            onClick={() => this.props.history.push(item.path)}
            key={item.id}
          >
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </Flex.Item>
        ))}
      </Flex>
    );
  };

  render() {
    return (
      <div>
        {/*  轮播图 */}
        {this.renderSwiper()}

        {/* nav导航栏 */}
        {this.renderNav()}
      </div>
    );
  }
}

export default index;
