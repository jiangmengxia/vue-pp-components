import Segment from './pp-segment'
import Segments from './pp-segments'

var PPsegment = function (Vue, options) {
  Vue.component('pp-segment', Segment)
}
var PPsegments = function (Vue, options) {
  Vue.component('pp-segments', Segments)
}


export  {PPsegment, PPsegments}
