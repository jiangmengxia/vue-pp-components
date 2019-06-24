import Vue from 'vue'
import Router from 'vue-router'
import Hello from './views/HelloWorld'
import Index from './views/index'
import Container from './views/container'
import Picker from './views/picker'
import Actionsheet from './views/actionsheet'
import Button from './views/button'
import Card from './views/card'
import Alert from './views/alert'
import Checkbox from './views/checkbox'
import Icon from './views/icon'
import Loader from './views/loader'
import Loading from './views/loading'
import Popsheet from './views/pop-sheet'
import Popup from './views/popup'
import Segments from './views/segments'
import Toast from './views/toast'
import Slide from './views/slide'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      component: Index,
      meta: {
        hideHeader: true,
        title: '首页'
      }
    },
    {
      path: '/hello',
      component: Hello,
      meta: {
        hideHeader: true,
        title: 'Hello'
      }
    },
    {
      path: '/container',
      component: Container,
      meta: {
        showFooter: true,
        title: 'Container'
      }
    },
    {
      path: '/picker',
      component: Picker,
      meta: {
        title: 'Picker'
      }
    },
    {
      path: '/actionsheet',
      component: Actionsheet,
      meta: {
        title: 'Actionsheet'
      }
    },
    {
      path: '/button',
      component: Button,
      meta: {
        title: 'Button'
      }
    },

    {
      path: '/card',
      component: Card,
      meta: {
        title: 'Card'
      }
    },
    {
      path: '/alert',
      component: Alert,
      meta: {
        title: 'Alert'
      }
    },
    {
      path: '/checkbox',
      component: Checkbox,
      meta: {
        title: 'Checkbox'
      }
    },
    {
      path: '/icon',
      component: Icon,
      meta: {
        title: 'icon'
      }
    },
    {
      path: '/loading',
      component: Loading,
      meta: {
        title: 'Loading'
      }
    },
    {
      path: '/loader',
      component: Loader,
      meta: {
        title: 'Loader'
      }
    },
    {
      path: '/popsheet',
      component: Popsheet,
      meta: {
        title: 'Popsheet'
      }
    },
    {
      path: '/popup',
      component: Popup,
      meta: {
        title: 'Popup'
      }
    },
    {
      path: '/segments',
      component: Segments,
      meta: {
        title: 'Segments'
      }
    },
    {
      path: '/toast',
      component: Toast,
      meta: {
        title: 'Toast'
      }
    },
    {
      path: '/slide',
      component: Slide,
      meta: {
        title: 'Slide'
      }
    },
  ]
})
