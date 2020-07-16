<template>
  <div class="hello">
    <h3>[首页]</h3>
    <img alt="WolfKill logo" src="../assets/timg.jpg" />
    <div class="row">
      <div>
        <v-btn depressed large color="primary" class="btn1" to="/home" v-on:click.native="creat">创建房间</v-btn>
      </div>
      <div>
        <v-btn depressed large color="primary" class="btn1 right" to="/about">加入房间</v-btn>
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
  bottom: 20px !important;
  right: 20px !important;
  width: 125px !important;
  height: 40px !important;
}
</style>

<script>
import Dialogs from "@/components/Dialogs.vue";
export default {
  name: "HelloWorld",
  components: {
    Dialogs
  },
  methods: {
    creat() {
      this.$store.dispatch("gameInit/createRoom");
    }
  }
};
</script>
