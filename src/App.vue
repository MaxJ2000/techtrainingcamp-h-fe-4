<template>
  <v-app>
    <div id="app">
      <router-view class="font" />
      <Footer />
    </div>
  </v-app>
</template>
<style>
#app {
  font-family: "Microsoft YaHei" !important;
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
  font-size: 16px;
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
