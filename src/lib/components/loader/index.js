import Loader from './pp-loader'


const $loader = function (Vue, options) {
  var constructor = Vue.extend(Loader)//实例化一个Toast
  var instance = new constructor({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
  Vue.prototype.$PPloader = (options) => {
    if (typeof options === 'string') {
      instance.text = options
    }
    else if (typeof options === 'object') {
      Object.assign(instance, options)
    }
    instance.open()
    return instance
  }
  Vue.prototype.$PPloaded = () => {
    instance.close()
  }
}
export default $loader
