import axios from "axios";
import { Toast } from "antd-mobile";

// 基地址
const BaseURL = "http://localhost:8080";

const api = axios.create({
  baseURL: BaseURL,
});

// Add a request interceptor  请求拦截器
api.interceptors.request.use(
  function (config) {
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
