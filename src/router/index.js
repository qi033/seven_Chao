import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    redirect: "/BackPage",
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/logon",
    name: "logon",
    component: () => import("../views/mypage/LogonPage.vue"), //登录页面
  },
  {
    path: "/BackPage",
    name: "BackPage",
    component: () => import("../views/Background/BackPage.vue"), //后台
    redirect: "/PipePage",
    children: [
      {
        path: "/PipePage",
        name: "PipePage",
        component: () => import("../views/mypage/PipePage.vue"), //页面
      },
      {
        path: "/ManAge",
        name: "ManAge",
        component: () => import("../views/Background/ManAge.vue"), //管理页面
        beforeEnter(to, from, next) {
          if (localStorage.getItem('nema') === 'Chao') {
            next()
          } else {
            alert('暂无权限查看')
          }
        }

      },
      {
        path: "/ExpAnd",
        name: "ExpAnd",
        component: () => import("../views/Background/ExpAnd.vue"), //扩展页面

      },
      {
        path: "/baiDu",
        name: "baiDu",
        component: () => import("../views/Background/BaiduSearch.vue"), //百度页面

      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path == "/logon") {
    next();
  } else {
    if (sessionStorage.getItem("Chao") != null) {
      next();
    } else {
      alert("请登录");
      next("/logon");
    }
  }
});

export default router;
