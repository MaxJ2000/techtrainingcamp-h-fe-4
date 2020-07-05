<template>
  <div class="hello">
    <h3>[首页]</h3>
    <div><label for="name">名字: </label> <input type="text" id="name" /></div>
    <div><label for="room">房间号:</label> <input type="text" id="room" /></div>
    <div><input type="submit" value="进入游戏" class="btn" /></div>
    <span><router-link to="/about">游戏规则说明</router-link></span>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin: 30px;
}
span {
  float: right;
}
.btn {
  height: 30px;
  width: 100px;
}
a {
  text-decoration: none;
}
label {
  display: inline-block;
  height: 20px;
  width: 60px;
  text-align: right;
}
</style>
