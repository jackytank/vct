import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "TRANG CHỦ",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "DỊCH VỤ",
    newTab: false,
    path: "/dich-vu",
  },
  {
    id: 2.3,
    title: "GIỚI THIỆU",
    newTab: false,
    path: "/gioi-thieu",
  },
  {
    id: 2.1,
    title: "KỂ CHUYỆN",
    newTab: false,
    path: "/ke-chuyen",
  },

  // {
  //   id: 3,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 31,
  //       title: "Blog Grid",
  //       newTab: false,
  //       path: "/blog",
  //     },
  //     {
  //       id: 34,
  //       title: "Sign In",
  //       newTab: false,
  //       path: "/auth/signin",
  //     },
  //     {
  //       id: 35,
  //       title: "Sign Up",
  //       newTab: false,
  //       path: "/auth/signup",
  //     },
  //     {
  //       id: 35,
  //       title: "Docs",
  //       newTab: false,
  //       path: "/docs",
  //     },
  //     {
  //       id: 35.1,
  //       title: "Support",
  //       newTab: false,
  //       path: "/support",
  //     },
  //     {
  //       id: 36,
  //       title: "404",
  //       newTab: false,
  //       path: "/error",
  //     },
  //   ],
  // },

  {
    id: 4,
    title: "HẬU TRƯỜNG",
    newTab: false,
    path: "/hau-truong",
  },
];

export default menuData;
