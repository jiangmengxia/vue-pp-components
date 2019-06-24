<template>
  <pp-body>
    <pp-loading></pp-loading>
    default loading<br/>
    <pp-loading type="primary"></pp-loading>
    primary loading<br/>
    <pp-loading type="success"></pp-loading>
    success loading<br/>
    <pp-loading type="warn"></pp-loading>
    warn loading<br/>
    <pp-loading type="error"></pp-loading>
    error loading<br/>
    <pp-loading type="dark"></pp-loading>
    dark loading
  </pp-body>
</template>

<script>
  export default {
    name: "loading"
  }
</script>

<style scoped>

</style>
