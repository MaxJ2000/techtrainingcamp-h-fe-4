<template>
  <div class="d-flex flex-column align-center">
    <Title>[夜晚：狼人行动]</Title>
    <List :eachStatus="eachStatus" :isChecked="isChecked" />
    <Button msg="创建"></Button>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";
import List from "@/components/List.vue";
import Button from "@/components/Button.vue";
export default {
  name: "Status",
  components: {
    Title,
    List,
    Button,
  },
  data: () => ({
    eachStatus: [
      ["aaa是女巫", "被刀", "猎杀"],
      ["aaa是狼人", "被刀", "猎杀", "毒杀"],
      ["aaa是狼人", "被刀", "猎杀", "毒杀"],
      ["bbb是村民", "被刀", "猎杀", "毒杀"],
      ["ccc是村民", "被刀", "猎杀", "毒杀"],
    ],
    isChecked: [
      [0, 0, 1],
      [0, 0, 1],
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
  }),
};
</script>
