<template>
  <pp-slide direction="right">
    <div class="tab-panel" v-show="show">
      <slot></slot>
    </div>
  </pp-slide>
</template>

<script>
  /**
   *
   * @param res
   * @author
   *
   */
  import PpSlide from '../slide/pp-slide'
  export default {
    name: "pp-segment",
    props:['name','label'],
    data(){
      return {
        show: false,
        currentName: this.name
      }
    },
    components:{
      PpSlide
    },
    methods: {
      updateNav () {
        this.$parent.updateNav();
      }
    },
    watch:{
      name (val) {
        this.currentName = val;
        // this.updateNav();
      },
      label () {
        // this.updateNav();
      },
    },
    mounted () {
      // console.log('mounted in tab-panel')
      this.updateNav();
    },
    destroyed () {
      this.updateNav();
    }

  }
</script>
