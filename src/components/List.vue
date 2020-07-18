<template>
  <v-container class="lighten-5">
    <v-row class="mb-0" no-gutters v-for="(oneStatus, i) in eachStatus" :key="i">
      <v-col v-for="(inf, j) in oneStatus" :key="inf+isChecked[i]" :cols="j === 0 ? 8 : 4">
        <v-card
          v-if="j===1"
          :class="['pa-2']"
          :color=" isChecked[i] ? 'red' : ''"
          outlined
          tile
          @click="
          ()=>{
            change(i);
            reload();}"
        >{{ inf }}</v-card>
        <v-card v-else :class="['pa-2']" outlined tile>{{ inf }}</v-card>
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
  data: () => ({}),
  methods: {
    reload() {
      this.$forceUpdate();
    }
  }
};
</script>
