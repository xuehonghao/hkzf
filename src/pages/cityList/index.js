import React, { Component } from "react";
import { getCities, getHotCity } from "../../utils/api/area";
import { getCurrCity } from "../../utils/currentCity";

class index extends Component {
  state = {
    cityIndex: [],
    cityList: {},
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

  render() {
    return <div>city</div>;
  }
}

export default index;
