<template>
  <div class="pp-body" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
    <div class="refresh text-center" ref="refreshBox" :style="{transform:'translateY(' + delta + 'px)'}">
      <div class="text-center" v-if="showRefreshIcon">
        <pp-icon name="arrow-solid-down" :size=30></pp-icon>
        <p style="margin-top: 5px">{{refreshTitle}}</p>
      </div>
      <pp-loading v-if="!showRefreshIcon"></pp-loading>
    </div>
    <!--<div v-if="!!scroll" class="real-content" :style="{transform:'translateY(' + delta + 'px)'}" @scroll="scrollHandler" ref="content">-->
    <div v-if="!!scroll" class="real-content" @scroll="scrollHandler" ref="content">
      <slot></slot>
      <div class="loading-more text-center">
        <pp-loading v-if="showScrollLoading"></pp-loading>
      </div>
    </div>
    <!--<div v-else class="real-content" :style="{transform:'translateY(' + delta + 'px)'}" ref="content">-->
    <div v-else class="real-content" ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Pploading from '../loading/pp-loading'

  export default {
    name: "pp-body",
    components: {Pploading},
    props: {
      refreshTitle: {
        type: String,
        required: false,
        default: 'pull to refresh...'
      },
      refresh: {
        type: Boolean,
        require: false,
        default: false,
      },
      scroll: {
        type: Boolean,
        required: false,
        default: false,
      }
    },
    data() {
      return {
        pageX: 0,
        pageY: 0,
        showRefresh: false,
        showRefreshIcon: true,
        delta: 0,
        isRefreshing: false,
        isScrolling: false,
        showScrollLoading: false,
      }
    },
    methods: {
      touchStart(e) {
        if (!this.refresh) return
        if (!this.isRefreshing) {
          this.pageX = e.targetTouches[0].pageX
          this.pageY = e.targetTouches[0].pageY
        }
      },
      touchMove(e) {
        if (!this.refresh) return
        if (this.$refs.content.scrollTop > 0) return;
        if (!this.isRefreshing) {
          if (e.targetTouches[0].pageY > this.pageY) {//向下滑动
            this.delta = e.targetTouches[0].pageY - this.pageY
            e.preventDefault()

            if (this.delta > this.$refs.refreshBox.clientHeight) {
              console.log('超出距离')
              this.touchEnd()
            }
          }
        }
      },
      touchEnd(e) {
        if (!this.refresh) return
        if (!this.isRefreshing) {
          let refreshHeight = this.$refs.refreshBox.clientHeight
          if (this.delta > 2 * refreshHeight / 3) {/*刷新*/
            this.showRefreshIcon = false
            this.refreshHandler()
          } else {
            this.delta = 0;
            this.isRefreshing = false
            this.showRefreshIcon = true;
          }
        }
      },
      refreshHandler() {
        this.isRefreshing = true;
        if (this.$refs.content.scrollTop > 0) return;
        let refreshHeight = this.$refs.refreshBox.clientHeight
        this.delta = refreshHeight
        this.showRefreshIcon = false
        this.$emit('on-refresh', this.refreshEnd.bind(this))
      },
      /*刷新结束*/
      refreshEnd() {
        this.inter = setInterval(() => {
          if (this.delta > 0) {
            this.delta -= 0.8
          } else {
            this.delta = 0
            this.isRefreshing = false
            this.showRefreshIcon = true;
            clearInterval(this.inter)
            console.log('----------------------------end')
          }
        }, 1)
      },
      scrollHandler(e) {
        console.log(e, this.isScrolling)
        if (this.isScrolling) return
        let scrollHeight = e.target.scrollHeight
        let clientHeight = e.target.clientHeight
        let scrollTop = e.target.scrollTop
        // console.log('scrollHeight - clientHeight - scrollTop ', scrollHeight - clientHeight - scrollTop)
        if (scrollHeight - clientHeight - scrollTop <= 120) {
          this.showScrollLoading = true;
          this.isScrolling = true
          this.$emit('on-scroll', this.scrollEnd.bind(this))
        }
      },
      scrollEnd() {
        this.showScrollLoading = false;
        this.isScrolling = false
      }
    },
    destroyed() {
      clearInterval(this.inter)
    }
  }
</script>
