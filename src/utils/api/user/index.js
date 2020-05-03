import api from "../../axios";

// 用户登录接口
const login = (username, password) => {
  return api.post("/user/login", {
    username,
    password,
  });
};

// 获取用户的信息资料
const getUserInfo = () => {
  return api.get("/user");
};

// 用户退出登录
const logout = () => {
  return api.post("/user/logout");
};

// 房屋是否收藏
const getHousesFav = (id) => {
  return api.get(`/user/favorites/${id}`);
};

// 删除收藏
const delFav = (id) => {
  return api.delete(`/user/favorites/${id}`);
};

// 添加收藏
const addFav = (id) => {
  return api.post(`/user/favorites/${id}`);
};

// 查看已发布房源列表
const getUserHouses = () => {
  return api.get("/user/houses");
};

// 发布房源
const pubHouse = (body) => {
  return api.post("/user/houses", {
    ...body,
  });
};

export {
  login,
  getUserInfo,
  logout,
  getHousesFav,
  delFav,
  addFav,
  getUserHouses,
  pubHouse,
};
