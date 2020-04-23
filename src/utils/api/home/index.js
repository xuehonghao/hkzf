import api from "../../axios";

// 首页轮播图
const getSwiper = () => {
  return api.get("/home/swiper");
};

// 租房小组
const getGroups = (area = "AREA|88cff55c-aaa4-e2e0") => {
  return api.get("/home/groups", {
    params: {
      area,
    },
  });
};

// 资讯
const getNews = (area = "AREA|88cff55c-aaa4-e2e0") => {
  return api.get("/home/news", {
    params: {
      area,
    },
  });
};

export { getSwiper, getGroups, getNews };
