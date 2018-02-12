```example
<style>
.vue-docs{
    width: 100%;
}
.wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.message {
    margin-top: 100px;
    margin-bottom: 400px;
    font-size: 30px;
}
.img{
    width: 186px;
    min-height: 100px;
    text-align: center;
    margin:10px;
    display: block;
    transition: height ease-in .5s;
}
</style>
<template>
    <div class="wrapper">
        <h3 class="message">vt-image懒加载图片demo</h3>
        <Images ref="image"  v-for="img in imgs" class="img" webp lazy :src="img" distance="600"/>
    </div>
</template>
<script>
    import Vue from 'vue'
    import {Images} from 'vt-image'

    let imgs, count

    imgs = []
    count = 0

    while(++count < 6) {
        imgs[count - 1] = require(`assets/cat0${count}.jpg`)
    }

    export default {
        data(){
            return {
                imgs
            }
        },
        components: {
            Images
        }
    }
</script>
```
