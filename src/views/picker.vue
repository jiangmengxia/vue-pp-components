<template>
  <pp-picker label="地址选择" v-model="pickerValue"></pp-picker>
</template>

<script>
  import PpPicker from "../lib/components/picker/pp-picker";
  export default {
    name: "picker",
    components: {PpPicker},
    data() {
      return {
        pickerValue: false
      }
    }
  }
</script>

<style scoped>

</style>
