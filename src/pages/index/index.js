import React, { Component } from "react";

// 引入组件
import { Carousel, Flex } from "antd-mobile";

// 引入当前组件样式
import "./index.scss";

// 引入基地址
import { BaseURL } from "../../utils/axios";

// 引入接口
import { getSwiper } from "../../utils/api/index";

// 引入常量
import { navs } from "../../utils/homeConfig";

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
    if (res.status == "200") {
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
    }
  };

  // 轮播图组件渲染
  renderSwiper = () => {
    return (
      // 轮播图
      <Carousel className="swiper" autoplay={this.state.autoplay} infinite>
        {this.state.data.map((val) => (
          <a
            key={new Date()}
            href="http://www.itheima.com"
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
