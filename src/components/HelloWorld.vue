<template>
  <div class="hello">
    <h3>[首页]</h3>
    <img alt="WolfKill logo" src="../assets/timg.jpg" />
    <div class="row">
      <div>
        <v-btn depressed large color="primary" class="btn1"><a href="/home">创建房间</a></v-btn>
      </div>
      <div>
        <v-btn depressed large  color="primary" class="btn1 right">加入房间</v-btn>
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
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 125px;
  height: 40px;
}
</style>

<script>
import Dialogs from "@/components/Dialogs.vue";
export default {
  name: "HelloWorld",
  components: {
    Dialogs
  }
};
</script>
