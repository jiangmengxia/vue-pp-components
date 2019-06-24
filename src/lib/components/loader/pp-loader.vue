<template>
  <div class="loader" v-if="showLoader">
    <pp-shadow-back :show="show">
      <div class="loading-box" v-if="show">
        <div class="loading-content">
          <div class="loading-table">
            <pp-loading></pp-loading>
            <span class="loading-text">{{text}}</span>
          </div>
        </div>
      </div>
    </pp-shadow-back>
  </div>
</template>

<script>
  export default {
    name: "pp-loader",
    data() {
      return {
        show: false,
        loadingTimer: -1,
        showLoader: false,
      }
    },
    props: {
      text: {
        type: String,
        default: 'please wait...'
      },
      duration: {
        type: Number,
        default: -1
      }
    },
    methods: {
      open() {
        this.showLoader = true
        if (this.loadingTimer > 0) {
          this.loadingTimer = -1
        }
        this.show = true
        if (this.duration == -1) {

        } else {
          this.loadingTimer = setTimeout(() => {
            this.close()
            this.showLoader = false
            return
          }, this.duration)
        }
      },
      close() {
        this.show = false
        this.loadingTimer = -1
      }
    },
    destroyed() {
      this.close()
    }
  }
</script>
