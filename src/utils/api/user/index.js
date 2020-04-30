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

export { login, getUserInfo, logout, getHousesFav };
