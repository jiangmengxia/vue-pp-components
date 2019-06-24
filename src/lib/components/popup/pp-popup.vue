<template>
  <div ref="popUp" class="pop-up-wrap">
    <shadow-back :show="value"></shadow-back>
    <slide>
      <div class="pop-up" v-if="value">
        <slot name="pop-header">
          <div class="pop-up-header">
            <i class="icon icon-arrow-left1 iconfont icon-back" @click="cancel"></i>
            {{title}}
          </div>
        </slot>
        <div class="pop-up-content">
          <slot></slot>
        </div>
      </div>
    </slide>
  </div>
</template>

<script>
  import Slide from "../slide/pp-slide";
  import ShadowBack from "../shadow-back/pp-shadow-back";

  export default {
    name: "pp-popup",
    data() {
      return {
        showPopup: false,
      }
    },
    props: {
      value: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String,
        default: 'title'
      }
    },
    components: {
      ShadowBack,
      Slide,
    },
    computed: {},
    methods: {
      cancel() {
        this.$emit('cancel')
      }
    },
    mounted() {
      document.getElementsByTagName('body')[0].append(this.$refs.popUp)
    },
    destroyed() {
      if (this.$refs.popUp)
        this.$refs.popUp.remove()
    }
  }
</script>
