import api from "../../axios";

// 用户登录接口
const login = (username, password) => {
  return api.post("/user/login", {
    username,
    password,
  });
};

// 获取用户的信息资料
const getUserInfo = (token) => {
  return api.get("/user", {
    headers: { authorization: token },
  });
};

// 用户退出登录
const logout = (token) => {
  return api.post("/user/logout", null, {
    headers: { authorization: token },
  });
};
export { login, getUserInfo, logout };
