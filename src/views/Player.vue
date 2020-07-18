<template>
  <div class="player">
    <!-- <Title>[角色展示页]</Title> -->
    <Header>游戏中</Header>
    <v-container fluid>
      <div class="two">
        <div>{{ this.$store.state.gameStatus.dayCount + 1 }}</div>
        <div>
          当前阶段：
          <span>{{ stages() }}</span>
        </div>
        <div>
          当前状态：
          <span>{{ status() }}</span>
        </div>
        <!-- <div>
          当前阶段：
          <span>{{11}}</span>
        </div>
        <div>
          当前状态：
          <span>{{11}}</span>
        </div>-->
      </div>
      <div class="one">
        <div class="text-center">
          <v-btn rounded absolute left color="#00eed4" dark>状态刷新</v-btn>
        </div>
        <div class="text-center">
          <v-btn rounded absolute right color="#00eed4" dark>查看结果</v-btn>
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
          v-on:click.native="update"
          >查看角色</v-btn
        >

        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="headline">您当前的角色是</v-card-title>

            <v-card-text>预言家</v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="green darken-1" text @click="dialog = false"
                >关闭</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.one {
  /* position: relative; */
  width: 450px;
  margin: 100px auto;
}
.two div {
  margin: 50px;
  color: #007fff;
  font-weight: 700;
}
.v-btn--absolute.v-btn--right,
.v-btn--fixed.v-btn--right {
  right: 90px;
}
.container {
  overflow: hidden;
  height: 100%;
}
.v-btn--absolute.v-btn--right[data-v-cb9355ca],
.v-btn--fixed.v-btn--right[data-v-cb9355ca] {
  right: 40px;
}
.v-btn--absolute.v-btn--left,
.v-btn--fixed.v-btn--left {
  left: 40px;
}
.v-btn--absolute.v-btn--bottom,
.v-btn--fixed.v-btn--bottom {
  bottom: 70px;
}
</style>

<script>
// import Title from "@/components/Title.vue";
import Header from "@/components/Header.vue";

export default {
  data() {
    return {
      dialog: false,
      timer: "",
      statu: ["游戏中", "被狼人刀", "被投票出局", "被毒杀", "被猎杀"],
      stage: ["夜晚", "宣告昨夜情况", "发言阶段", "投票阶段"],
    };
  },
  components: {
    // Title,
    Header,
  },
  // computed: {
  //   status: function() {
  //     if(this.$store.state.gameStatus.playerInf[0].isDead === 0) {
  //       return this.statu[0];
  //     }else if(this.$store.state.gameStatus.playerInf[0].isDead === 0){
  //       return this.statu[1];
  //     }else if(this.$store.state.gameStatus.playerInf[0].isDead === 0){
  //       return this.statu[1];
  //     }else if(this.$store.state.gameStatus.playerInf[0].isDead === 0){
  //       return this.statu[1];
  //     }else if(this.$store.state.gameStatus.playerInf[0].isDead === 0){
  //       return this.statu[1];
  //     }
  //   },
  // },
  methods: {
    update() {
      this.$store.dispatch("gameStatus/updateStatus", {
        roomID: this.$store.state.gameInit.roomID,
        name: this.$store.state.gameInit.name,
      });
      if (!this.$store.state.gameStatus.isStart) {
        this.$store.dispatch("ranking/updateRankings");
        this.$router.push("result");
      }
    },
    status: function() {
      if (this.$store.state.gameStatus.playerInf[0].isAlive === 1) {
        return this.statu[0];
      } else if (this.$store.state.gameStatus.playerInf[0].isAlive === -1) {
        return this.statu[1];
      } else if (this.$store.state.gameStatus.playerInf[0].isAlive === -2) {
        return this.statu[2];
      } else if (this.$store.state.gameStatus.playerInf[0].isAlive === -3) {
        return this.statu[3];
      } else if (this.$store.state.gameStatus.playerInf[0].isAlive === -4) {
        return this.statu[4];
      }
    },
    stages: function() {
      if (this.$store.state.gameStatus.activeState[0] === 1) {
        if (this.$store.state.gameStatus.activeState[1] === 0) {
          return this.stage[1];
        } else if (this.$store.state.gameStatus.activeState[1] === 1) {
          return this.stage[2];
        } else if (this.$store.state.gameStatus.activeState[1] === 2) {
          return this.stage[3];
        }
      } else if (this.$store.state.gameStatus.activeState[0] === 0) {
        return this.stage[0];
      }
    },
  },
  mounted() {
    this.timer = setInterval(this.update, 3000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>
