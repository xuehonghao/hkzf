import React, { Component } from "react";

// 引入走马灯（轮播图）组件
import { Carousel } from "antd-mobile";

// 引入当前组件样式
import "./index.css";

// 引入基地址
import { BaseURL } from "../../utils/axios";

// 引入接口
import { getSwiper } from "../../utils/api/index";

class index extends Component {
  state = {
    data: ["1", "2", "3"],
    imgHeight: 176,
  };
  componentDidMount() {
    // 获取轮播图片
    this.getSwiper();
  }
  // 获取轮播图片
  getSwiper = async () => {
    let res = await getSwiper();
    console.log(res);
  };
  render() {
    return (
      // 轮播图
      <Carousel autoplay={true} infinite>
        {this.state.data.map((val) => (
          <a
            key={val}
            href="http://www.alipay.com"
            style={{
              display: "inline-block",
              width: "100%",
              height: this.state.imgHeight,
            }}
          >
            <img
              src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
              alt=""
              style={{ width: "100%", verticalAlign: "top" }}
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
  }
}

export default index;
