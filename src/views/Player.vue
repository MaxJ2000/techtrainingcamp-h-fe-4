<template>
  <div class="player">
    <!-- <Title>[角色展示页]</Title> -->
    <Header>游戏中</Header>
    <v-container fluid>
      <div class="two">
        <div class="day"><span>第{{ this.$store.state.gameStatus.dayCount + 1 }}天</span></div>
        <div>
          当前阶段：
          <span>{{ stages() }}</span>
        </div>
        <div>
          当前状态：
          <span>{{ status() }}</span>
        </div>
        <!-- <div>
          当前阶段：
          <span>{{11}}</span>
        </div>
        <div>
          当前状态：
          <span>{{11}}</span>
        </div>-->
      </div>
      <div class="one">
        <div class="text-center">
          <v-btn rounded absolute left color="#00eed4" dark>状态刷新</v-btn>
        </div>
        <div class="text-center">
          <v-btn rounded absolute right color="#00eed4" dark>查看技能</v-btn>
        </div>
      </div>
      <v-row justify="center">
        <v-btn
          color="primary"
          dark
          @click.stop="dialog = true"
          fab
          x-large
          absolute
          top
          left
          v-on:click.native="watch"
          >查看<br>身份</v-btn
        >

        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="headline">您当前的身份是</v-card-title>

            <v-card-text>
              <img
                alt="Identity"
                src="../assets/wolfes.jpg"
                v-if="this.srcimg[0]"
              />
              <img
                alt="Identity"
                src="../assets/prophet.jpg"
                v-if="this.srcimg[1]"
              />
              <img
                alt="Identity"
                src="../assets/village.jpg"
                v-if="this.srcimg[2]"
              />
              <img
                alt="Identity"
                src="../assets/witch.jpg"
                v-if="this.srcimg[3]"
              />
              <img
                alt="Identity"
                src="../assets/hunter.jpg"
                v-if="this.srcimg[4]"
              />
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="green darken-1" text @click="dialog = false"
                >关闭</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.one {
  /* position: relative; */
  width: 450px;
  margin: 100px auto;
}
.two {
  margin-top: 150px;
}
.two div {
  margin: 50px;
  color: #007fff;
  font-weight: 700;
}
.v-btn--absolute.v-btn--right,
.v-btn--fixed.v-btn--right {
  right: 90px;
}
.container {
  overflow: hidden;
  height: 100%;
}
.v-btn--absolute.v-btn--right[data-v-cb9355ca],
.v-btn--fixed.v-btn--right[data-v-cb9355ca] {
  right: 40px;
}
.v-btn--absolute.v-btn--left,
.v-btn--fixed.v-btn--left {
  left: 40px;
}
.v-btn--absolute.v-btn--bottom,
.v-btn--fixed.v-btn--bottom {
  bottom: 70px;
}
.v-btn--fab.v-size--x-large.v-btn--absolute.v-btn--top {
    top: 130px;
}
.day span{
  position: absolute;
  width: 100px;
  height: 35px;
  right: 20px;
  top: 140px;
  font-size: 25px;
}
</style>

<script>
// import Title from "@/components/Title.vue";
import Header from "@/components/Header.vue";

export default {
  data() {
    return {
      dialog: false,
      timer: "",
      statu: ["游戏中", "被狼人刀", "被投票出局", "被毒杀", "被猎杀"],
      stage: ["夜晚", "宣告昨夜情况", "发言阶段", "投票阶段"],
      srcimg: [false, false, false, false, false],
    };
  },
  components: {
    // Title,
    Header,
  },
  // computed: {
  //   watch: function() {
  //     if (this.$store.state.gameStatus.playerInf[0].identity === "wolf") {
  //       return require("../assets/" + this.srcimg[0] + ".jpg")
  //     } else if (
  //       this.$store.state.gameStatus.playerInf[0].identity === "prophet"
  //     ) {
  //       return require("../assets/" + this.srcimg[1] + ".jpg")
  //     } else if (
  //       this.$store.state.gameStatus.playerInf[0].identity === "villager"
  //     ) {
  //       return require("../assets/" + this.srcimg[2] + ".jpg")
  //     } else if (
  //       this.$store.state.gameStatus.playerInf[0].identity === "witch"
  //     ) {
  //       return require("../assets/" + this.srcimg[3] + ".jpg")
  //     } else if (
  //       this.$store.state.gameStatus.playerInf[4].identity === "hunter"
  //     ) {
  //       return require("../assets/" + this.srcimg[0] + ".jpg")
  //     }
  //   };
  // },
  methods: {
    update() {
      this.$store.dispatch("gameStatus/updateStatus", {
        roomID: this.$store.state.gameInit.roomID,
        name: this.$store.state.gameInit.name,
      });
    },
    watch: function() {
      if (this.$store.state.gameStatus.playerInf[0].identity === "wolf") {
        this.srcimg[0] = true;
      } else if (
        this.$store.state.gameStatus.playerInf[0].identity === "prophet"
      ) {
        this.srcimg[1] = true;
      } else if (
        this.$store.state.gameStatus.playerInf[0].identity === "villager"
      ) {
        this.srcimg[2] = true;
      } else if (
        this.$store.state.gameStatus.playerInf[0].identity === "witch"
      ) {
        this.srcimg[3] = true;
      } else if (
        this.$store.state.gameStatus.playerInf[0].identity === "hunter"
      ) {
        this.srcimg[4] = true;
      }
    },
    // watch() {
    //   switch(this.$store.state.gameStatus.playerInf[0].identity){
    //     // wolf, prophet, witch, village, hunter
    //     case "wolf":
    //       this.srcimg = require("../assets/wolfes.jpg");
    //       break;
    //     case "prophet":
    //       this.srcimg = require("../assets/prophet.jpg");
    //       break;
    //     case "witch":
    //       this.srcimg = require("../assets/witch.jpg");
    //       break;
    //     case "villager":
    //       this.srcimg = require("../assets/village.jpg");
    //       break;
    //     case "hunter":
    //       this.srcimg = require("../assets/hunter.jpg");
    //       break;
    //     default:
    //       this.srcimg = "../assets/hunter.jpg";
    //   }
    // },
    status: function() {
      if (this.$store.state.gameStatus.playerInf[0].isAlive === 1) {
        return this.statu[0];
      } else if (this.$store.state.gameStatus.playerInf[0].isAlive === -1) {
        return this.statu[1];
      } else if (this.$store.state.gameStatus.playerInf[0].isAlive === -2) {
        return this.statu[2];
      } else if (this.$store.state.gameStatus.playerInf[0].isAlive === -3) {
        return this.statu[3];
      } else if (this.$store.state.gameStatus.playerInf[0].isAlive === -4) {
        return this.statu[4];
      }
    },
    stages: function() {
      if (this.$store.state.gameStatus.activeState[0] === 1) {
        if (this.$store.state.gameStatus.activeState[1] === 0) {
          return this.stage[1];
        } else if (this.$store.state.gameStatus.activeState[1] === 1) {
          return this.stage[2];
        } else if (this.$store.state.gameStatus.activeState[1] === 2) {
          return this.stage[3];
        }
      } else if (this.$store.state.gameStatus.activeState[0] === 0) {
        return this.stage[0];
      }
    },
  },
  computed: {
    isStart: function() {
      return this.$store.state.gameStatus.isStart;
    },
  },
  mounted() {
    this.timer = setInterval(this.update, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  watch: {
    isStart(val) {
      if (!val) {
        this.$router.push("result");
      }
    },
  },
};
</script>
