<template>
  <div class="d-flex flex-column align-center">
    <Title>[等待]</Title>
    <Circular :progress="progress"></Circular>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";
import Circular from "@/components/Circular.vue";
export default {
  name: "wait",
  components: {
    Circular,
    Title,
  },
  data: () => ({
    progress: 80,
  }),
};
</script>
