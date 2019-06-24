<template>
  <div class="checkbox" v-bind:color="type" :class="{disabled:disabled}">
    <div class="box">
      <input v-model="theChecked" :value="keyValue" type="checkbox" :disabled="disabled" @change="handleChange"/>
      <i class="iconfont icon icon-ok" :class="{checked:!!theChecked}"></i>
    </div>
    <span v-if="label">{{label}}</span>
  </div>
</template>

<script>
  export default {
    name: "pp-checkbox",
    data() {
      return {
        theChecked: true
      }
    },
    watch: {
      value(v) {
        this.theChecked = v
      }
    },
    props: {
      value: {
        default: true,
        type: Boolean
      },
      keyValue: {
        default: '',
        type: String
      },
      disabled: {
        default: false,
        type: Boolean
      },
      label: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'primary'
      }
    },
    methods: {
      handleChange(e) {
        this.$emit('input', e.target.checked)
      }
    }
  }
</script>
