<template>
  <v-row justify="center">
    <v-btn
      color="primary"
      dark
      @click.stop="dialog = true"
    >
      游戏规则说明
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>

        <v-card-text>
          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<style scoped>
div.row.btn.justify-center {
  width: 125px;
  height: 40px;
}
div.row.justify-center {
    margin: 0;
}
</style>
<script>
  export default {
    name: "Dialogs",
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>