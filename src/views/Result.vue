<template>
  <div class="result">
    <!-- <Title>[游戏结果页]</Title> -->

    <template v-if="!isAbort"
      ><Header>[游戏结果页]</Header>
      <h4>当前局赢家:</h4>
      <div
        class="three"
        v-for="(item, index) in winner"
        v-bind:key="'winner' + index"
      >
        {{ item }}
      </div>
      <h4>其余玩家:</h4>
      <div
        class="three"
        v-for="(item, index) in loser"
        v-bind:key="'loser' + index"
      >
        {{ item }}
      </div>
      <v-row justify="center">
        <v-btn
          color="primary"
          dark
          @click.stop="dialog = true"
          absolute
          right
          bottom
          >排行榜</v-btn
        >
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="headline">
              <p class="ma-auto">[排行榜]</p>
            </v-card-title>

            <v-card-text>
              <div v-for="(item, index) in ranking" :key="'ranking' + index">
                {{ item }}
              </div>
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
    </template>
    <template v-else>
      <Header>[游戏强制结束]</Header>
      <div
        class="mt-20
      "
      >
        <v-card class="ma-auto" flat>
          <v-card-title class="headline mb-5">
            <p class="ma-auto">[排行榜]</p>
          </v-card-title>
          <v-card-text class="subtitle-1 ">
            <div v-for="(item, index) in ranking" :key="'ranking' + index">
              {{ item }}
            </div>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </div>
    </template>

    <v-btn
      depressed
      large
      color="primary"
      class="btn1"
      to="/wait"
      v-on:click.native="restartGame"
      >重新开始</v-btn
    >
  </div>
</template>

<style scoped>
.three {
  border: 1px solid black;
  width: 200px;
  margin: 20px auto;
}
h4 {
  margin-top: 50px;
}
.v-btn {
  margin-top: 30px;
}
.v-btn--absolute.v-btn--bottom,
.v-btn--fixed.v-btn--bottom {
  bottom: 80px;
}
div.v-card_text {
  margin: 0!important;
}
</style>

<script>
// import Title from "@/components/Title.vue";
import Header from "@/components/Header.vue";
export default {
  data() {
    return {
      dialog: false,
      // winner: ["aaa - 女巫", "bbb - 预言家", "ccc - 猎人", "ddd - 平民"],
      // loser: ["eee - 狼人", "fff - 狼人"],
      // rank: [
      //   "aaa 赢三局",
      //   "bbb 赢三局",
      //   "ccc 赢两局",
      //   "ddd 赢两局",
      //   "eee 赢一局",
      //   "fff 赢一局",
      // ],
    };
  },
  computed: {
    name: function() {
      return this.$store.state.gameInit.name;
    },
    isAbort: function() {
      return this.$store.state.gameStatus.isAbort;
    },
    winGroup: function() {
      return this.$store.state.ranking.winGroup;
    },
    loseGroup: function() {
      return this.$store.state.ranking.loseGroup;
    },
    rankings: function() {
      return this.$store.state.ranking.rankings;
    },
    winner: function() {
      let tmp = [];
      for (let item of this.winGroup) {
        tmp.push(item.name + " - " + item.identity);
      }
      return tmp;
    },
    loser: function() {
      let tmp = [];
      for (let item of this.loseGroup) {
        tmp.push(item.name + " - " + item.identity);
      }
      return tmp;
    },
    ranking: function() {
      let tmp = [];
      for (let item of this.rankings) {
        tmp.push(item.name + "  赢" + +item.winTimes + "局");
      }
      return tmp;
    },
  },
  mounted() {
    if (this.$store.state.gameInit.name !== "_God") {
      this.$store.dispatch("ranking/updateRankings");
    } else {
      this.$store.dispatch("ranking/sortedList");
    }
  },
  methods: {
    restartGame: function() {
      this.$store.state.gameInit.currentPlayerNum = 0;
      if (this.name === "_God") {
        this.$store.dispatch("gameInit/startGame");
        // console.log("what's up bro");
      } else {
        this.$store.dispatch("gameInit/joinRoom", {
          roomID: this.$store.state.gameInit.roomID,
          name: this.$store.state.gameInit.name,
        });
      }
    },
  },
  components: {
    // Title,
    Header,
  },
};
</script>
