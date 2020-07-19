<template>
  <!-- <v-toolbar dense absolute min-width="100%" color="#757575"> -->
  <v-toolbar height="100px" absolute min-width="100%" class="font-weight-medium" color="#00d3b4">
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
  font-weight: 900;
  font-size: 2rem;
  font-family: "Microsoft YaHei" !important;
}
/* .header {
  height: 100px;
} */
</style>

<script>
export default {};
</script>