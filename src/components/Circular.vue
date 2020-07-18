<template>
  <v-progress-linear :value="progress" height="10px" color="#00eed4"></v-progress-linear>
</template>

<script>
export default {
  name: "Circular",
  props: {
    progress: Number,
  },
};
</script>
