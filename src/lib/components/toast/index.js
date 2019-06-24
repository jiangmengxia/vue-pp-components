import Toast from './pp-toast'

const $toast = function (Vue, options) {
  var constructor = Vue.extend(Toast)//实例化一个Toast
  var instance = new constructor({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
  Vue.prototype.$PPtoast = (options) => {
    console.log(options)
    if (typeof options === 'string') {
      instance.position = 'top'
      instance.type = 'dark'
      instance.cb = () => {
      }
      instance.duration = 2000
      instance.transition = true
      instance.text = options
    }
    else if (typeof options === 'object') {
      options.position = options.position || 'top'
      instance.type = instance.type || 'dark'
      instance.cb = instance.cb || (() => {
      })
      instance.duration = instance.duration || 2000
      instance.transition = instance.transition || true
      Object.assign(instance, options)
    }
    instance.show = true
    instance.open()
  }
}

export default $toast
