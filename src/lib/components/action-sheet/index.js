import ActionSheet from './pp-action-sheet'

const $actionsheet = function (Vue, options) {
  let constructor = Vue.extend(ActionSheet)//实例化一个Toast
  let instance = new constructor({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
  Vue.prototype.$PPactionsheet = (options) => {
    if (typeof options === 'string') {
      instance.title = options
    }
    else if (typeof options === 'object') {
      Object.assign(instance, options)
    }
    instance.open()
  }
}

export default $actionsheet
