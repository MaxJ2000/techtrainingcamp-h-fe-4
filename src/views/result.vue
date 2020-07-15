<template>
  <div class="result">
    <Title>[游戏结果页]</Title>
    <h4>当前局赢家:</h4>
    <div class="three">
      aaa - 女巫
    </div>
    <div class="three">
      bbb - 预言家
    </div>
    <div class="three">
      ccc - 猎人
    </div>
    <div class="three">
      ddd - 平民
    </div>
    <h4>其余玩家:</h4>
    <div class="three">
      eee - 狼人
    </div>
    <v-row justify="center">
      <v-btn
        color="primary"
        dark
        @click.stop="dialog = true"
        absolute
        bottom
        right
      >
        排行榜
      </v-btn>

      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="headline ">[排行榜]</v-card-title>

          <v-card-text>
            <div>aaa 赢三局</div>
            <div>bbb 赢三局</div>
            <div>ccc 赢两局</div>
            <div>ddd 赢两局</div>
            <div>eee 赢一局</div>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="dialog = false">
              关闭
            </v-btn>
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
    };
  },
  components: {
    Title,
  },
};
</script>
