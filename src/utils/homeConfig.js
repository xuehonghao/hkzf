// 引入图片
import Nav1 from "../assets/images/nav-1.png";
import Nav2 from "../assets/images/nav-2.png";
import Nav3 from "../assets/images/nav-3.png";
import Nav4 from "../assets/images/nav-4.png";

// 定义常量 tabBarList
const tabBarList = [
  {
    title: "首页",
    icon: "icon-ind",
    path: "/home",
  },
  {
    title: "找房",
    icon: "icon-findHouse",
    path: "/home/house",
  },
  {
    title: "我的",
    icon: "icon-my",
    path: "/home/profile",
  },
];

// nav导航栏数据
const navs = [
  {
    id: 1,
    img: Nav1,
    title: "整租",
    path: "/home/house",
  },
  {
    id: 2,
    img: Nav2,
    title: "合租",
    path: "/home/house",
  },
  {
    id: 3,
    img: Nav3,
    title: "地图找房",
    path: "/map",
  },
  {
    id: 4,
    img: Nav4,
    title: "去出租",
    path: "/rent/add",
  },
];

export { tabBarList, navs };
