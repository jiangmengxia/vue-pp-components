<template>
  <pp-container>
    <pp-header v-show="!Info.hideHeader">
      <pp-navbar>{{Info.title}}</pp-navbar>
    </pp-header>
    <router-view></router-view>
    <pp-footer v-show="!!Info.showFooter">footer</pp-footer>
  </pp-container>
</template>

<script>
  import HelloWorld from './views/HelloWorld'

  export default {
    name: 'App',
    computed: {
      Info() {
        let meta = this.$route.meta
        return meta
      }
    },
    components: {
      HelloWorld
    }
  }
</script>

<!--<style src="./lib/style/index.sass" lang="sass"></style>-->
<!--<style src="./mytheme/theme.sass" lang="scss"></style>-->
<style src="../dist/vpc.css"></style>

