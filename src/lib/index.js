import $PPtoast from './components/toast'
import $PPalert from './components/alert'
import $PPactionsheet from './components/action-sheet'
import $PPloader from './components/loader'
import $PPloaded from './components/loader'
import PPshadowback from './components/shadow-back'
import PPpopup from './components/popup'
import PPfade from './components/fade'
import PPslide from './components/slide'
import {PPcard, PPcardcontent, PPcardheader} from "./components/card";
import PPcheckbox from './components/checkbox'
import PPitem from './components/item'
import PPloading from './components/loading'
import PPbody from './components/body'
import PPcontainer from './components/container'
import PPfooter from './components/footer'
import PPheader from './components/header'
import PPnavbar from './components/navbar'
import {PPsegment, PPsegments} from './components/segments'
import PPicon from './components/icon'
import PPbutton from './components/button'
import PPpopsheet from './components/pop-sheet'
import PPpicker from './components/picker'
import './style/index.sass'


export default {
  install: (Vue, options) => {
    /*全局组件*/
    $PPtoast(Vue, options)
    $PPalert(Vue, options)
    $PPactionsheet(Vue, options)
    $PPloader(Vue, options)
    $PPloaded(Vue)

    /*components组件*/
    PPshadowback(Vue, options)
    PPpopup(Vue, options)
    PPfade(Vue, options)
    PPslide(Vue, options)
    PPcard(Vue, options)
    PPcardheader(Vue, options)
    PPcardcontent(Vue, options)
    PPcheckbox(Vue, options)
    PPitem(Vue, options)
    PPloading(Vue, options)
    PPbody(Vue, options)
    PPcontainer(Vue, options)
    PPfooter(Vue, options)
    PPheader(Vue, options)
    PPnavbar(Vue, options)
    PPsegments(Vue, options)
    PPsegment(Vue, options)
    PPicon(Vue, options)
    PPbutton(Vue, options)
    PPpopsheet(Vue, options)
    PPpicker(Vue, options)
  }
}
