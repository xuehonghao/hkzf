import { getCityInfo } from "./api/area";

const CURR_CITY = "currCity";

// 设置
const setSession = (data) => {
  sessionStorage.setItem(CURR_CITY, JSON.stringify(data));
};

// 获取
const getSession = () => {
  let currCity = sessionStorage.getItem(CURR_CITY);
  if (!currCity) return null;
  return JSON.parse(currCity);
};

// 删除
const removeSession = () => {
  sessionStorage.removeItem(CURR_CITY);
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
  const currCityByLocal = getSession();

  // 定位
  const currCityByMap = await getCurrCityByMap();
  // 内存中没有 || 内存中有键没值 || 定位和内存中的值不匹配  这样判断，手动切换城市就会有bug
  // if (
  //   !currCityByLocal ||
  //   !currCityByLocal.label ||
  //   !currCityByMap.includes(currCityByLocal.label)
  // ) {

  if (!currCityByLocal) {
    return new Promise(async (resove, reject) => {
      // 调用接口获取城市详细信息
      const { status, data } = await getCityInfo(currCityByMap);
      if (status === 200) {
        // 存到本地
        setSession(data);
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

export { getCurrCity, setSession, CURR_CITY };
