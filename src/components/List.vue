<template>
  <v-container class="lighten-5 ma-auto">
    <v-row class="mb-0" no-gutters v-for="(oneStatus, i) in eachStatus" :key="i">
      <v-col v-for="(inf, j) in oneStatus" :key="inf+isChecked[i]" :cols="j === 0 ? 8 : 4">
        <template v-if="j===1&&canBeChecked(inf)">
          <v-card
            transition="scale-transition"
            :class="['pa-2',isChecked[i] ? 'red accent-2' : '']"
            outlined
            tile
            @click="
          ()=>{
            change(i);
            }"
          >{{ inf }}</v-card>
        </template>
        <template v-if="j===1&&!canBeChecked(inf)">
          <v-card :class="['pa-2']" color="blue-grey lighten-4
" outlined tile>{{ inf }}</v-card>
        </template>
        <template v-if="j!==1">
          <v-card :class="['pa-2']" outlined tile>{{ inf }}</v-card>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: "List",
  props: {
    eachStatus: Array,
    isChecked: Array,
    change: Function
  },
  computed: {},
  data: () => ({}),
  methods: {
    reload() {
      this.$forceUpdate();
    },
    canBeChecked(val) {
      if (val === "死亡" || val === "解药不可用" || val === "毒药不可用") {
        return false;
      }
      return true;
    }
  }
};
</script>
