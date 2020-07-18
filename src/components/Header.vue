<template>
  <v-toolbar class="toolbar" dense absolute min-width="100%" color="primary">
      <v-spacer></v-spacer>
    <v-toolbar-title center>
      <h3>
        <slot></slot>
      </h3>
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>
<style scoped>
 .toolbar {
      height: 45px;
  }
  h3 {
    color: white!important;
    text-decoration: none;
  }

</style>

<script>
export default {};

</script>