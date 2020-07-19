<template>
  <div class="about">
    <!-- <Title>[加入房间]</Title> -->
    <Header>我是玩家</Header>
    <v-container fluid>
      <div class="rm">
        注意哟！ 
        <span>认识新朋友从不尬聊开始</span>
      </div>
      <!-- <form>
        <div>
          <label for="name">玩家名</label>
          <input type="text" placeholder="请输入昵称" id="name" v-model="name" />
        </div>
        <div>
          <label for="room">房间号</label>
          <input type="text" placeholder="请输入房间号" id="room" v-model="roomID" />
        </div>
      </form> -->
      <div class="ip">
        <v-text-field label="玩家名" :rules="rules" hide-details="auto" hint="请输入昵称" v-model="name"></v-text-field>
        <v-text-field label="房间号" hint="请输入房间号" v-model="roomID"></v-text-field>
      </div>
      <div>
        <v-btn
          depressed
          x-large
          color="primary"
          class="btn1"
          to="/wait"
          v-on:click.native="join"
        >加入房间</v-btn>
      </div>
      <img alt="WolfKill logo" src="../assets/wolf1.jpg" />
    </v-container>
  </div>
</template>

<style scoped>
/* form div {
  margin: 50px;
}
label {
  position: absolute;
  left: 0px;
  width: 150px;
  text-align: right;
  color: #00d3b4;
} */
.container {
  overflow: hidden;
}
/* input {
  position: relative;
  left: 100px;
} */
img {
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
/* .v-text-field fieldset, .v-text-field .v-input__control {
    margin: 20px 50px;
} */
.ip {
  margin: 20px 50px!important;
}
.v-input {
  margin: 40px auto;
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
      roomID: "",
      rules: [
        value => !!value || "Required.",
        value => (value && value.length >= 3) || "Min 3 characters"
      ]
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
