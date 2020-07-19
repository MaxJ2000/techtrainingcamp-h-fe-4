<template>
  <v-chip class="ma-2" color="purple" text-color="white">{{msg}}</v-chip>
</template>
<script>
export default {
  name: "InfChip",
  props: {
    msg: String
  }
};
</script>