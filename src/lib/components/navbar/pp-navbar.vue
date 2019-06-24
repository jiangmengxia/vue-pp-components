<template>
  <!--现根据type获得样式，没有type根据background-->
  <div class="nav-bar" v-bind:root="root">
    <!--<pp-button type="nostyle" backgroundColor='transparent' class="nav-back" @click="goback" v-if="root!='root'">-->
      <!--<pp-icon name="arrow-left1" :size=28 :color="!type ? color:''"></pp-icon>-->
      <i class="pp-icon icon iconfont icon-arrow-left1 nav-back btn" @click="goback" v-if="root!='root'"></i>
    <!--</pp-button>-->
    <slot></slot>
  </div>
</template>

<script>
  import PpIcon from "../icon/pp-icon";
  import PpButton from '../button/pp-button'

  export default {
    components: {PpIcon, PpButton},
    name: "pp-navbar",
    props: {
      root: {
        type: String,
        default: ''
      },
      backgroundColor: {
        type: String,
        default: 'transparent'
      },
      color: {
        type: String,
        default: '#333'
      },
      type: {
        type: String,
      }
    },
    methods: {
      goback() {
        window.history.go(-1)
      }
    },
  }
</script>
