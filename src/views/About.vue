<template>
  <div class="about">
    <Title>[加入房间]</Title>
    <form>
      <div>
        <label for="name">昵称</label>
        <input type="text" placeholder="请输入昵称" id="name" v-model="name" />
      </div>
      <div>
        <label for="room">房间号</label>
        <input
          type="text"
          placeholder="请输入房间号"
          id="room"
          v-model="roomID"
        />
      </div>
    </form>
    <div>
      <v-btn
        depressed
        large
        color="primary"
        class="btn1"
        to="/wait"
        v-on:click.native="join"
        >提交</v-btn
      >
    </div>
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
import Title from "@/components/Title.vue";

export default {
  components: { Title },
  data: function() {
    return {
      name,
      roomID: 0
    };
  },
  methods: {
    join() {
      this.$store.dispatch("gameInit/joinRoom", {
        roomID: this.roomID,
        name: this.name
      });
    }
  }
};
</script>
