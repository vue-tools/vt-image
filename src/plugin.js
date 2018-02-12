import { supportWebp,defaultWebpFormat } from './utils'
export default {
  install(Vue,opts = {}) {
    const formatWebp = typeof opts.formatWebp == 'function'
      ? opts.formatWebp
      : defaultWebpFormat

    Vue.directive('webp',{
      componentUpdated(el,binding,vnode) {
        if (supportWebp && !/\.webp$/.test(el.src)) {
          el.src = formatWebp(el.src)
        }
      }
    })
  }
}

