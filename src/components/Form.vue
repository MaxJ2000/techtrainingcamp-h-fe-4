<template>
  <form>
    <v-text-field v-model="name" :counter="10" :error-messages="errors" label="Name" required></v-text-field>
    <v-text-field v-model="email" :error-messages="errors" label="房间号" required></v-text-field>
  </form>
</template>

<script>
export default {
  components: {},
  data: () => ({
    name: "",
    select: null,
    checkbox: null
  }),

  methods: {
    submit() {},
    clear() {
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
    }
  }
};
</script>