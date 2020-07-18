<template>
  <div class="d-flex flex-column align-center">
    <!-- <Title>[等待]</Title> -->
    <Header>等待开始</Header>
    <div class="rm">
      房间号：
      <span>{{ this.$store.state.gameInit.roomID }}</span>
    </div>
    <img alt="WolfKill logo" src="../assets/nv.jpg" />
    <Circular :progress="rate"></Circular>
    <div
      class="circular"
    >已进入玩家:{{this.$store.state.gameInit.currentPlayerNum}} / {{this.$store.state.gameInit.playerNum}}</div>
    <v-btn
      depressed
      large
      rounded
      color="primary"
      class="btn1"
      to="/status"
      v-if="(this.$store.state.gameInit.currentPlayerNum === this.$store.state.gameInit.playerNum) && this.$store.state.gameInit.name === '_God'"
    >开始游戏</v-btn>
  </div>
</template>
<style scoped>
img {
  width: 200px;
  height: 200px;
  margin: 50px auto;
}
.circular {
  color: #00eed4;
  margin-top: 50px;
}
.rm {
  color: #007fff;
  font-weight: 700;
  margin-top: 10px;
}
.rm span {
  color: white;
  background-color: #007fff;
}
</style>

<script>
// @ is an alias to /src
// import Title from "@/components/Title.vue";
import Circular from "@/components/Circular.vue";
import Header from "@/components/Header.vue";
export default {
  name: "wait",
  components: {
    Circular,
    // Title,
    Header
  },
  data() {
    return {
      timer: ""
    };
  },
  // created() {
  //   this.getCurrentNum();
  //   this.timer = setInterval(this.getCurrentNum, 3000)
  // },
  computed: {
    rate: function() {
      return (
        (this.$store.state.gameInit.currentPlayerNum /
          this.$store.state.gameInit.playerNum) *
        100
      );
    }
  },
  methods: {
    update() {
      this.$store.dispatch("gameInit/updateCurrNum", {
        roomID: this.$store.state.gameInit.roomID
      });
      if (this.$store.state.gameStatus.isStart) {
        if (this.$store.state.gameInit.name !== "_God") {
          this.$router.push("player");
        }
      }
    }
    // allJoin() {
    //   this.$store.dispatch("gameStatus/updateStatus", {
    //     roomID: this.$store.state.gameInit.roomID,
    //     name: this.$store.state.gameInit.name
    //   });
    // }
  },
  mounted() {
    this.timer = setInterval(this.update, 3000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }

  // computed: {
  //   progress: {
  //     get(value) {
  //       return value;
  //     },
  //   },
  // },
  // methods: {
  //   progress() {
  //     this.$store.dispatch("gameInit/progress");
  //   }
  // }
  // mounted() {
  //   setInterval(() => {
  //     this.rate =
  //       (this.$store.state.gameInit.currentPlayerNum /
  //         this.$store.state.gameInit.playerNum) *
  //       100;
  //   }, 1000);
  // }
};
</script>
