<template>
  <pp-body>
    <pp-button @click="showLoader">open loader</pp-button>
  </pp-body>
</template>

<script>
  import PpLoader from "../lib/components/loader/pp-loader";

  export default {
    name: "loader",
    components: {PpLoader},
    methods: {
      showLoader() {
        this.$PPloader({
          text: 'loader text',
          content: 'loader content',
          duration: 3000
        })
      }
    }
  }
</script>

<style scoped>

</style>
