import axios from "axios";
import { Toast } from "antd-mobile";
import { getToken } from "./currentCity";

// 基地址
const BaseURL = "https://api-haoke-web.itheima.net";

const api = axios.create({
  baseURL: BaseURL,
});

// Add a request interceptor  请求拦截器
api.interceptors.request.use(
  function (config) {
    const { url, headers } = config;
    const list = ["/user/registered", "/user/login"]; // 白名单

    if (url.startsWith("/user") && !list.includes(url)) {
      // 设置公共请求头
      headers.authorization = getToken();
    }

    // 动画加载
    Toast.loading("加载中...", 0);
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor  响应拦截器
api.interceptors.response.use(
  function (response) {
    // 简化返回结果
    let res = {
      status: response.data.status,
      description: response.data.description,
      data: response.data.body,
    };
    // 动画结束
    Toast.hide();
    return res;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default api;
export { BaseURL };
