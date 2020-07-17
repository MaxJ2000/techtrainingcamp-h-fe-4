<template>
  <div class="d-flex flex-column align-center">
    <Title>[夜晚：狼人行动]</Title>
    <List :eachStatus="eachStatus" :isChecked="isChecked" />
    <Button msg="创建"></Button>
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
    isChecked: [
      [0, 0, 1],
      [0, 0, 1],
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0]
    ]
  }),
  computed: {
    activeState: () => {
      return this.$store.state.gameStatus.activeState;
    },
    personalInf: () => {
      return this.$store.state.gameStatus.playerInf;
    },
    printStatus: () => {
      let status = [];
      if (this.activeState[0] === 0) {
        for (let i in this.personalInf) {
          let tmp = [];
          tmp.push(i.name + "是" + i.identify);
          if (this.activeState[0][0] === 0) {
            tmp.push("狼刀");
          } else if (this.activeState[0][0] === 1) {
            continue;
          } else if (this.activeState[0][0] === 2) {
            tmp.push("解药");
          } else if (this.activeState[0][0] === 3) {
            tmp.push("毒药");
          } else if (this.activeState[0][0] === 4) {
            tmp.push("猎人");
          }
          status.push(tmp);
        }
      }
      return status;
    }
  }
};
</script>
