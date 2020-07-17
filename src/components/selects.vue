<template>
  <v-card>
    <v-container>
      <v-row align="center">
        <v-col cols="12" sm="6">
          <v-select
            v-model="value"
            :items="items"
            attach
            chips
            label="可选神牌"
            multiple
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: ["女巫", "猎人", "预言家"],
    value: ["女巫", "猎人", "预言家"]
  })
};
</script>
<style scoped>
div.container {
    margin: 20px auto;
}
.v-card {
    max-width: 30%;
}
</style>
