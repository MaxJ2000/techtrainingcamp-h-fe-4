<template>
  <v-container class="grey lighten-5">
    <v-row
      class="mb-0"
      no-gutters
      v-for="(oneStatus, i) in eachStatus"
      :key="i"
    >
      <v-col v-for="(inf, j) in oneStatus" :key="inf" :cols="j === 0 ? 6 : 2">
        <v-card
          :class="['pa-2']"
          :color="j > 0 && isChecked[i][j - 1] ? 'red' : ''"
          outlined
          tile
          >{{ inf }}</v-card
        >
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
  },
  data: () => ({}),
};
</script>
