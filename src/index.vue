<style src="./style.css"></style>
<template>
    <img class="vt-image" :src="realPath" />
</template>
<script>
/* istanbul ignore next */
var isSupportWebp = detectWebp()

export default {
    props: {
        lazy: {
            type: Boolean,
            default: false
        },
        lazySrc: {
            type: String,
            default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC'
        },
        visibleRange: {
            type: [String, Number],
            default: window.innerHeight, // window visible height * 1
            validator: function (value) {
                /* istanbul ignore next */
                return value > 50
            }
        },
        src: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            loading: this.lazy,
            path: this._getPath(isSupportWebp)
        }
    },
    computed: {
        realPath() {
            return this.loading ? this.lazySrc : this.path
        }
    },
    methods: {
        _inVisibleArea(el, scrollTop) {
            let height, offsetTop, visibleRange

            visibleRange = this.visibleRange
            offsetTop = el.offsetTop
            height = el.clientHeight
            return offsetTop - visibleRange < scrollTop && scrollTop < offsetTop + visibleRange + height
        },
        lazyHandler(scrollTop) {
            if (!this.lazy) {
                return false
            }
            /* istanbul ignore next */

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
        },
        _getPath(supportWeb) {
            return isUrl(this.src) ? this.src : supportWeb ? this.src + '.webp' : this.src
        }
    }
}

function detectWebp() {
    var canvas, supportCanvas

    canvas = document.createElement('canvas')
    supportCanvas = canvas.getContext && canvas.getContext('2d')

    if (supportCanvas) {
        canvas.width = canvas.height = 1
        return canvas.toDataURL('image/webp', 0.01).indexOf('image/webp') != -1
    } else {
        /* istanbul ignore next */
        return false
    }
}

function isUrl(url) {
    return /^(\/\/|https?)/.test(url)
}
</script>
