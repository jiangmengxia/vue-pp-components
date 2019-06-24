<template>
  <!--<pp-container>-->
    <!--<pp-header>-->
      <!--<pp-navbar color="#fff">-->
        <!--layout-->
      <!--</pp-navbar>-->
    <!--</pp-header>-->
    <pp-body :refresh="true" :scroll="true" @on-scroll="scrollhandle" @on-refresh="refreshhandler" refreshTitle="please wait...">
        <li v-for="item in list" style="padding: 12px">{{item}}</li>
    </pp-body>
    <!--<pp-footer>footer</pp-footer>-->
  <!--</pp-container>-->
</template>

<script>
  export default {
    name: "container",
    data(){
      return {
        list:[]
      }
    },
    methods: {
      refreshhandler(cb) {
        setTimeout(()=>{
          cb()
        },3000)
      },
      scrollhandle(cb){
        let len = this.list.length
        setTimeout(()=>{
          for(let i=len;i<len+20;i++){
            this.list.push('item:'+i)
          }
          cb()
        },3000)
      }
    },
    created(){
      for(let i=0;i<20;i++){
        this.list.push('item:'+i)
      }
    }
  }
</script>

<style scoped>

</style>
