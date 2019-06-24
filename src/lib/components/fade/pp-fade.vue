<template>
  <transition name="fade">
    <slot></slot>
  </transition>
</template>

<script>
  export default {
    name: "pp-fade",
    computed: {
      transition() {
        return 'opacity' + (this.props / 1000).toFixed(1)
      }
    }
  }
</script>

