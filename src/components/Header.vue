<template>
  <!-- <v-toolbar dense absolute min-width="100%" color="#757575"> -->
    <v-toolbar height="100px" absolute min-width="100%" class="font-weight-medium" color="#00eed4">
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
h3 {
  color: white;
  font-size: 2rem;
}
/* .header {
  height: 100px;
} */
</style>

<script>
export default {};
</script>