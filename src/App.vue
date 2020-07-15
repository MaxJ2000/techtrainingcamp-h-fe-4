<template>
<v-app>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/about">加入房间</router-link> |
      <router-link to="/home">创建房间</router-link> |
      <router-link to="/player">角色信息</router-link> |
      <router-link to="/result">游戏结果</router-link>
    </div>
    <router-view />
    <!-- <HelloWorld /> -->
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
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "App",

  data: () => ({
    //
  }),
  // components: {
  //   HelloWorld
  // }
};
</script>
