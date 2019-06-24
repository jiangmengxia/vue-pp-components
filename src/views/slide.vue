<template>
  <pp-body>
    <pp-button @click="showSlideToLeft">slide to left</pp-button>
    <pp-slide direction="left">
      <div v-if="slideTLShow" style="background: #ff9900">slide to left</div>
    </pp-slide>
    <pp-button @click="showSlideToRight">slide to right</pp-button>
    <pp-slide direction="right">
      <div v-if="slideTRShow" style="background: #ff0000">slide to right</div>
    </pp-slide>
    <pp-button @click="showSlideToTop">slide to top</pp-button>
    <pp-slide direction="top">
      <div v-if="slideTTShow" style="background: #a71d5d">slide to left</div>
    </pp-slide>
    <pp-button @click="showSlideToBottom">slide to bottom</pp-button>
    <pp-slide direction="bottom">
      <div v-if="slideTBShow" style="background: #795da3">slide to left</div>
    </pp-slide>
  </pp-body>
</template>

<script>
  export default {
    name: "slide",
    data() {
      return {
        slideTLShow: false,
        slideTRShow:false,
        slideTTShow:false,
        slideTBShow:false
      }
    },
    methods: {
      showSlideToLeft() {
        this.slideTLShow = true
      },
      showSlideToRight(){
        this.slideTRShow = true
      },
      showSlideToTop() {
        this.slideTTShow = true
      },
      showSlideToBottom() {
        this.slideTBShow = true
      },
    }
  }
</script>

<style scoped>

</style>
