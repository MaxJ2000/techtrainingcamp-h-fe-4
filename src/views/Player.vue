<template>
  <div class="player">
    <Title>[角色展示页]</Title>
    <div class="two">
      <div>当前阶段：<span>发言阶段/投票阶段</span></div>
      <div>当前状态：<span>游戏中/已死</span></div>
    </div>
    <div class="one">
      <div class="text-center">
        <v-btn rounded absolute left color="primary" dark>状态刷新</v-btn>
      </div>
      <div class="text-center">
        <v-btn rounded absolute right color="primary" dark>查看结果</v-btn>
      </div>
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
        查看角色
      </v-btn>

      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="headline">您当前的角色是</v-card-title>

          <v-card-text>
            预言家
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
.one {
  position: relative;
  width: 450px;
  margin: 100px auto;
}
.two div {
  margin: 100px;
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
  components: { Title },
};
</script>
