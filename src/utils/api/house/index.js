import api from "../../axios";

// 获取房屋查询条件
const getHousesCondition = (id) => {
  return api.get("/houses/condition", {
    params: {
      id,
    },
  });
};

export { getHousesCondition };
