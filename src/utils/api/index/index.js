import api from "../../axios";

// 首页轮播图
const getSwiper = () => {
  return api.get("/home/swiper");
};

export { getSwiper };
