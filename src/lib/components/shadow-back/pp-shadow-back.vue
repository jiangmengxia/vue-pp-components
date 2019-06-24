<template>
  <!--<transition name="fade">-->
  <fade>
    <div class="shadow" v-if="show">
      <slot></slot>
    </div>
  </fade>

  <!--</transition>-->
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

<style scoped>
  .shadow {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .5);
    overflow: scroll;
  }
</style>
