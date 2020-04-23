import api from "../../axios";

// 根据城市名称查询该城市的信息
const getCityInfo = (name) => {
  return api.get("/area/info", {
    params: {
      name,
    },
  });
};

// 获取城市列表数据
const getCities = (level = 1) => {
  return api.get("/area/city", {
    params: {
      level,
    },
  });
};

// 获取热门城市
const getHotCity = () => {
  return api.get("/area/hot");
};

export { getCityInfo, getCities, getHotCity };
