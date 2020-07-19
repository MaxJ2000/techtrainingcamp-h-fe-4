<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="name" :counter="10" :rules="nameRules" label="昵称" required></v-text-field>
    <v-text-field v-model="email" :rules="emailRules" label="狼人人数" required></v-text-field>
    <v-text-field v-model="name" :counter="10" :rules="nameRules" label="村民人数" required></v-text-field>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12">
          <v-combobox v-model="select" :items="items" label="可选神牌" multiple chips></v-combobox>
        </v-col>
      </v-row>
    </v-container>
        <v-container class="ma-center">
      <v-radio-group v-model="row" row>
        <v-radio label="屠边" value="radio-1"></v-radio>
        <v-radio label="屠城" value="radio-2" checked></v-radio>
      </v-radio-group>
          </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      select: ["女巫", "猎人","预言家"],
      items: ["女巫", "猎人","预言家"]
    };
  }
};
</script>