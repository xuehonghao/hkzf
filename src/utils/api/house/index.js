import api from "../../axios";

// 获取房屋查询条件
const getHousesCondition = (id) => {
  return api.get("/houses/condition", {
    params: {
      id,
    },
  });
};

// 根据条件查询房屋
const getHouses = (cityId, filters, start, end) => {
  return api.get("/houses", {
    params: {
      cityId,
      ...filters,
      start,
      end,
    },
  });
};

// 查询房屋具体信息
const getHousesById = (id) => {
  return api.get(`/houses/${id}`);
};

export { getHousesCondition, getHouses, getHousesById };
