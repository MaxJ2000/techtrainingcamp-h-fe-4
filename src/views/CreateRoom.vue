<template>
  <div class="d-flex flex-column align-center">
    <Title msg="创建房间"></Title>
    <InfChip msg="00000"></InfChip>
    <Button msg="创建"></Button>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";
import InfChip from "@/components/InfChip.vue";
import Button from "@/components/Button.vue";
export default {
  name: "Home",
  components: {
    Title,
    InfChip,
    Button,
  },
};
</script>
