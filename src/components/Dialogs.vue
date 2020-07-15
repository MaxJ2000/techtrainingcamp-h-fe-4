<template>
  <v-row justify="center">
    <v-btn color="primary" dark @click.stop="dialog = true">
      游戏规则说明
    </v-btn>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">
          <p class="ma-auto">狼人杀游戏规则</p>
        </v-card-title>

        <v-card-text>
          具体游戏规则
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
</template>
<style scoped>
div.row.btn.justify-center {
  width: 125px;
  height: 40px;
}
div.row.justify-center {
  margin: 0;
  width: 125px;
  height: 40px;
}
</style>
<script>
export default {
  name: "Dialogs",
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
