<style src="./style.css"></style>
<template>
  <img class="vt-image" :src="realPath" />
</template>
<script>
  /* istanbul ignore next */
  import {
    supportWebp,
    isUrl,
    defaultWebpFormat,
    getScrollElement,
    supportPassive,
    debounce
  } from './utils'

  export default {
    name: 'vt-image',
    props: {
      webp: {
        type: Boolean,
        default: false
      },
      lazy: {
        type: Boolean,
        default: false
      },
      lazySrc: {
        type: String,
        default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC'
      },
      webpFormat: {
        type: Function,
        default: defaultWebpFormat
      },
      disatance: {
        type: [String,Number],
        default: window.innerHeight, // window visible height * 1
        validator: function (value) {
          /* istanbul ignore next */
          return value > 20
        }
      },
      src: {
        type: String,
        required: true
      }
    },
    data(){
      return {
        register: false,
        element: null,
        scroll:  null
      }
    },
    mounted() {
      if (!this.register) {
        const element = getScrollElement(this.$el, 'y')
        this.element = element
        this.scroll = () => {
          debounce(this.lazyHandler())
        }
        element.addEventListener('scroll', this.scroll, supportPassive ? { passive: true } : false)
        this.register = true
      }
    },
    destroyed() {
      this.register = false
      this.element.removeEventListener('scroll', this.scroll)
      this.element = null
    },
    data() {
      return {
        loading: this.lazy
      }
    },
    computed: {
      path() {
        if (this.webp) {
          return supportWebp ? this.webpFormat(this.src) : this.src
        } else {
          return this.src
        }
      },
      realPath() {
        return this.loading ? this.lazySrc : this.path
      }
    },
    methods: {
      _inVisibleArea(el,scrollTop) {
        let height,offsetTop,distance

        distance = this.disatance
        offsetTop = el.offsetTop
        height = el.clientHeight

        return offsetTop - distance < scrollTop && scrollTop < offsetTop + distance + height
      },
      lazyHandler() {
        if (!this.lazy) {
          return false
        }
        /* istanbul ignore next */
        const scrollTop = this.element.scrollTop || this.element.scrollY
        if (this._inVisibleArea(this.$el, scrollTop)) {
          this._lozyLoad()
        }
      },
      _lozyLoad() {
        let img
        img = new Image()
        img.src = this.path

        /* istanbul ignore next */
        img.onload = _ => {
          this.loading = false
        }
      }
    }
  }
</script>
