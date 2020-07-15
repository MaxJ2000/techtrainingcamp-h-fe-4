import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HelloWorld from "../components/HelloWorld.vue";
import Player from "../views/player.vue";
import Result from "../views/result.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/player",
    name: "Player",
    component: Player
  },
  {
    path: "/result",
    name: "Result",
    component: Result
  }
];

const router = new VueRouter({
  routes
});

export default router;
