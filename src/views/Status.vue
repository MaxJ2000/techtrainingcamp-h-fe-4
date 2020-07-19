<template>
  <div class="d-flex flex-column align-center">
    <!-- <Title>[{{titleContent}}]</Title> -->
    <Header>{{ titleContent }}</Header>
    <v-btn
      color="primary"
      dark
      @click.stop="dialog = true"
      large
      absolute
      bottom
      right
      >上帝台词</v-btn
    >

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline ma-auto">上帝主持流程</v-card-title>

        <v-card-text left>
          夜晚阶段：<br />
          &nbsp;&nbsp;&nbsp;&nbsp;1、天黑请闭眼，狼人请睁眼，狼人请杀人，狼人请闭眼。<br />
          2、女巫请睁眼，昨晚他死了，你有一瓶解药，要救吗？你有一瓶毒药要用吗？毒谁？好的，女巫请闭眼。<br />
          3、预言家请睁眼预言家请选择一位玩家查验身份，好人是向上，坏人是向下，他的身份是这个，预言家请闭眼。<br />
          4、猎人请睁眼，确认身份，你的开枪状态为这个，可开枪是向上，不可开枪是向下，猎人请闭眼。<br />
          白天阶段：<br />
          5、天亮了，竞选警徽的请举手，请发言，没有上警的玩家请投票，好，警长确定（第一天）。<br />
          6、昨晚死的是他，请发表遗言。<br />
          7、请警长选择从死左或死右开始发言。<br />
          8、开始投票。
          <v-spacer></v-spacer>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false"
            >关闭</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div class="day">
      <span>第{{ this.$store.state.gameStatus.dayCount + 1 }}天</span>
    </div>
    <List :eachStatus="printStatus" :isChecked="isChecked" :change="change" />
    <Button v-on:click.native="nextStep" msg="下一步"></Button>
    <Button v-on:click.native="abort" msg="强行结束"></Button>
  </div>
</template>
<style scoped>
.v-btn {
  margin: 20px auto;
}
div {
  margin: 70px auto;
  color: #007fff;
  font-weight: 700;
}
.day span {
  position: absolute;
  width: 100px;
  height: 35px;
  right: 20px;
  font-size: 25px;
}
.v-btn--absolute.v-btn--bottom,
.v-btn--fixed.v-btn--bottom {
  bottom: 50px;
}
.v-card {
  margin: 0 !important;
  height: 655px;
}
.v-card__actions {
  margin: 0 !important;
  height: 50px;
}
.v-card__text {
  margin: 0 !important;
  text-align: left !important;
  padding-bottom: 0 !important;
}
</style>

<script>
// @ is an alias to /src
// import Title from "@/components/Title.vue";
import List from "@/components/List.vue";
import Button from "@/components/Button.vue";
import Header from "@/components/Header.vue";
export default {
  name: "Status",
  components: {
    // Title,
    List,
    Button,
    Header,
  },
  data: () => ({
    isChecked: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    dialog: false,
    titleFullDataBase: [
      [
        "夜晚：狼人行动",
        "夜晚：女巫解药",
        "夜晚：女巫毒药",
        "夜晚：预言家查验",
        "夜晚：猎人状态",
      ],
      ["白天：昨日情况", "白天：玩家发言", "白天：投票放逐"],
    ],
    statusFullDataBase: [
      ["狼人击杀", "女巫复活", "女巫毒杀", "预言家查验", "猎人状态"],
      ["存活", "存活", "投票放逐"],
    ],
    status2Action: {
      狼人击杀: "markKnife",
      女巫复活: "markCure",
      女巫毒杀: "markPoison",
      // 猎人状态: "",
      投票放逐: "voteOut",
    },
  }),

  computed: {
    canHunterShoot: function() {
      return this.$store.getters["gameStatus/canHunterShoot"];
    },
    hunter: function() {
      const hunter = this.$store.state.gameStatus.playerInf.find(
        (item) => item.identity === "猎人"
      );
      return hunter;
    },
    hunterShoot: function() {
      return this.$store.state.gameStatus.hunterShoot;
    },
    isShooting: function() {
      if (!this.hunterShoot) {
        if (!this.hunter) {
          return false;
        }
        if (this.hunter.isAlive < 0 && this.canHunterShoot) {
          return true;
        }
      }
      return false;
    },
    isStart: function() {
      return this.$store.state.gameStatus.isStart;
    },
    dayCount: function() {
      return this.$store.state.gameStatus.dayCount;
    },
    activeState: function() {
      return this.$store.state.gameStatus.activeState;
      // return [0, 0];
    },
    personalInf: function() {
      // return [
      //   { name: "asdf", identity: "dasf" },
      //   { name: "fads ", identity: "asdflsa" }
      // ];
      return this.$store.state.gameStatus.playerInf;
    },

    deitiesList: function() {
      return this.$store.state.gameInit.deitiesList;
    },
    titleDataBase: function() {
      let tmp = [[], []];
      tmp[0].push(this.titleFullDataBase[0][0]);
      if (this.deitiesList.find((item) => item === "女巫")) {
        tmp[0].push(this.titleFullDataBase[0][1]);
        tmp[0].push(this.titleFullDataBase[0][2]);
      }
      if (this.deitiesList.find((item) => item === "预言家")) {
        tmp[0].push(this.titleFullDataBase[0][3]);
      }
      if (this.deitiesList.find((item) => item === "猎人")) {
        tmp[0].push(this.titleFullDataBase[0][4]);
      }
      tmp[1] = this.titleFullDataBase[1];
      return tmp;
    },
    statusDataBase: function() {
      let tmp = [[], []];
      tmp[0].push(this.statusFullDataBase[0][0]);
      if (this.deitiesList.find((item) => item === "女巫")) {
        tmp[0].push(this.statusFullDataBase[0][1]);
        tmp[0].push(this.statusFullDataBase[0][2]);
      }
      if (this.deitiesList.find((item) => item === "预言家")) {
        tmp[0].push(this.statusFullDataBase[0][3]);
      }
      if (this.deitiesList.find((item) => item === "猎人")) {
        tmp[0].push(this.statusFullDataBase[0][4]);
      }
      tmp[1] = this.statusFullDataBase[1];
      return tmp;
    },
    statusContent: function() {
      if (this.isShooting) {
        return "猎人射杀";
      }
      if (this.activeState[0] === 0) {
        return this.statusDataBase[0][this.activeState[1]];
      } else {
        return this.statusDataBase[1][this.activeState[1]];
      }
    },
    titleContent: function() {
      if (this.isShooting) {
        return "白日：猎人开枪";
      }
      if (this.activeState[0] === 0) {
        return this.titleDataBase[0][this.activeState[1]];
      } else {
        return this.titleDataBase[1][this.activeState[1]];
      }
    },
    isCuring: function() {
      return this.titleContent === "夜晚：女巫解药" ? 1 : 0;
    },
    isPosion: function() {
      return this.titleContent === "夜晚：女巫毒药" ? 1 : 0;
    },
    witchIsAlive: function() {
      const witch = this.$store.state.gameStatus.playerInf.find(
        (item) => item.identity === "女巫"
      );
      if (!witch) {
        return false;
      }
      if (witch.isAlive > 0) {
        return true;
      } else {
        return false;
      }
    },
    printStatus: function() {
      let status = [];
      // console.log(this.$store);
      if (this.isShooting) {
        for (let i of this.personalInf) {
          let tmp = [];
          tmp.push(i.name + "是" + i.identity);
          if (i.isAlive > 0) {
            tmp.push(this.statusContent);
          } else {
            tmp.push("死亡");
          }
        }
      }
      if (this.activeState[0] === 0) {
        for (let i of this.personalInf) {
          let tmp = [];
          if (
            this.titleContent !== "夜晚：猎人状态" &&
            !this.isCuring &&
            !this.isPosion
          ) {
            // console.log(i);
            tmp.push(i.name + "是" + i.identity);
            if (i.isAlive > 0) {
              tmp.push(this.statusContent);
            } else {
              tmp.push("死亡");
            }
          } else if (this.isCuring) {
            let killedGuy = this.personalInf[
              this.$store.state.gameStatus.waitingState.killedByKnife
            ];
            console.log(killedGuy);
            if (killedGuy && killedGuy.name === i.name) {
              tmp.push(i.name + "被狼击杀");
              if (
                this.$store.state.gameStatus.waitingState.savedByCured < -1 ||
                !this.witchIsAlive
              ) {
                tmp.push("解药不可用");
              } else {
                tmp.push(this.statusContent);
              }
            }
          } else if (this.isPosion) {
            tmp.push(i.name + "是" + i.identity);
            if (
              this.$store.state.gameStatus.waitingState.killedByPoison < -1 ||
              !this.witchIsAlive
            ) {
              tmp.push("毒药不可用");
            } else if (i.isAlive > 0) {
              tmp.push(this.statusContent);
            } else {
              tmp.push("死亡");
            }
          } else {
            if (i.identity === "猎人") {
              tmp.push(i.name + "是" + i.identity);
              if (
                this.$store.getters["gameStatus/canHunterShoot"] &&
                !this.$store.state.gameStatus.hunterShoot
              ) {
                tmp.push("可以射击");
              } else {
                tmp.push("不可射击");
              }
            }
          }
          status.push(tmp);
        }
      } else {
        for (let i of this.personalInf) {
          // console.log(i);
          let tmp = [];
          tmp.push(i.name + "是" + i.identity);
          if (i.isAlive > 0) {
            tmp.push(this.statusContent);
          } else {
            tmp.push("死亡");
          }
          status.push(tmp);
        }
      }
      return status;
    },
  },
  methods: {
    reload() {
      this.$forceUpdate();
    },
    change(num) {
      setTimeout(() => {
        const val = 1 - this.isChecked[num];
        this.isChecked.fill(0);
        this.isChecked.splice(num, 1, val);
      }, 100);
    },
    checkedKey() {
      for (let [index, item] of this.isChecked.entries()) {
        if (item) {
          return index;
        }
      }
    },
    nextStep() {
      const key = this.checkedKey();
      console.log("key" + key);
      if (key === undefined && this.statusContent === "狼人击杀") {
        return; //todo tips
      }
      // if (key) {
      //   if (this.activeState[0] === 0) {
      //     if (this.activeState[1] === 0) {
      //       this.$store.dispatch("gameStatus/markKnife", key);
      //     } else if (this.activeState[1] === 1) {
      //       1;
      //     } else if (this.activeState[1] === 2) {
      //       this.$store.dispatch("gameStatus/markPoison", key);
      //     } else if (this.activeState[1] === 3) {
      //       this.$store.dispatch("gameStatus/markCure", key);
      //     }
      //   }
      // }
      // console.log(this.$store.state.gameStatus.isStart);
      if (this.isShooting) {
        this.$store.dispatch("gameStatus/shootOut", key);
      }
      let action = this.status2Action[this.statusContent];
      console.log(action);
      if (action && key !== undefined) {
        this.$store.dispatch("gameStatus/" + action, key);
      }
      this.isChecked = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.$store.dispatch("gameStatus/nextStep");
    },
    abort() {
      this.$store.dispatch("gameStatus/abort");
      this.$router.push("result");
    },
  },
  mounted: function() {
    this.$store.dispatch("gameInit/startGame");
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
