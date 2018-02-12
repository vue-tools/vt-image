import { supportWebp,defaultWebpFormat } from './utils'
export default {
  install(Vue,opts = {}) {
    const formatWebp = typeof opts.formatWebp == 'function'
      ? opts.formatWebp
      : defaultWebpFormat

    Vue.directive('webp',{
      bind(el,binding,vnode) {
        if (supportWebp) {
          el.src = formatWebp(el.src)
        }
      }
    })
  }
}

