<template>
  <div class="home">
    <!-- <Title>[创建房间]</Title> -->
    <Header>我是上帝</Header>
    <v-container fluid>
      <div class="rm">
        房间号：
        <span>{{ getRoomId }}</span>
      </div>
      <!-- <div :title="godList"></div> -->
      <div class="cb">
        <v-slider v-model="valueWolf" class="mt-4" :label="'狼人: ' + valueWolf" min="1" max="4"></v-slider>
        <v-slider
          v-model="valueVillage"
          class="mb-0"
          :label="'村民: ' + valueVillage"
          min="1"
          max="4"
          thumb-label
        ></v-slider>
        <!-- <v-text-field label="村民人数" hint="请输入人数" v-model="valueVillage"></v-text-field> -->
      </div>
      <!-- <div>
          <label for="name">昵称</label>
          <input type="text" placeholder="请输入昵称" id="name" />
      </div>-->
      <!-- <div>
          <label for="狼人">狼人人数</label>
          <input type="number" placeholder="请输入人数" id="狼人" @change="getValueWolf($event)" />
        </div>
        <div>
          <label for="village">村民人数</label>
          <input
            type="number"
            placeholder="请输入人数"
            id="village"
            @change="getValueVillage($event)"
          />
      </div>-->
      <v-row justify="center">
        <v-col cols="11">
          <v-select
            v-model="godList"
            :items="items"
            label="可选神职"
            multiple
            chips
            solo
            deletable-chips
          ></v-select>
        </v-col>
      </v-row>
      <v-row justify="center" class="mb-5">
        <v-chip-group mandatory v-model="mode" active-class="primary--text" center-active>
          <v-chip key="TB">屠边</v-chip>
          <v-chip key="TC">屠城</v-chip>
        </v-chip-group>
      </v-row>
      <!-- <div>
          <label>可选神牌</label>
          <input type="checkbox" value="女巫" @click="change(0)" />女巫
          <br />
          <input type="checkbox" value="猎人" @click="change(1)" />猎人
          <br />
          <input type="checkbox" value="预言家" @click="change(2)" />预言家
      </div>-->
      <!-- <div>
          <label>可选模式</label>
          <input type="radio" value="屠边" name="model" @click="radiochange" />屠边
          <br />
          <input
            type="radio"
            value="屠城"
            name="model"
            checked
            @click="radiochange"
          />屠城
      </div>-->
      <div class="cr">
        <v-btn depressed large color="primary" class="btn1" to="/wait" v-on:click.native="init">创建房间</v-btn>
        <v-btn depressed large color="primary" class="btn1" to="/">返回首页</v-btn>
      </div>
      <img alt="WolfKill logo" src="../assets/wolf1.jpg" />
    </v-container>
  </div>
</template>
<style scoped>
form div {
  margin: 20px;
}
label {
  position: absolute;
  left: 0px;
  width: 150px;
  text-align: right;
  color: #00d3b4;
}
input {
  position: relative;
  left: 100px;
}
.container {
  overflow: hidden;
  margin-top: 115px;
}
.rm {
  color: #007fff;
  font-weight: 700;
  font-size: 24px;
}
.rm span {
  color: white;
  background-color: #007fff;
}
img {
  width: 150px;
  height: 150px;
  margin-top: 30px;
}
.cb {
  margin: 0px 50px !important;
}
.v-input {
  margin: 0px auto;
}
.cr {
  margin-top: 35px;
}
.v-btn {
  margin-right: 30px;
  margin-left: 30px;
}
</style>

<script>
// @ is an alias to /src
// import Title from "@/components/Title.vue";
// import combobox from "@/components/combobox.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  data: function() {
    return {
      godList: [],
      items: ["女巫", "猎人", "预言家"],
      // picked: "TC",
      tags: ["屠边", "屠城"],
      valueVillage: undefined,
      valueWolf: undefined,
      mode: 1
    };
  },
  methods: {
    create() {
      this.$store.dispatch("gameInit/createRoom");
    },
    // change(num) {
    //   this.godList[num] = 1 - this.godList[num];
    // },
    radiochange() {
      if (this.mode === 0) {
        this.$store.state.gameInit.killSideOrAll = 1;
      } else {
        this.$store.state.gameInit.killSideOrAll = 0;
      }
    },
    init() {
      // for (let i = 0; i < this.godList.length; i++) {
      //   if (this.godList[i] === 1) {
      //     if (i === 0) {
      //       this.$store.state.gameInit.deitiesList.push("女巫");
      //     }
      //     if (i === 1) {
      //       this.$store.state.gameInit.deitiesList.push("猎人");
      //     }
      //     if (i === 2) {
      //       this.$store.state.gameInit.deitiesList.push("预言家");
      //     }
      //   }
      // }
      this.$store.state.gameInit.deitiesList = this.godList;
      this.radiochange();
      this.$store.dispatch("gameInit/initRoom", {
        roomID: this.$store.state.gameInit.roomID,
        wolfNum: this.$store.state.gameInit.wolfNum,
        villagerNum: this.$store.state.gameInit.villagerNum,
        deitiesList: this.$store.state.gameInit.deitiesList,
        killSideOrAll: this.$store.state.gameInit.killSideOrAll
      });
    },
    getValueWolf(e) {
      this.$store.commit("gameInit/getValueWolf", e);
    },
    getValueVillage(e) {
      this.$store.commit("gameInit/getValueVillage", e);
    }
  },
  components: {
    // Title,
    // combobox,
    Header
  },
  watch: {
    valueVillage(val) {
      this.getValueVillage(val);
    },
    valueWolf(val) {
      this.getValueWolf(val);
    }
  },
  computed: {
    getRoomId() {
      //console.log(this.$store.state.gameInit.roomID);
      return this.$store.state.gameInit.roomID;
    }
  },
  mounted: function() {
    this.$store.dispatch("gameInit/createRoom");
    this.$store.state.gameInit.deitiesList = [];
  }
};
</script>
