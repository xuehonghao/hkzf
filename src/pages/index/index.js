import React, { Component } from "react";

// 引入组件
import { Carousel, Flex, Grid, WingBlank } from "antd-mobile";

// 引入当前组件样式
import "./index.scss";

// 引入基地址
import { BaseURL } from "../../utils/axios";

// 引入接口
import { getSwiper, getGroups, getNews } from "../../utils/api/index";

// 引入常量
import { navs } from "../../utils/homeConfig";

class index extends Component {
  state = {
    swipers: [], // 轮播图片
    groups: [], // 租房小组
    news: [], // 资讯
    imgHeight: 176,
    autoplay: false,
  };
  componentDidMount() {
    // 获取轮播图片
    this.getSwiper();

    // 获取租房小组信息
    this.getGroups();

    // 获取租房小组信息
    this.getNews();
  }
  // 获取轮播图片data
  getSwiper = async () => {
    let res = await getSwiper();
    if (res.status === 200) {
      this.setState(
        {
          swipers: res.data,
        },
        () => {
          this.setState({
            autoplay: true,
          });
        }
      );
    }
  };

  // 获取租房小组信息
  getGroups = async () => {
    let res = await getGroups();
    if (res.status === 200) {
      this.setState(
        {
          groups: res.data,
        },
        () => {
          this.setState({
            autoplay: true,
          });
        }
      );
    }
  };

  // 获取租房小组信息
  getNews = async () => {
    let res = await getNews();
    if (res.status === 200) {
      this.setState(
        {
          news: res.data,
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
        {this.state.swipers.map((val) => (
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

  // 租房小组 渲染
  renderGroup = () => {
    return (
      <div className="group">
        {/* 标题 */}
        <Flex className="group-title" justify="between">
          <h3>租房小组</h3>
          <span>更多</span>
        </Flex>
        {/* 宫格 */}
        <Grid
          data={this.state.groups}
          columnNum={2}
          square={false}
          hasLine={false}
          renderItem={(item) => {
            return (
              // item结构
              <Flex className="grid-item" justify="between">
                <div className="desc">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <img src={`${BaseURL}${item.imgSrc}`} alt="" />
              </Flex>
            );
          }}
        />
      </div>
    );
  };

  // 最新资讯渲染
  renderInfo = () => {
    // 渲染最新资讯
    let renderNews = () => {
      return this.state.news.map((item) => (
        <div className="news-item" key={item.id}>
          <div className="imgwrap">
            <img
              className="img"
              src={`http://localhost:8080${item.imgSrc}`}
              alt=""
            />
          </div>
          <Flex className="content" direction="column" justify="between">
            <h3 className="title">{item.title}</h3>
            <Flex className="info" justify="between">
              <span>{item.from}</span>
              <span>{item.date}</span>
            </Flex>
          </Flex>
        </div>
      ));
    };
    return (
      <div className="news">
        <h3 className="group-title">最新资讯</h3>
        <WingBlank size="md">{renderNews()}</WingBlank>
      </div>
    );
  };

  render() {
    return (
      <>
        {/*  轮播图 */}
        {this.renderSwiper()}

        {/* nav导航栏 */}
        {this.renderNav()}

        {/* 租房小组 */}
        {this.renderGroup()}

        {/* 最新资讯 */}
        {this.renderInfo()}
      </>
    );
  }
}

export default index;
