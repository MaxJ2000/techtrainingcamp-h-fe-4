<template>
  <div class="home">
    <Title>[创建房间]</Title>
    <div>房间号</div>
    <form>
      <div>
        <label for="name">昵称</label>
        <input type="text" placeholder="请输入昵称" id="name" />
      </div>
      <div>
        <label for="wolf">狼人人数</label>
        <input type="number" placeholder="请输入人数" id="wolf" />
      </div>
      <div>
        <label for="village">村民人数</label>
        <input type="number" placeholder="请输入人数" id="village" />
      </div>
      <div>
        <label>可选神牌</label>
        <input type="checkbox" value="女巫" />女巫
        <input type="checkbox" value="猎人" />猎人
        <input type="checkbox" value="预言家" />预言家
      </div>
      <div>
        <label>可选模式</label>
        <input type="radio" value="屠边" name="model" />屠边
        <input type="radio" value="屠城" name="model" />屠城
      </div>
    </form>
  </div>
</template>
<style scoped>
form div {
  margin: 50px;
}
label {
  position: absolute;
  left: 400px;
  width: 150px;
  text-align: right;
}
</style>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";

export default {
  name: "Home",
  components: {
    Title,
  },
};
</script>
