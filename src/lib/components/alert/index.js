import Alert from './pp-alert'

const $alert = function (Vue, options) {
  var constructor = Vue.extend(Alert)//实例化一个Toast
  var instance = new constructor({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
  Vue.prototype.$PPalert = (options) => {
    if (typeof options === 'string') {
      instance.text = options
      instance.title = '提示'
      instance.ok = () => {
      }
      instance.type = 'alert'
    }
    else if (typeof options === 'object') {
      instance.title = instance.title || '提示'
      options.type = 'alert'
      instance.ok = instance.ok || (() => {
      })
      Object.assign(instance, options)
    }
    instance.open()
  }

  Vue.prototype.$PPconfirm = (options) => {
    // let constructor = Vue.extend(Alert)//实例化一个Toast
    // let instance = new constructor({
    //   el: document.createElement('div')
    // });
    // document.body.appendChild(instance.$el);
    if (typeof options === 'string') {
      instance.text = options
      instance.title = '提示'
      instance.ok = () => {
      }
      instance.type = 'confirm'
    }
    else if (typeof options === 'object') {
      options.type = 'confirm'
      instance.text = instance.text || '提示内容'
      instance.title = instance.title || '提示'
      instance.ok = instance.ok || (() => {
      })
      Object.assign(instance, options)
    }
    instance.open()
  }
}
export default $alert
