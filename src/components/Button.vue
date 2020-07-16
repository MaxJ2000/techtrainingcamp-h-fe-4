<template>
  <v-btn rounded left color="primary" dark>{{ msg }}</v-btn>
</template>
<script>
export default {
  name: "Button",
  props: {
    msg: String
  }
};
</script>
