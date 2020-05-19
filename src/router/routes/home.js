import user from "@/pages/user/index.vue";
import home from "@/pages/home/index.vue";


export default [
  {
    path: "/",
    name: "home",
    meta: {
      title: "首页"
    },
    component: home
  },
  {
    path: "/user",
    name: "user",
    meta: {
      title: "用户"
    },
    component: user
  },

];
