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
      to="/home"
      v-on:click.native="creat"
      v-if="this.$store.state.gameInit.currentPlayerNum === this.$store.state.gameInit.playerNum"
      >开始游戏</v-btn
    >
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
  // data: () => ({
  //   rate: 0
  // }),
  computed: {
    rate: function() {
      return (
        (this.$store.state.gameInit.currentPlayerNum /
          this.$store.state.gameInit.playerNum) *
        100
      );
    }
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
