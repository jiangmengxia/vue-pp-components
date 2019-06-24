<template>
  <div :type="type" class="loading"></div>
</template>

<script>
  export default {
    name: "pp-loading",
    props:{
      type:{
        type: String,
        default:'default'
      }
    }
  }
</script>
