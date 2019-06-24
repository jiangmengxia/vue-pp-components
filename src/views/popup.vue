<template>
  <pp-body>
    <pp-button @click="openPopup">open popUp</pp-button>
    <pp-pop-up v-model="showPopup" @cancel="showPopup=false" title="this is title">
        this is content
    </pp-pop-up>
  </pp-body>
</template>

<script>
  export default {
    name: "popup",
    data() {
      return {
        showPopup: false
      }
    },
    methods: {
      openPopup() {
        this.showPopup = true
      }
    }
  }
</script>

<style scoped>

</style>
