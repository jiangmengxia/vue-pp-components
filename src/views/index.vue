<template>
  <pp-body>
    <ul class="text-center">
      <!--<pp-picker label="地址选择" v-model="pickerValue"></pp-picker>-->
      <router-link to="/container" class="border">layout</router-link>
      <router-link to="/card" class="border">card</router-link>
      <router-link to="/picker" class="border">picker</router-link>
      <router-link to="/button" class="border">button</router-link>
      <router-link to="/actionsheet" class="border">actionsheet</router-link>
      <router-link to="/alert" class="border">alert</router-link>
      <router-link to="/checkbox" class="border">checkbox</router-link>
      <router-link to="/icon" class="border">icon</router-link>
      <router-link to="/loading" class="border">loading</router-link>
      <router-link to="/loader" class="border">loader</router-link>
      <router-link to="/popsheet" class="border">popsheet</router-link>
      <router-link to="/popup" class="border">popup</router-link>
      <router-link to="/segments" class="border">segments</router-link>
      <router-link to="/toast" class="border">toast</router-link>
      <router-link to="/slide" class="border">slide</router-link>
    </ul>
  </pp-body>
</template>

<script>
  import PpPicker from "../lib/components/picker/pp-picker";

  export default {
    name: "index",
    components: {PpPicker},
    data() {
      return {
        pickerValue: ''
      }
    }
  }
</script>

<style scoped>
  .border {
    border: 1px solid #0086b3;
    display: block;
    height: 44px;
    line-height: 44px;
  }

  .border:active {
    opacity: .5;
  }
</style>
