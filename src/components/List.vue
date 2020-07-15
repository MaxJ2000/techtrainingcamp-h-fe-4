<template>
  <v-container class="grey lighten-5">
<<<<<<< HEAD
    <v-row class="mb-6" no-gutters v-for="(oneStatus,index) in eachStatus" :key="index">
      <v-col v-for="(inf,index) in oneStatus" :key="inf" :cols="index===0?6:2">
        <v-card class="pa-2" outlined tile>{{inf}}</v-card>
=======
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
>>>>>>> jiangjun-component
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "List",
  props: {
<<<<<<< HEAD
    eachStatus: Array
  },
  data: () => ({})
};
</script>
=======
    eachStatus: Array,
    isChecked: Array,
  },
  data: () => ({}),
};
</script>
>>>>>>> jiangjun-component
