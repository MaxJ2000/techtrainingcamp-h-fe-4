import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CreateRoom from "../views/CreateRoom.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/createroom",
    name: "CreateRoom",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CreateRoom,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
