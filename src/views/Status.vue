<template>
  <div class="d-flex flex-column align-center">
    <Title>[夜晚：狼人行动]</Title>
    <List :eachStatus="printStatus" :isChecked="isChecked" :change="change" />
    <Button v-on:click.native="nextStep" msg="下一步"></Button>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";
import List from "@/components/List.vue";
import Button from "@/components/Button.vue";
export default {
  name: "Status",
  components: {
    Title,
    List,
    Button
  },
  data: () => ({
    isChecked: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }),
  computed: {
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
    printStatus: function() {
      let status = [];
      if (this.activeState[0] === 0) {
        for (let i of this.personalInf) {
          console.log(i);
          let tmp = [];
          tmp.push(i.name + "是" + i.identity);
          if (this.activeState[1] === 0) {
            tmp.push("狼刀");
          } else if (this.activeState[1] === 1) {
            continue;
          } else if (this.activeState[1] === 2) {
            tmp.push("解药");
          } else if (this.activeState[1] === 3) {
            tmp.push("毒药");
          } else if (this.activeState[1] === 4) {
            tmp.push("猎人");
          }
          status.push(tmp);
        }
      } else {
        for (let i of this.personalInf) {
          console.log(i);
          let tmp = [];
          tmp.push(i.name + "是" + i.identity);
          // if (this.$store.state.gameStatus.activeState[0] === 0) {
          //   tmp.push("狼刀");
          // } else if (this.$store.state.gameStatus.activeState[1] === 1) {
          //   continue;
          // } else if (this.$store.state.gameStatus.activeState[1] === 2) {
          //   tmp.push("解药");
          // } else if (this.$store.state.gameStatus.activeState[1] === 3) {
          //   tmp.push("毒药");
          // } else if (this.$store.state.gameStatus.activeState[1] === 4) {
          //   tmp.push("猎人");
          // }
          status.push(tmp);
        }
      }
      return status;
    }
  },
  methods: {
    reload() {
      this.$forceUpdate();
    },
    change(num) {
      this.isChecked[num] = 1 - this.isChecked[num];
    },
    checkedKey() {
      for (let index in this.isChecked) {
        if (this.isChecked[index]) {
          return index;
        }
      }
    },
    nextStep() {
      const key = this.checkedKey();
      console.log(key);
      if (key) {
        if (this.activeState[0] === 0) {
          if (this.activeState[1] === 0) {
            this.$store.dispatch("gameStatus/markKnife", key);
          } else if (this.activeState[1] === 1) {
            1;
          } else if (this.activeState[1] === 2) {
            this.$store.dispatch("gameStatus/markPoison", key);
          } else if (this.activeState[1] === 3) {
            this.$store.dispatch("gameStatus/markCure", key);
          }
        }
      }
      console.log(this.$store.state.gameStatus.isStart);
      this.$store.dispatch("gameStatus/nextStep");
      this.reload();
    }
  },
  mounted: function() {
    this.$store.dispatch("gameInit/startGame");
  }
};
</script>
