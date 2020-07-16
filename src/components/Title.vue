<template>
  <h1 class="my-3 font-weight-bold display-1">{{msg}}</h1>
</template>
<script>
export default {
  name: "Title",
  props: {
    msg: String
  }
};
</script>