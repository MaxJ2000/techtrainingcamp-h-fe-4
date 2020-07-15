import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HelloWorld from "../views/HelloWorld.vue";
import Player from "../views/Player.vue";
import Result from "../views/Result.vue";
import Status from "../views/Status.vue";
import Wait from "../views/Wait.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld,
  },
  {
    path: "/createroom",
    name: "CreateRoom",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/player",
    name: "Player",
    component: Player,
  },
  {
    path: "/result",
    name: "Result",
    component: Result,
  },
  {
    path: "/status",
    name: "Status",
    component: Status,
  },
  {
    path: "/wait",
    name: "Wait",
    component: Wait,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
