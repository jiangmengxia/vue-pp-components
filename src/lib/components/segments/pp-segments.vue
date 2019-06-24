<template>
  <div class="tab-container" ref="tabContainer">
    <div class="tab-bar" ref="tabBar">
      <div class="tab-bar-item text-center" :type="type" v-for="item in navList" @click="checkoutTab(item.name)"
           :class="{ active : (item.name===activeKey)  } " :style="{width:segWidth}">{{item.label}}
      </div>
    </div>
    <div class="tab-content">
      <slot></slot>
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
    name: "pp-segments",
    computed: {
      segWidth() {
        return (100 / this.navList.length) + '%'
      },
    },
    data() {
      return {
        navList: [],
        activeKey: '',
        widthSetted: false,
      }
    },
    watch: {
      name(name) {
        this.activeKey = name;
        this.updateStatus();
      }
    },
    props: {
      name: {
        type: String,
        required: true,

      },
      type: {
        type: String,
        default: 'default'
      }
    },
    methods: {
      getTabs() {
        return this.$children.filter(item => item.$options.name === 'pp-segment');
      },
      updateNav() {
        this.navList = [];
        let tabs = this.getTabs();
        console.log(tabs)
        tabs.forEach((pan) => {
          this.navList.push({
            name: pan.currentName,
            label: pan.label,
            pan: pan,
          })
        })
        this.checkoutTab(this.name)
      },
      checkoutTab(name) {
        this.activeKey = name;
        this.updateStatus();
        this.$emit('change', name)
      },
      updateStatus() {
        const tabs = this.getTabs();
        tabs.forEach(tab => tab.show = (tab.currentName === this.activeKey));
      },
      // setTabBarItemWidth() {
      //   let list = this.$refs.tabContainer.querySelectorAll('.tab-bar-item')
      //   list.forEach((item) => {
      //     item.style.width = (100 / (list.length)) + '%'
      //   })
      //   this.widthSetted = true
      // }
    },
    // updated() {
    //   if (!this.widthSetted)
    //     this.setTabBarItemWidth()
    // },
    mounted() {

    }
  }
</script>

