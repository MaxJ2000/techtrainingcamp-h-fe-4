<template>
  <div class="hello">
    <Header>字节跳动狼人杀</Header>
    <v-container fluid>
      <!-- <Title>[首页]</Title> -->
      <v-row no-gutters class="mb-0" justify="center">
        <v-col cols="12">
          <img alt="WolfKill logo" src="../assets/wolf1.jpg" />
        </v-col>
      </v-row>
      <div class="row">
        <div class="mb">
          <v-btn
            depressed
            x-large
            fab
            height="150px"
            width="150px"
            color="primary"
            class="btn1"
            to="/home"
          >
            我是
            <br />上帝
          </v-btn>
        </div>
        <div>
          <v-btn
            depressed
            x-large
            height="150px"
            width="150px"
            fab
            color="success"
            class="btn1 right"
            to="/about"
          >
            我是
            <br />玩家
          </v-btn>
        </div>
      </div>
      <div id="rule">
        <Dialogs />
      </div>
    </v-container>
  </div>
</template>
<style scoped>
h3 {
  margin: 50px;
}
.row {
  position: relative;
  width: auto;
  margin: 0px auto 0;
  height: 320px;
}
/* .btn1 {
  background-color: #AA5F2C !important;
} */
.right {
  position: absolute;
  right: 0px;
}
#rule {
  position: absolute !important;
  bottom: 70px !important;
  right: 120px !important;
  width: 125px !important;
  height: 40px !important;
}
.mb {
  margin-bottom: 200px;
}
img {
  width: 300px;
  background-color: grey;
  /* margin: 0 auto; */
}
.container {
  overflow: hidden;
  margin-top: -55px;
}
.col-12 {
  /* text-align: center!important; */
  flex: 0 0 90%;
}
.v-application .primary {
  background-color: #007fff !important;
  border-color: #007fff !important;
}
.v-application .success {
  background-color: #00d3b4 !important;
  border-color: #00d3b4 !important;
}
.v-btn.v-size--x-large {
  font-size: 2rem;
}
</style>

<script>
import Dialogs from "@/components/Dialogs.vue";
// import Title from "@/components/Title.vue";
import Header from "@/components/Header.vue";
export default {
  name: "HelloWorld",
  components: {
    Dialogs,
    // Title,
    Header,
  },
  methods: {},
};
</script>
