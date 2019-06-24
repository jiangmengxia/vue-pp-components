<template>
  <pp-container>
    <pp-header>
      <pp-navbar backgroundColor="#f00" color="#fff">
        首页
      </pp-navbar>
    </pp-header>
    <pp-body :refresh="true" :scroll="false" @on-refresh="refreshhandler" refreshTitle="please wait...">
      <pp-picker label="地址选择" v-model="showPopSheet"></pp-picker>
      <pp-button color="#333" @click="handleClick" type="warning">toast</pp-button>
      <br/><br/>
      <button type="primary" @click="handleClickAlert">alert</button>
      <br/><br/>
      <button type="primary" @click="handleClickConfirm">confirm</button>
      <br/><br/>
      <button type="primary" @click="handleClickActionSheet">action-sheet</button>
      <br/><br/>
      <pp-card></pp-card>
      <card>
        <card-header>
          card-header
        </card-header>
        <card-content>
          card-content
        </card-content>
      </card>
      <br>
      <button type="primary" @click="handleClickPopup">pop-up</button>
      <br/><br/>
      <popup v-model="showPopup" @cancel="showPopup=false">
        <button @click="handleClickAlert">alert</button>
        <pp-button color="#333" @click="handleClick" type="warning">toast</pp-button>
        <button type="primary" @click="handleClickLoaderOpen">open loader</button>
      </popup>
      <line-item>
        <checkbox color="warn" :item="checkbox"></checkbox>
      </line-item>
      <pp-loading></pp-loading>

      <button type="primary" @click="handleClickLoaderOpen">open loader</button>
      <pp-segments name="1">
        <pp-segment name="1" label="segment1">
          segment1
          <ul class="color-light flex-item-1">
            <li>1. 发布内容必须与平台保持一致</li>
            <li>2. 任务发布时间不可低于2小时</li>
            <li>3. 图片必须为朋友圈发布的截图</li>
          </ul>
        </pp-segment>
        <pp-segment name="2" label="segment2">
          segment2
          <ul class="color-light flex-item-1">
            <li>1. 发布内容必须与平台保持一致</li>
            <li>2. 任务发布时间不可低于2小时</li>
            <li>3. 图片必须为朋友圈发布的截图</li>
          </ul>
        </pp-segment>
      </pp-segments>
      <br>
      <br><br>
      <br>
      <br><br>
      <br>
      <br><br>
      <br>
      <br><br>

    </pp-body>
    <pp-footer>
      底部
    </pp-footer>
  </pp-container>

</template>

<script>
  import Card from "../lib/components/card/pp-card";
  import CardHeader from "../lib/components/card/pp-card-header";
  import CardContent from "../lib/components/card/pp-card-content";
  import Popup from "../lib/components/popup/pp-popup";
  import LineItem from "../lib/components/item/pp-item";
  import Checkbox from "../lib/components/checkbox/pp-checkbox";
  import PpLoading from "../lib/components/loading/pp-loading"
  import PpHeader from "../lib/components/header/pp-header";
  import PpIcon from "../lib/components/icon/pp-icon";
  import PpNavbar from "../lib/components/navbar/pp-navbar";
  import PpSegments from "../lib/components/segments/pp-segments";
  import PpSegment from "../lib/components/segments/pp-segment";
  import PpButton from "../lib/components/button/pp-button";
  import PpBody from "../lib/components/body/pp-body";
  import PpFooter from "../lib/components/footer/pp-footer";
  import PpContainer from "../lib/components/container/pp-container";
  import PpPopSheet from "../lib/components/pop-sheet/pp-pop-sheet";
  import PpPicker from "../lib/components/picker/pp-picker";

  export default {
    components: {
      PpPicker,
      PpPopSheet,
      PpContainer,
      PpFooter,
      PpBody,
      PpButton,
      PpSegment,
      PpSegments,
      PpNavbar,
      PpIcon,
      PpHeader,
      PpLoading,
      Checkbox,
      LineItem,
      Popup,
      CardContent,
      CardHeader,
      Card
    },
    name: 'HelloWorld',
    data() {
      return {
        showPopSheet:true,
        checkbox: {
          checked: false,
          value: '猪头',
          label: '猪头',
        },
        showPopup: false
      }
    },
    methods: {
      refreshhandler(cb) {
        setTimeout(() => {
          cb()
        }, 1000)
      },
      handleClickPopup() {
        this.showPopup = true
      },
      handleClick() {
        this.$PPtoast({
          // position: 'top',
          type: 'success',
          text: '添加成功，在购物车等亲哦'
        })
      },
      handleClickAlert() {
        this.$PPalert('hhhh')
      },
      handleClickConfirm() {
        this.$PPconfirm({
          title: '提示',
          text: '这是一个confirm',
          ok: () => {
            console.log('-------ok')
          }
        })
      },
      handleClickActionSheet() {
        this.$PPactionsheet({
          title: 'this is title',
          content: 'this is content',
          buttons: [
            {
              text: 'ok',
              handler: () => {
                console.log('---ok')
              },
              role: 'ok'
            },
            {
              text: 'cancel',
              handler: () => {
                console.log('---cancel')
              },
              role: 'cancel'
            }
          ]
        })
      },
      handleClickLoaderOpen() {
        this.$PPloader({
          text: 'loading',
          duration: 3000
        }).open()
      }
    },
    created() {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
