import Vue from "vue";
import VueRouter from "vue-router";
<<<<<<< HEAD
import EnterRoom from "../views/EnterRoom.vue";
import CreateRoom from "../views/CreateRoom.vue";
import GodControl from "../views/GodControl.vue";
=======
import Home from "../views/Home.vue";
import HelloWorld from "../views/HelloWorld.vue";
import Player from "../views/Player.vue";
import Result from "../views/Result.vue";
import Status from "../views/Status.vue";
import Wait from "../views/Wait.vue";

>>>>>>> jiangjun-component
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
<<<<<<< HEAD
    name: "Home",
    component: EnterRoom,
=======
    name: "HelloWorld",
    component: HelloWorld,
>>>>>>> jiangjun-component
  },
  {
    path: "/createroom",
    name: "CreateRoom",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
<<<<<<< HEAD
    component: CreateRoom,
  },
  {
    path: "/godcontrol",
    name: "GodControl",
    component: GodControl,
=======
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
>>>>>>> jiangjun-component
  },
];

const router = new VueRouter({
  routes,
});

export default router;
