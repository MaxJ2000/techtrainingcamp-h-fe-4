<template>
  <v-app>
    <div id="app">
      <div id="nav">
        <router-link to="/">首页</router-link>|
        <router-link to="/about">加入房间</router-link>|
        <router-link to="/home">创建房间</router-link>|
        <router-link to="/wait">等待</router-link>|
        <router-link to="/player">角色信息</router-link>|
        <router-link to="/status">游戏状态</router-link>|
        <router-link to="/result">游戏结果</router-link>
      </div>
      <router-view class="font" />
      <Footer />
    </div>
  </v-app>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  margin-top: 50px;
}
#nav a {
  font-weight: bold;
  color: black;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
/* .backimage {
  background-image: url(assets/timg1.jpg);
} */
.v-application--wrap {
  background-color: white !important;
  /* background-image: url("assets/timg2.jpg");*/
}
.font {
  color: black;
  margin-top: 115px;
}
</style>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Footer
  }
};
</script>
