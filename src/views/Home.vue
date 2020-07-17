<template>
  <div class="home">
    <!-- <Title>[创建房间]</Title> -->
    <Header>[创建房间]</Header>
    <div>{{ getRoomId }}</div>
    <div :title="godList"></div>
    <form>
      <div>
        <label for="name">昵称</label>
        <input type="text" placeholder="请输入昵称" id="name" />
      </div>
      <div>
        <label for="wolf">狼人人数</label>
        <input type="number" placeholder="请输入人数" id="wolf" @change="getValueWolf($event)" />
      </div>
      <div>
        <label for="village">村民人数</label>
        <input type="number" placeholder="请输入人数" id="village" @change="getValueVillage($event)" />
      </div>
      <div>
        <label>可选神牌</label>
        <input type="checkbox" value="女巫" @click="change(0)" />女巫
        <input type="checkbox" value="猎人" @click="change(1)" />猎人
        <input type="checkbox" value="预言家" @click="change(2)" />预言家
      </div>
      <div>
        <label>可选模式</label>
        <input type="radio" value="屠边" name="model" @click="radiochange" />屠边
        <input type="radio" value="屠城" name="model" checked @click="radiochange" />屠城
      </div>
    </form>
    <div>
      <v-btn depressed large color="primary" class="btn1" to="/wait" v-on:click.native="init">提交</v-btn>
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
// @ is an alias to /src
// import Title from "@/components/Title.vue";
// import combobox from "@/components/combobox.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  data: function() {
    return {
      godList: [0, 0, 0]
    };
  },
  methods: {
    create() {
      this.$store.dispatch("gameInit/createRoom");
    },
    change(num) {
      this.godList[num] = 1 - this.godList[num];
    },
    radiochange() {
      this.$store.state.gameInit.killSideOrAll = !this.$store.state.gameInit
        .killSideOrAll;
    },
    init() {
      for (let i = 0; i < this.godList.length; i++) {
        if (this.godList[i] === 1) {
          if (i === 0) {
            this.$store.state.gameInit.deitiesList.push("女巫");
          }
          if (i === 1) {
            this.$store.state.gameInit.deitiesList.push("猎人");
          }
          if (i === 2) {
            this.$store.state.gameInit.deitiesList.push("预言家");
          }
        }
      }
      this.$store.dispatch("gameInit/initRoom", {
        roomID: this.$store.state.gameInit.roomID,
        wolfNum: this.$store.state.gameInit.wolfNum,
        villagerNum: this.$store.state.gameInit.villagerNum,
        deitiesList: this.$store.state.gameInit.deitiesList,
        killSideOrAll: this.$store.state.gameInit.killSideOrAll
      });
    },
    getValueWolf(e) {
      this.$store.commit("gameInit/getValueWolf", e.target.value);
      console.log(e.target.value);
    },
    getValueVillage(e) {
      this.$store.commit("gameInit/getValueVillage", e.target.value);
    }
  },
  components: {
    // Title,
    // combobox,
    Header
  },
  computed: {
    getRoomId() {
      console.log(this.$store.state.gameInit.roomID);
      return this.$store.state.gameInit.roomID;
    }
  },
  mounted: function() {
    this.$store.dispatch("gameInit/createRoom");
  }
};
</script>
