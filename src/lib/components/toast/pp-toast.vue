<template>
  <div class="toast text-center" v-if="show">
    <div class="toast-content">
      <pp-icon class="toast-icon success" v-if="type=='success'" name="success1" :size="40"></pp-icon>
      <pp-icon class="toast-icon warn" v-else-if="type=='warn'" name="warning1" :size="40"></pp-icon>
      <pp-icon class="toast-icon error" v-else-if="type=='error'" name="error1" :size="40"></pp-icon>
      <div class="text">
        {{text}}
      </div>
    </div>
  </div>
</template>

<script>
  /**
   *
   * @param res
   * @author
   *
   */
  export default {
    name: "toast",
    props: {
      type: {
        default: 'error',//error warning ,success
        type: String
      },
      text: {
        type: String,
        default: ''
      },
      show: {
        type: Boolean,
        default: false
      },
      duration: {
        type: Number,
        default: 2000,
      },
      cb: {
        type: Function,
        default: () => {
        }
      }
    },
    data() {
      return {
        timeout: ''
      }
    },
    methods: {
      open() {
        let self = this;
        if (this.timeout) this.clear()
        this.timeout = setTimeout(() => {
          self.show = false
          if (self.cb)
            self.cb()
          this.clear()
        }, self.duration)
      },
      clear() {
        clearTimeout(this.timeout)
        this.timeout = ''
      }
    },
    destroyed() {
      this.clear()
    }
  }
</script>
