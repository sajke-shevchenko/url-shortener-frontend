<template>
<h1>{{ message }}</h1>
</template>

<script>
export default {
  name: "ErrorPage",
  data() {
    return {
      message: "",
    }
  },
  mounted() {
    this.message = this.$route.params.message;
  }
}
</script>
