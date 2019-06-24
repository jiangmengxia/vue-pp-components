<template>
  <div class="action-sheet-wrap">
    <shadow-back :show="show"></shadow-back>
    <slide direction="top">
      <div class="action-sheet" v-if="show">
        <p class="title"><b>{{title}}</b></p>
        <p class="content" v-html="content"></p>
        <div class="buttons">
          <button class="btn-opt" v-for="item in buttons" :role="item.role" @click="item.handler();close()">
            {{item.text}}
          </button>
        </div>
      </div>
    </slide>
  </div>
</template>

<script>
  import ShadowBack from '../shadow-back/pp-shadow-back'
  import Slide from '../slide/pp-slide'

  export default {
    name: "pp-action-sheet",
    components: {
      Slide,
      ShadowBack
    },
    data() {
      return {
        show: false
      }
    },
    props: {
      title: {
        type: String,
        default: 'title'
      },
      content: {
        type: String,
        default: 'content'
      },
      buttons: {
        type: Array,
        default: () => {
          return []
        }//一个json数组 text: '名字',role: 'key值',handler:
      }
    },
    methods: {
      open() {
        this.show = true
      },
      close() {
        this.show = false
      },
    },
    destroyed() {
      this.show = false
    },
  }
</script>
