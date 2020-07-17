<template>
  <div class="d-flex flex-column align-center">
    <!-- <Title>[等待]</Title> -->
    <Header>[等待]</Header>
    <Circular :progress="rate"></Circular>
    <v-btn
      depressed
      large
      rounded
      color="primary"
      class="btn1"
      to="/status"
      @click="gameStart"
      v-if="(this.$store.state.gameInit.currentPlayerNum === this.$store.state.gameInit.playerNum) && this.$store.state.gameInit.name === '_God'"
    >开始游戏</v-btn>
  </div>
</template>

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
    }
  },
  mounted() {
    this.timer = setInterval(this.update, 3000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  gameStart() {
    this.$store.dispatch("gameInit/startGame");
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
