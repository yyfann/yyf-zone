import user from "@/pages/user/index.vue";
import home from "@/pages/home/index.vue";
import my from "@/pages/my/index.vue";


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
  {
    path: "/my",
    name: "my",
    meta: {
      title: "我的"
    },
    component: my
  },

];
