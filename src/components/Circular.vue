<template>
  <v-progress-linear :value="progress"></v-progress-linear>
</template>

<script>
export default {
  name: "Circular",
  props: {
    progress: Number,
  },
};
</script>
