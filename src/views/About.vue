<template>
  <div class="about">
    <!-- <Title>[加入房间]</Title> -->
    <Header>我是玩家</Header>
    <v-container fluid>
      <div class="rm">
        房间号：
        <span>{{ getRoomId }}</span>
      </div>
      <form>
        <div>
          <label for="name">玩家名</label>
          <input type="text" placeholder="请输入昵称" id="name" v-model="name" />
        </div>
        <div>
          <label for="room">房间号</label>
          <input type="text" placeholder="请输入房间号" id="room" v-model="roomID" />
        </div>
      </form>
      <!-- <div>
        <v-text-field label="Main input" :rules="rules" hide-details="auto"></v-text-field>
        <v-text-field label="Another input"></v-text-field>
      </div> -->
      <div>
        <v-btn depressed x-large color="primary" class="btn1" to="/wait" v-on:click.native="join">加入房间</v-btn>
      </div>
       <img alt="WolfKill logo" src="../assets/wolf1.jpg" />
    </v-container>
  </div>
</template>

<style scoped>
form div {
  margin: 50px;
}
label {
  position: absolute;
  left: 0px;
  width: 150px;
  text-align: right;
    color: #00d3b4;
}
.container {
  overflow: hidden;
}
input {
  position: relative;
  left: 100px;
}
img{
  width: 150px;
  height: 150px;
}
.rm {
  color: #007fff;
  font-weight: 700;
}
.rm span {
  color: white;
  background-color: #007fff;
}
</style>
<script>
// import Title from "@/components/Title.vue";
import Header from "@/components/Header.vue";

export default {
  components: {
    // Title,
    Header
  },
  data: function() {
    return {
      name,
      roomID: 0,
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
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
