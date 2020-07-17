<template>
  <div class="result">
    <Title>[游戏结果页]</Title>
    <h4>当前局赢家:</h4>
    <div class="three" v-for="(item, index) in winner" v-bind:key="index">
      {{ item }}
    </div>
    <h4>其余玩家:</h4>
    <div class="three" v-for="(item, index) in loser" v-bind:key="index">
      {{ item }}
    </div>
    <v-row justify="center">
      <v-btn
        color="primary"
        dark
        @click.stop="dialog = true"
        absolute
        bottom
        right
        >排行榜</v-btn
      >

      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="headline">
            <p class="ma-auto">[排行榜]</p>
          </v-card-title>

          <v-card-text>
            <div v-for="(item, index) in rank" v-bind:key="index">
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
</style>

<script>
import Title from "@/components/Title.vue";
export default {
  data() {
    return {
      dialog: false,
      winner: ["aaa - 女巫", "bbb - 预言家", "ccc - 猎人", "ddd - 平民"],
      loser: ["eee - 狼人", "fff - 狼人"],
      rank: [
        "aaa 赢三局",
        "bbb 赢三局",
        "ccc 赢两局",
        "ddd 赢两局",
        "eee 赢一局",
        "fff 赢一局"
      ]
    };
  },
  components: {
    Title
  }
};
</script>
