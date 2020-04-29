import api from "../../axios";

// 用户登录接口
const login = (username, password) => {
  return api.post("/user/login", {
    username,
    password,
  });
};

export { login };
