<template>
  <v-btn rounded left color="#00eed4" dark>{{ msg }}</v-btn>
</template>
<script>
export default {
  name: "Button",
  props: {
    msg: String
  }
};
</script>
