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
  // created() {
  //   this.getCurrentNum();
  //   this.timer = setInterval(this.getCurrentNum, 3000)
  // },
  
  data() {
    return {
      timer: "",
    };
  },
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
      
    },
  },
  mounted() {
    this.timer = setInterval(this.update, 3000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
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
