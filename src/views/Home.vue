<template>
  <div class="home">
    <img alt="WolfKill logo" src="../assets/timg.jpg" />
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
