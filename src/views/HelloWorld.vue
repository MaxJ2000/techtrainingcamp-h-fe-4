<template>
  <div class="hello">
    <!-- <Title>[首页]</Title> -->
    <Header>[首页]</Header>
    <img alt="WolfKill logo" src="../assets/timg.jpg" />
    <div class="row">
      <div class="mb">
        <v-btn
          depressed
          large
          rounded
          color="primary"
          class="btn1"
          to="/home"
          v-on:click.native="creat"
          >创建房间</v-btn
        >
      </div>
      <div>
        <v-btn depressed large rounded color="primary" class="btn1 right" to="/about"
          >加入房间</v-btn
        >
      </div>
    </div>
    <div id="rule">
      <Dialogs />
    </div>
  </div>
</template>
<style scoped>
h3 {
  margin: 50px;
}
.row {
  position: relative;
  width: 400px;
  margin: 80px auto 0;
}
.btn1 {
  background-color: #3f51b5 !important;
}
.right {
  position: absolute;
  right: 0;
}
#rule {
  position: absolute !important;
  bottom: 120px !important;
  right: 120px !important;
  width: 125px !important;
  height: 40px !important;
}
.mb {
  margin-bottom: 200px;
}
</style>

<script>
import Dialogs from "@/components/Dialogs.vue";
// import Title from "@/components/Title.vue";
import Header from "@/components/Header.vue";
export default {
  name: "HelloWorld",
  components: {
    Dialogs,
    // Title,
    Header
  },
  methods: {
    creat() {
      this.$store.dispatch("gameInit/createRoom");
    }
  }
};
</script>
