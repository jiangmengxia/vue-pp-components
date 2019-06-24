<template>
  <pp-shadow-back :show="value">
    <pp-slide>
      <div class="flex-column pop-sheet" style="height: 100%" v-if="value">
        <div style="flex: 1;" @click="cancel"></div>
        <div class="pop-sheet-content">
          <slot></slot>
        </div>
      </div>
    </pp-slide>
  </pp-shadow-back>
</template>

<script>
  export default {
    name: "pp-pop-sheet",
    props: {
      value: {
        type: Boolean,
      }
    },
    methods: {
      cancel() {
        this.$emit('input', false)
      }
    },
  }
</script>

