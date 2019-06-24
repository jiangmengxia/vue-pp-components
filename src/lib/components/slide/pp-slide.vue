<template>
  <transition :name="slideName">
    <slot></slot>
  </transition>
</template>

<script>
  export default {
    name: "pp-slide",
    props:{
      direction:{
        type:String,
        default:'top'//向上滑
      },
      distance:{
        type:Number,
        default:120,
      }
    },
    computed: {
      slideName() {
        switch(this.direction){
          case 'top':
            return 'slide-top'
          case 'bottom':
            return 'slide-bottom'
          case 'left':
            return 'slide-left'
          case 'right':
            return 'slide-right'
          default:'slide-top'
        }
      }
    }
  }
</script>
