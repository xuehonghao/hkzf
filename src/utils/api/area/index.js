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

// 小区关键词查询
const getCommunity = (name, id) => {
  return api.get("/area/community", {
    params: {
      name,
      id,
    },
  });
};

// 查询房源数据
const getMapHouses = (id) => {
  return api.get("/area/map", {
    params: {
      id,
    },
  });
};

export { getCityInfo, getCities, getHotCity, getCommunity, getMapHouses };
