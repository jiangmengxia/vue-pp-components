import Card from './pp-card'
import CardContent from './pp-card-content'
import CardHeader from './pp-card-header'

const PPcard = function (Vue, options) {
  Vue.component('pp-card', Card)
}
const PPcardcontent = function (Vue, options) {
  Vue.component('pp-card-content', CardContent)
}
const PPcardheader = function (Vue, options) {
  Vue.component('pp-card-header', CardHeader)
}

export {PPcard, PPcardcontent, PPcardheader}
