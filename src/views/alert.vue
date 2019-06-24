<template>
  <pp-body>
    <pp-button type="primary" @click="showAlert">alert</pp-button>
  </pp-body>
</template>

<script>
  export default {
    name: "alert",
    methods: {
      showAlert() {
        this.$PPalert({
          title: 'alert title',
          text: 'alert content'
        })
      }
    }
  }
</script>

<style scoped>

</style>
