<template>
  <!--<div id="app" style="height: 100%">-->
  <pp-container>
    <pp-header v-show="!Info.hideHeader">
      <pp-navbar>{{Info.title}}</pp-navbar>
    </pp-header>
    <router-view></router-view>
    <pp-footer v-show="!!Info.showFooter">footer</pp-footer>
  </pp-container>
  <!--</div>-->
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

<style src="./lib/style/index.sass" lang="sass"></style>
<style src="./mytheme/theme.sass"
