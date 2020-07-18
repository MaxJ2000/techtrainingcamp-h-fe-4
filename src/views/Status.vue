<template>
  <div class="d-flex flex-column align-center">
    <!-- <Title>[{{titleContent}}]</Title> -->
    <Header>{{ titleContent }}</Header>
    <div>第{{ dayCount }}天</div>
    <List :eachStatus="printStatus" :isChecked="isChecked" :change="change" />
    <Button v-on:click.native="nextStep" msg="下一步"></Button>
    <Button v-on:click.native="nextStep" msg="强行结束"></Button>
  </div>
</template>
<style scoped>
.v-btn {
  margin: 20px auto;
}
div {
  margin: 20px auto;
  color: #007fff;
  font-weight: 700;
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
    isChecked: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
      if (this.deitiesList.find((item) => item === "witch")) {
        tmp[0].push(this.titleFullDataBase[0][1]);
        tmp[0].push(this.titleFullDataBase[0][2]);
      }
      if (this.deitiesList.find((item) => item === "prophet")) {
        tmp[0].push(this.titleFullDataBase[0][3]);
      }
      if (this.deitiesList.find((item) => item === "hunter")) {
        tmp[0].push(this.titleFullDataBase[0][4]);
      }
      tmp[1] = this.titleFullDataBase[1];
      return tmp;
    },
    statusDataBase: function() {
      let tmp = [[], []];
      tmp[0].push(this.statusFullDataBase[0][0]);
      if (this.deitiesList.find((item) => item === "witch")) {
        tmp[0].push(this.statusFullDataBase[0][1]);
        tmp[0].push(this.statusFullDataBase[0][2]);
      }
      if (this.deitiesList.find((item) => item === "prophet")) {
        tmp[0].push(this.statusFullDataBase[0][3]);
      }
      if (this.deitiesList.find((item) => item === "hunter")) {
        tmp[0].push(this.statusFullDataBase[0][4]);
      }
      tmp[1] = this.statusFullDataBase[1];
      return tmp;
    },
    statusContent: function() {
      if (this.activeState[0] === 0) {
        return this.statusDataBase[0][this.activeState[1]];
      } else {
        return this.statusDataBase[1][this.activeState[1]];
      }
    },
    titleContent: function() {
      if (this.activeState[0] === 0) {
        return this.titleDataBase[0][this.activeState[1]];
      } else {
        return this.titleDataBase[1][this.activeState[1]];
      }
    },
    printStatus: function() {
      let status = [];
      // console.log(this.$store);
      if (this.activeState[0] === 0) {
        for (let i of this.personalInf) {
          let tmp = [];
          if (this.titleContent !== "夜晚：猎人状态") {
            // console.log(i);
            tmp.push(i.name + "是" + i.identity);
            if (i.isAlive > 0) {
              tmp.push(this.statusContent);
            } else {
              tmp.push("死亡");
            }
          } else {
            if (i.identity === "hunter") {
              tmp.push(i.name + "是" + i.identity);
              if (this.$store.getters["gameStatus/canHunterShoot"]) {
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
      this.isChecked[num] = 1 - this.isChecked[num];
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
      let action = this.status2Action[this.statusContent];
      console.log(action);
      if (action && key !== undefined) {
        this.$store.dispatch("gameStatus/" + action, key);
      }
      this.isChecked = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.$store.dispatch("gameStatus/nextStep");
    },
  },
  mounted: function() {
    this.$store.dispatch("gameInit/startGame");
  },
};
</script>
