import React, { Component } from "react";
import { getCities, getHotCity } from "../../utils/api/area";
import { getCurrCity, setLocal, CURR_CITY } from "../../utils/currentCity";
import "react-virtualized/styles.css";
import { List, AutoSizer } from "react-virtualized";
import { NavBar, Icon, Toast } from "antd-mobile";
import "./index.scss";

class index extends Component {
  state = {
    cityIndex: [],
    cityList: {},
    activeIndex: 0,
  };
  componentDidMount() {
    this.loadData();
  }

  // 获取城市列表数据
  loadData = async () => {
    // 获取所有城市列表
    let res = await getCities();

    // 获得格式化后的城市列表
    let { cityIndex, cityList } = this.formatCities(res);

    // 添加热门城市
    let hotCity = await getHotCity();
    if (res.status === 200) {
      cityIndex.unshift("hot");
      cityList["hot"] = hotCity.data;
    }

    // 添加当前城市
    let currCity = await getCurrCity();
    cityIndex.unshift("#");
    cityList["#"] = [currCity];

    this.setState({
      cityIndex,
      cityList,
    });
  };

  // 格式化城市数据
  formatCities = (res) => {
    let cityList = {},
      cityIndex;
    if (res.status !== 200) {
      return { cityList, cityIndex };
    }

    // 遍历所有城市，进行分类整理
    res.data.map((item) => {
      let head = item.pinyin.slice(0, 1); //首字母

      //如果包含首字母(属性)，追加；如果没有，则设置数组，并填入城市对象
      if (head in cityList) {
        cityList[head].push(item);
      } else {
        cityList[head] = [item];
      }
    });

    // 生成一级分类数组并排序
    cityIndex = Object.keys(cityList).sort();

    return { cityList, cityIndex };
  };

  // 格式化字母(处理热门城市和当前城市)
  formatLetter(letter, first) {
    switch (letter) {
      case "hot":
        return first ? "热" : "热门城市";
      case "#":
        return first ? "当" : "当前城市";
      default:
        return letter.toUpperCase();
    }
  }

  // 动态获取行高
  getRowheight = ({ index }) => {
    const { cityIndex, cityList } = this.state;
    let letter = cityIndex[index];
    // title高度+城市高度*城市个数
    return 36 + 50 * cityList[letter].length;
  };

  // 城市列表点击事件
  // 切换城市
  changeCity = (city) => {
    const hasData = ["北京", "上海", "广州", "深圳"];
    if (hasData.includes(city.label)) {
      setLocal(city);
      this.props.history.goBack();
    } else {
      Toast.info("该城市暂无房源数据！", 2);
    }
  };

  // 渲染右侧索引列表
  renderCityIndex = () => {
    const { cityIndex, activeIndex } = this.state;
    return cityIndex.map((item, index) => {
      return (
        <li
          key={item}
          className="city-index-item"
          onClick={() => {
            // 调用
            this.listRef.scrollToRow(index);
          }}
        >
          <span className={activeIndex === index ? "index-active" : ""}>
            {this.formatLetter(item, true)}
          </span>
        </li>
      );
    });
  };

  // 滚动列表触发（每次重新渲染列表后都会触发）
  onRowsRendered = ({ startIndex }) => {
    if (this.state.activeIndex !== startIndex) {
      this.setState({
        activeIndex: startIndex,
      });
    }
  };

  rowRenderer = ({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style, // Style object to be applied to row (to position it)
  }) => {
    return (
      <div key={key} style={style} className="city-item">
        <div className="title">
          {this.formatLetter(this.state.cityIndex[index])}
        </div>
        {this.state.cityList[this.state.cityIndex[index]].map((item, k) => {
          return (
            <div
              className="name"
              onClick={() => {
                this.changeCity(item);
              }}
              key={k}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div className="cityList">
        {/* 导航返回 */}
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.goBack()}
        >
          城市选择
        </NavBar>
        {/* 列表 */}
        <AutoSizer>
          {({ height, width }) => (
            <List
              width={width}
              height={height}
              rowCount={this.state.cityIndex.length}
              rowHeight={this.getRowheight}
              rowRenderer={this.rowRenderer}
              scrollToAlignment="start"
              onRowsRendered={this.onRowsRendered}
              ref={(map) => {
                this.listRef = map;
              }}
            />
          )}
        </AutoSizer>
        {/* 右侧索引列表 */}
        <ul className="city-index">{this.renderCityIndex()}</ul>
      </div>
    );
  }
}

export default index;
