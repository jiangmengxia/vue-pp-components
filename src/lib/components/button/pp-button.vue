<template>
  <!--现根据type获得样式，没有type根据background-->
  <button class="pp-button" :type="type" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "pp-button",
    props: {
      // backgroundColor: {
      //   default: 'buttonface',
      //   type: String
      // },
      // color: {
      //   default: '#222',
      //   type: String
      // },
      type: {
        type: String,
      }
    },
    methods: {
      handleClick() {
        this.$emit('click')
      }
    }
  }
</script>

<!--<style scoped>-->
<!---->
<!--</style>-->
