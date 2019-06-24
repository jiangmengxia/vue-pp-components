<template>
  <i :class="'pp-icon icon iconfont icon-'+name" :type="type" :style="{fontSize:size+'px'}"></i>
</template>

<script>
  export default {
    name: "pp-icon",
    props: {
      type: {
        default: 'default',
        type: String
      },
      name: {
        type: String,
        required: true,
        default: ''
      },
      size: {
        type: Number,
        default: 28,
      }
    }
  }
</script>

