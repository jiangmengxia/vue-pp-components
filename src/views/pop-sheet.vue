<template>
  <pp-body>
    <pp-button type="dark" @click="openPopsheet">open pop-sheet</pp-button>
    <pp-pop-sheet v-model="show" @change="(e)=>this.show=e" style="z-index: 1">

      <div>this is popsheet inner content</div>
      <br>
    </pp-pop-sheet>
  </pp-body>
</template>

<script>
  export default {
    name: "pop-sheet",
    data() {
      return {
        show: false
      }
    },
    methods: {
      openPopsheet() {
        this.show = true
      }
    }
  }
</script>

<style scoped>

</style>
