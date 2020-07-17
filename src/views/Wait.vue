<template>
  <div class="d-flex flex-column align-center">
    <Title>[等待]</Title>
    <Circular :progress="rate"></Circular>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";
import Circular from "@/components/Circular.vue";
export default {
  name: "wait",
  components: {
    Circular,
    Title
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
