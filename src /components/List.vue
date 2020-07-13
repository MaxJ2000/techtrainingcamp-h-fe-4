<template>
  <v-container class="grey lighten-5">
    <v-row class="mb-6" no-gutters v-for="(oneStatus,index) in eachStatus" :key="index">
      <v-col v-for="(inf,index) in oneStatus" :key="inf" :cols="index===0?6:2">
        <v-card class="pa-2" outlined tile>{{inf}}</v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "List",
  props: {
    eachStatus: Array
  },
  data: () => ({})
};
</script>