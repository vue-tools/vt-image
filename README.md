# vt-image

基于 vue 2 封装出的 Image 组件，重写img，目的支持webp， 优化图片，提高移动端性能。 点击查看[Demo](https://vue-tools.github.io/vt-image/#/demo)

## Install

```javascript
npm i vt-image -S

import Images from 'vt-image'

// global install
Vue.component('Images', Images)

// scope install
export default {
    components: { 
        Images
    }
}
```

## Usage

```example
<style>
.img{
    width: 100px;
    height: 100px;
    margin:10px; 
    display: block;
}
</style>
<template>
    <Images ref="image" v-for="img in imgs" class="img" :src="img" />
    <Images ref="image" v-for="img in imgs" class="img" lazy :src="img" /> 
</template>
<script>
    import Images from 'vt-image'
    export default {
        data(){
            return {
                imgs: [
                    require('assets/logo.png')
                ]
            }
        },
        components: {
            Images
        },
        mounted(){
             this.lazyLoad()
             window.addEventListener('scroll', this.lazyLoad.bind(this), this.supportPassiveEvents() ? {passive: true} : false)
        },
        methods: {
            lazyLoad() {
                window.requestAnimationFrame = window.requestAnimationFrame || (fn => setTimeout(fn, 1000 / 60))
                window.requestAnimationFrame(_ => {
                    this.$refs.image.forEach(img => {
                        img.lazyHandler(document.body.scrollTop || document.documentElement.scrollTop)
                    })
                })
            },
            supportPassiveEvents(){
                var supportsPassiveOption = false
                try {
                    var opts = Object.defineProperty({}, 'passive', {
                        get: function() {
                            supportsPassiveOption = true
                        }
                    })
                    window.addEventListener('test', null, opts)
                } catch (e) {}
            }
        }
    }
</script>
```


