<template>
  <v-dialog v-if="show"
            v-model="show"
            max-width="500px"
  >
      <v-text-field
          label="Target Url"
      ></v-text-field>
    <v-btn @click="show=false">Close</v-btn>
  </v-dialog>
</template>
<script>
export default {
  name: 'UrlForm',
  data () {
    return {
      show: true,
    }
  },
  methods: {
    open () {
      this.show = true
    }
  }
}
</script>