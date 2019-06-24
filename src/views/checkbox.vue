<template>
  <pp-body>
    <pp-checkbox v-model="checked" keyvalue="1" label="checkbox">primary checkbox</pp-checkbox>
    <pp-checkbox v-model="checked" keyvalue="2" label="checkbox" type="success">success checkbox</pp-checkbox>
  </pp-body>
</template>

<script>
  export default {
    name: "checkbox",
    data() {
      return {
        checked: false,
        value: 'checkbox1'
      }
    }
  }
</script>

<style scoped>

</style>
