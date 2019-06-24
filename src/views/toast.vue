<template>
  <pp-body>
    <pp-button @click="showToast">show toast</pp-button>
  </pp-body>
</template>

<script>
  export default {
    name: "toast",
    methods: {
      showToast() {
        this.$PPtoast({
          title: 'title',
          text: 'toast text',
          duration: 3000,
          type: 'error',
        })
      }
    }
  }
</script>

<style scoped>

</style>
