<template>
  <v-row justify="center">
    <v-btn color="primary" dark @click.stop="dialog = true" class="btn1">游戏规则说明</v-btn>

    <v-dialog v-model="dialog" max-width="490">
      <v-card>
        <v-card-title class="headline">
          <p class="ma-auto">狼人杀游戏规则</p>
        </v-card-title>

        <v-card-text>
          1.规则概述两个阵营：狼人 vs 好人（好人=平民+神）两个游戏环节：黑天 and
          白天
          （黑天狼人杀人，白天所有人投票让心目中狼人出局）好人胜利条件：让所有狼人出局
          （投票出局、神发动技能）狼人胜利条件：让所有平民出局 or
          让所有神出局（杀死、投票投死）
          <br />2.各身份技能简述狼人在黑天杀死一个人女巫有一瓶解药，黑天狼人杀人时，可以救人有一瓶毒药，黑天可以毒死一个人（同一晚，不能同时用两瓶药。女巫不能自救）猎人死后可以开枪带走你心目中的狼人（被女巫毒死时，不能开枪）
          <br />3.游戏流程 <br />Step1：各玩家拿到身份
          <br />Step2：进入第一个黑夜，狼人杀人，女巫救人/毒人，预言家验人，告知猎人开枪状态
          <br />Step3：进入第一个白天，竞选警长，警长有1.5票
          <br />Step4：所有人发言，然后投票选出一个人出局
          <br />Step5：不停地重复黑夜-白天，直到某一阵营获胜
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
.btn1 {
  margin-bottom: 100px;
}
</style>
<script>
export default {
  name: "Dialogs",
  data() {
    return {
      dialog: false
    };
  }
};
</script>
