<template>
  <div class="picker-default-ft picker-default-color picker">
    <div class="line-address flex-row flex-align-items-center line-input" @click="show=true">
      <label class="text-right label picker-label-ft mr-16" :style="{width:labelWidth+'px'}" v-if="labelWidth">{{label}}</label>
      <label class="text-right label picker-label-ft mr-16" v-else>{{label}}</label>
      <label class="address-info text-right flex-item-1 picker-value-ft" :class="{'picker-placeholder-color':!addressName}">{{addressName||placeholder}}</label>
      <pp-icon name="arrow-right" color="#555" :size="18" class="ml-16"></pp-icon>
    </div>
    <pp-pop-sheet v-model="show" @change="(e)=>this.show=e" style="z-index: 1">
      <div class="address-selector flex-column">
        <div class="title text-center picker-title-ft picker-title-color">请选择</div>
        <!--已经选中的地址信息-->
        <div class="address-selector-main">
          <ul class="picker-li-color">
            <li v-if="!result.province" class="to-select" :class="{'picker-li-selected-color':showType=='province'}"
                @click="checkToProvince">选择省份
            </li>
            <li v-if="result.province" class="selected" @click="checkToProvince"
                :class="{'picker-li-selected-color':showType=='province'}">{{result.province.name}}
            </li>
            <li v-if="result.province && !result.city" class="to-select" :class="{'picker-li-selected-color':showType=='city'}"
                @click="checkToCity">
              选择城市
            </li>
            <li v-if="result.province && result.city" class="selected" @click="checkToCity"
                :class="{'picker-li-selected-color':showType=='city'}">
              {{result.city.name}}
            </li>
            <li v-if="result.province && result.city && !result.dist" class="to-select"
                :class="{'picker-li-selected-color':showType=='dist'}" @click="checkToDist">选择地区
            </li>
            <li v-if="result.province && result.city && result.dist" class="selected"
                :class="{'picker-li-selected-color':showType=='dist'}" @click="checkToDist">
              {{result.dist.name}}
            </li>
          </ul>
        </div>
        <!--选择列表-->
        <div class="address-selector-lis flex-item-1">
          <!--showType:{{showType}}-->
          <pp-slide>
            <ul class="province" v-if="provinceList &&showType==='province'">
              <!--<li class="color-default ft-12 picker-li-header-color">选择省份</li>-->
              <li v-for="(province,index) in provinceList" @click="handlerProvince(province)">
              <span v-if="result.province && province.id==result.province.id"
                    class="picker-li-selected-color">{{province.name}}</span>
                <span v-else>{{province.name}}</span></li>
            </ul>
          </pp-slide>
          <pp-slide>
            <ul class="city" v-if="cityList && showType==='city'">
              <!--<li class="color-default ft-12 picker-li-header-color">选择城市</li>-->
              <li v-for="(city,index) in cityList" @click="handlerCity(city)">
                <span v-if="result.city && city.id==result.city.id" class="picker-li-selected-color">{{city.name}}</span>
                <span v-else>{{city.name}}</span>
              </li>
            </ul>
          </pp-slide>
          <pp-slide>
            <ul class="dist" v-if="distList &&showType==='dist'">
              <!--<li class="color-default ft-12 picker-li-header-color">选择地区</li>-->
              <li v-for="(dist,index) in distList" @click="handlerDist(dist)">
                <span v-if="result.dist && dist.id===result.dist.id" class="picker-li-selected-color">{{dist.name}}</span>
                <span v-else>{{dist.name}}</span>
              </li>
            </ul>
          </pp-slide>
        </div>
      </div>
    </pp-pop-sheet>
  </div>
</template>

<script>

  import ADDRESS_CONFIG_DATA from '../../data/addressConfig'
  import PpPopSheet from "../pop-sheet/pp-pop-sheet";

  export default {
    name: "pp-picker",
    components: {PpPopSheet},
    data() {
      return {
        show: false,
        addressName: '',
        result: {
          province: null,//选中的地址信息
          city: null,
          dist: null,
        },
        provinceJsonData: {
          "100000": {"110000": "北京市", "120000": "天津市", "130000": "河北省"},
          "110000": {"110100": "市辖区"},
          "110100": {"110101": "东城区", "110102": "西城区", "110105": "朝阳区"},
          "120000": {"120100": "市辖区"},
          "120100": {"120101": "和平区", "120102": "河东区"},
          "130000": {"130100": "石家庄市", "130200": "唐山市", "130300": "秦皇岛市"},
          "130100": {"130101": "市辖区", "130102": "长安区"}
        },
        provinceList: [
          {
            id: '1000',
            name: '北京',
            child: [
              {
                id: '10001',
                name: '东城区',
                child: [
                  {id: '100011', name: '大正胡同'},
                  {id: '100012', name: '大舅家'},
                  {id: '100013', name: '小叔家'},
                  {id: '100014', name: '劳务家'}
                ]
              },
              {
                id: '10002', name: '西城区', child: [
                  {id: '100021', name: '大诶胡同'},
                  {id: '100022', name: '小王胡同'},
                  {id: '100023', name: '绿野仙踪'},
                  {id: '100024', name: '美人鱼'},
                ]
              },
              {
                id: '10003', name: '北城区', child: [
                  {id: '100031', name: '刘记胡同'},
                  {id: '100032', name: '金喜善'},
                  {id: '100033', name: '马大帅'},
                ]
              }
            ]
          },
          {
            id: '1001',
            name: '南京',
            child: [
              {
                id: '10011',
                name: '东城区1',
                child: [
                  {id: '100111', name: '大正胡同1'},
                  {id: '100112', name: '大舅家1'},
                  {id: '100113', name: '小叔家1'},
                  {id: '100114', name: '劳务家1'},
                ]
              },
              {
                id: '10012', name: '西城区1', child: [
                  {id: '100121', name: '大诶胡同1'},
                  {id: '100122', name: '小王胡同1'},
                  {id: '100123', name: '绿野仙踪1'},
                  {id: '100124', name: '美人鱼1'},
                ]
              },
              {
                id: '10013', name: '北城区1', child: [
                  {id: '100131', name: '刘记胡1同'},
                  {id: '100132', name: '金喜1善'},
                  {id: '100133', name: '马大1帅'},
                ]
              }
            ]
          }
        ],
        cityList: null,
        distList: null,
        showType: 'province',//展示province
      }
    },
    computed: {},
    props: {
      labelWidth: {
        type: Number
      },
      label: {
        default: '',
        type: String
      },
      placeholder:{
        default: '请选择',
        type: String
      },
      value: {
        default: () => {
          return {}
        }
      },//地址值
    },
    watch: {
      value(v) {//{province,city,dist}
        console.log('-----------watch------value', this.value)
        this.init(v)
      }
    },
    methods: {
      init(address) {
        console.log('-----init------------value', this.value)
        let {provinceName, cityName, distName} = address
        this.initProvince(provinceName, this.provinceList, (res) => {
          if (res === 'next') {
            this.initCity(cityName, this.cityList, (res) => {
              if (res === 'next') {
                this.initDist(distName, this.distList)
                this.addressName = this.getAdressName()
              } else {
                this.addressName = this.getAdressName()
              }
            })
          } else {
            this.addressName = this.getAdressName()
          }
        })
      },
      initProvince(provinceName, provinceList, cb) {
        if (!provinceName) {
          console.log('------------no province')
          this.result = {
            province: null,//选中的地址信息
            city: null,
            dist: null,
          }
          this.addressName = ''
          this.cityList = null
          this.distList = null
          this.showType = 'province'
          return
        }
        let province = provinceList.find(item => {
          return item.name === provinceName
        })
        console.log('-----province is ---', province)
        if (province) {
          this.result.province = {
            id: province.id,
            name: province.name
          }
          if (province.child && province.child.length > 0) {
            this.cityList = province.child || []
            this.showType = 'city'
            if (cb) cb('next')
          } else {
            this.showType = 'province'
            if (cb) cb()
          }
        }
      },
      initCity(cityName, cityList, cb) {
        if (!cityName) {
          this.result.city = null
          this.result.dist = null
          this.distList = null
          this.showType = 'city'
          return
        }
        let city = cityList.find(item => {
          return item.name === cityName
        })
        if (city) {
          this.result.city = {
            id: city.id,
            name: city.name
          }
          if (city.child && city.child.length > 0) {
            this.distList = city.child || []
            this.showType = 'dist'
            if (cb) cb('next')
          } else {
            this.showType = 'city'
            if (cb) cb()
          }
        }
      },
      initDist(distName, distList, cb) {
        if (!distName) {
          this.result.dist = null
          this.showType = 'dist'
          return
        }
        let dist = distList.find(item => {
          return item.name === distName
        })
        if (dist) {
          this.result.dist = {
            id: dist.id,
            name: dist.name
          }
          this.showType = 'dist'
          if (cb) cb()
        }
      },
      handlerProvince(province) {
        if (this.result.province && this.result.province.id === province.id) return
        this.result.province = {
          id: province.id,
          name: province.name
        }
        if (province.child && province.child.length > 0) {
          this.cityList = province.child || []
          this.showType = 'city'
        }
        else
          this.sendResult()
        this.distList = null
        this.result.city = null
        this.result.dist = null
      },
      handlerCity(city) {
        if (this.result.city && this.result.city.id === city.id) return
        this.result.city = {
          id: city.id,
          name: city.name
        }
        if (city.child && city.child.length > 0) {
          this.distList = city.child || []
          this.showType = 'dist'
        } else {
          this.sendResult()
        }
        this.result.dist = null
      },
      handlerDist(dist) {
        if (this.result.dist && this.result.dist.id === dist.id) return
        this.result.dist = {
          id: dist.id,
          name: dist.name
        }
        this.show = false
        this.sendResult()
      },
      checkToProvince() {
        this.showType = 'province'
      },
      checkToCity() {
        this.showType = 'city'
      },
      checkToDist() {
        this.showType = 'dist'
      },
      getAdressName() {
        let s = ''
        let {province, city, dist} = this.result
        if (province)
          s += province.name
        if (city)
          s += city.name
        if (dist)
          s += dist.name
        console.log('addressName is', s)
        return s
      },
      sendResult() {
        this.addressName = this.getAdressName()
        this.$emit('confirm', {
          result: this.result,
          // addressName: this.addressName
        })
      },
      /*初始化provinceList*/
      initAddressJSONData(InitProvinceJsonData) {
        let provinceList = []
        let provinceJsonDataAll = InitProvinceJsonData
        let provinceJsonData = InitProvinceJsonData['100000']
        for (let key in provinceJsonData) {
          let id = key;
          let name = provinceJsonData[key]
          let child = []//省份
          //该省分对应的子类
          if (provinceJsonDataAll[key]) {
            for (let key_1 in provinceJsonDataAll[key]) {
              let id_1 = key_1;
              let name_1 = provinceJsonDataAll[key][key_1]
              let child_1 = []//市
              if (provinceJsonDataAll[key_1]) {
                for (let key_2 in provinceJsonDataAll[key_1]) {
                  let id_2 = key_2;
                  let name_2 = provinceJsonDataAll[key_1][key_2]
                  // let child_2 = []//乡镇
                  child_1.push({
                    id: id_2,
                    name: name_2,
                    // child: nu
                  })
                }
              }
              child.push({
                id: id_1,
                name: name_1,
                child: child_1
              })
            }
          }
          provinceList.push({
            id: id,
            name: name,
            child: child
          })
        }
        console.log(provinceList)
        return provinceList
      }
    },
    created() {
      // this.provinceList = this.initAddressJSONData(this.provinceJsonData)
      this.provinceList = this.initAddressJSONData(ADDRESS_CONFIG_DATA)
      this.init(this.value)
    }
  }
</script>
