import { getCityInfo } from "./api/area";

const CURR_CITY = "currCity";

// 设置
const setLocal = (data) => {
  localStorage.setItem(CURR_CITY, JSON.stringify(data));
};

// 获取
const getLocal = () => {
  let currCity = localStorage.getItem(CURR_CITY);
  if (!currCity) return {};
  return JSON.parse(currCity);
};

// 删除
const removeLocal = () => {
  localStorage.removeItem(CURR_CITY);
};

// 百度获取
const getCurrCityByMap = () => {
  return new Promise((resolve, reject) => {
    // 使用百度地图LocalCity获取当前的城市名称
    const myCity = new window.BMap.LocalCity();
    myCity.get((result) => {
      // 根据百度地图获取到城市名字，调用后台接口获取当前城市的详细数据
      resolve(result.name);
    });
  });
};

// 获取当前城市信息
const getCurrCity = async () => {
  // 内存中找
  const currCityByLocal = getLocal();

  // 定位
  const currCityByMap = await getCurrCityByMap();

  // 内存中没有 || 内存中有键没值 || 定位和内存中的值不匹配
  if (
    !currCityByLocal ||
    !currCityByLocal.label ||
    !currCityByMap.includes(currCityByLocal.label)
  ) {
    return new Promise(async (resove, reject) => {
      // 调用接口获取城市详细信息
      const { status, data } = await getCityInfo(getCurrCityByMap);
      if (status === 200) {
        // 存到本地
        setLocal(data);
        // 传递数据
        resove(data);
      } else {
        reject("error");
      }
    });
  } else {
    // 如果有，返回本地存储获取的信息
    return Promise.resolve(currCityByLocal);
  }
};

export { getCurrCity };
