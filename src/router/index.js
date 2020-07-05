import Vue from "vue";
import VueRouter from "vue-router";
import EnterRoom from "../views/EnterRoom.vue";
import CreateRoom from "../views/CreateRoom.vue";
import GodControl from "../views/GodControl.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: EnterRoom,
  },
  {
    path: "/createroom",
    name: "CreateRoom",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CreateRoom,
  },
  {
    path: "/godcontrol",
    name: "GodControl",
    component: GodControl,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
