<template>
  <pp-body>
    <pp-button type="primary" @click="showActionSheet">actionsheet</pp-button>
  </pp-body>
</template>

<script>
  export default {
    name: "actionsheet",
    methods: {
      showActionSheet() {
        this.$PPactionsheet({
          title: 'title',
          content: 'content',
          buttons: [{
            text: '确认',
            role: 'confirm',
            handler: () => {

            }
          }, {
            text: '取消',
            role: 'cancel',
            handler: () => {

            }
          },
          ]
        })
      }
    }
  }
</script>

<!--<style scoped>-->

<!--</style>-->
