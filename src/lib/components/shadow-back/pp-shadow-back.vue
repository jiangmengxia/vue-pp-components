<template>
  <fade>
    <div class="shadow" v-if="show">
      <slot></slot>
    </div>
  </fade>
</template>

<script>
  import Fade from '../fade/pp-fade'
  export default {
    name: "pp-shadow-back",
    components: {Fade},
    props: {
      show: {
        type: Boolean,
        default() {
          return false
        }
      }
    },
  }
</script>

