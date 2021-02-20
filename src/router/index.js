import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "Zoom",
      path: "",
      component: () => import("@/views/Zoom")
    },
    {
      name: "callback",
      path: "/callback",
      component: () => import("@/views/Callback")
    }
  ]
});
