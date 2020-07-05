<template>
  <div class="d-flex flex-column align-center">
    <Title msg="创建房间"></Title>
    <Form />
    <Button msg="创建"></Button>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";
import Form from "@/components/Form.vue";
import Button from "@/components/Button.vue";
export default {
  name: "Home",
  components: {
    Title,
    Button,
    Form
  }
};
</script>
