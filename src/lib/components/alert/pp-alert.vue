<template>
  <shadow-back :show="show" style="z-index: 1001" class="alert-wrap">
    <div class="alert" v-if="show">
      <div class="header">
        <br>
        <h4 class="title">{{title}}</h4>
      </div>
      <div class="text">
        <span>{{text}}</span>
      </div>
      <div class="footer" v-if="type==='alert'">
        <button class="alert-btn" @click="confirm">{{confirmText}}</button>
      </div>
      <div class="footer" v-else>
        <button class="confirm-btn-cancel" @click="close">{{cancelText}}</button>
        <button class="confirm-btn" @click="confirm">{{confirmText}}</button>
      </div>
    </div>
  </shadow-back>
</template>

<script>
  import ShadowBack from '../shadow-back/pp-shadow-back'

  export default {
    name: "pp-alert",
    components: {ShadowBack},
    props: {
      title: {
        type: String,
        default: '提示'
      },
      text: {
        type: String,
        default: '提示内容'
      },
      ok: {
        type: Function,
        default: (cb) => {
        }
      },
      type: {
        type: String,
        default: 'alert'
      },
      confirmText:{
        type: String,
        default:'确认'
      },
      cancelText:{
        type: String,
        default:'取消'
      }
    },
    data() {
      return {
        show: false
      }
    },
    computed: {},
    methods: {
      open() {
        this.show = true
      },
      close() {
        this.show = false
      },
      confirm() {
        this.ok()
        this.close()
      }
    },
    destroyed() {
      this.show = false
    },
  }
</script>
