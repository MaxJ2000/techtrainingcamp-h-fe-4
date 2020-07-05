<template>
  <div class="d-flex flex-column align-center">
    <Title msg="创建房间"></Title>
    <List :eachStatus="eachStatus" />
    <Button msg="创建"></Button>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";
import List from "@/components/List.vue";
import Button from "@/components/Button.vue";
export default {
  name: "Home",
  components: {
    Title,
    List,
    Button
  },
  data: () => ({
    eachStatus: [
      ["aaa是女巫", "被刀", "猎杀"],
      ["dafsfa", "daf", "fdaf", "dfass"],
      ["dfafasdf", "fdas", "daf"]
    ]
  })
};
</script>
