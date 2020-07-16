<template>
  <v-btn>{{msg}}</v-btn>
</template>
<script>
export default {
  name: "Button",
  props: {
    msg: String
  }
};
</script>