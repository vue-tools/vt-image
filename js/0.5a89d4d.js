webpackJsonp([0],{21:function(s,t,a){"use strict";function n(s){return s&&s.__esModule?s:{default:s}}Object.defineProperty(t,"__esModule",{value:!0});var e=a(75),l=n(e);t.default={data:function(){return{imgs:[a(59)]}},components:{Images:l.default},mounted:function(){this.lazyLoad(),window.addEventListener("scroll",this.lazyLoad.bind(this))},methods:{lazyLoad:function(){var s=this;setTimeout(function(t){s.$refs.image.forEach(function(s){s.lazyHandler()})},100)}}}},22:function(s,t,a){"use strict";function n(s){return s&&s.__esModule?s:{default:s}}Object.defineProperty(t,"__esModule",{value:!0});var e=a(73),l=n(e);t.default={components:{README:l.default}}},23:function(s,t){"use strict";function a(){var s,t;return s=document.createElement("canvas"),t=s.getContext&&s.getContext("2d"),!!t&&(s.width=s.height=1,s.toDataURL("image/webp",.01).indexOf("image/webp")!=-1)}function n(s){return/^(\/\/|https?)/.test(s)}Object.defineProperty(t,"__esModule",{value:!0});var e=a();t.default={props:{lazy:{type:Boolean,default:!1},lazySrc:{type:String,default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"},visibleRange:{type:[String,Number],default:window.innerHeight,validator:function(s){return s>50}},src:{type:String,required:!0}},data:function(){return{loading:this.lazy,path:this._getPath(e)}},computed:{realPath:function(){return this.loading?this.lazySrc:this.path}},methods:{_inVisibleArea:function(s,t){var a=void 0,n=void 0,e=void 0;return e=this.visibleRange,n=s.offsetTop,a=s.clientHeight,n-e<t&&t<n+e+a},lazyHandler:function(s){return!!this.lazy&&void(this._inVisibleArea(this.$el,this.visibleRange,s)&&this._lozyLoad())},_lozyLoad:function(){var s=this,t=void 0;t=new Image,t.src=this.path,t.onload=function(t){s.loading=!1}},_getPath:function(s){return n(this.src)?this.src:s?this.src+".webp":this.src}}}},53:function(s,t,a){t=s.exports=a(54)(),t.push([s.id,"",""])},56:function(s,t,a){var n=a(64);"string"==typeof n&&(n=[[s.id,n,""]]);a(66)(n,{});n.locals&&(s.exports=n.locals)},57:function(s,t,a){var n=a(53);"string"==typeof n&&(n=[[s.id,n,""]]),n.locals&&(s.exports=n.locals);a(83)("a41b38f0",n,!0)},59:function(s,t,a){s.exports=a.p+"img/logo.c2a605f.png"},64:function(s,t,a){t=s.exports=a(65)(),t.push([s.id,".img{width:100px;height:100px;margin:10px;display:block}",""])},73:function(s,t,a){var n,e;a(56),n=a(21);var l=a(81);e=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(e=n=n.default),"function"==typeof e&&(e=e.options),e.render=l.render,e.staticRenderFns=l.staticRenderFns,s.exports=n},74:function(s,t,a){var n,e;n=a(22);var l=a(80);e=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(e=n=n.default),"function"==typeof e&&(e=e.options),e.render=l.render,e.staticRenderFns=l.staticRenderFns,s.exports=n},75:function(s,t,a){var n,e;a(57),n=a(23);var l=a(79);e=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(e=n=n.default),"function"==typeof e&&(e=e.options),e.render=l.render,e.staticRenderFns=l.staticRenderFns,s.exports=n},79:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("img",{staticClass:"vt-image",attrs:{src:s.realPath}})},staticRenderFns:[]}},80:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("Layout",[a("README")],1)},staticRenderFns:[]}},81:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",{attrs:{id:"vt-button"}},[s._v("vt-button")]),s._v(" "),a("p",[s._v("基于 vue 2 封装出的 Image 组件，重写img，目的支持webp， 优化图片，提高移动端性能。")]),s._v(" "),a("h2",{attrs:{id:"install"}},[s._v("Install")]),s._v(" "),s._m(0),a("h2",{attrs:{id:"usage"}},[s._v("Usage")]),s._v(" "),[s._l(s.imgs,function(s){return a("Images",{ref:"image",refInFor:!0,staticClass:"img",attrs:{src:s}})}),s._v(" "),s._l(s.imgs,function(s){return a("Images",{ref:"image",refInFor:!0,staticClass:"img",attrs:{lazy:"",src:s}})})],s._v(" "),s._m(1)],2)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{staticClass:"lang-javascript"},[a("code",[s._v("npm i vt-"),a("span",{staticClass:"hljs-built_in"},[s._v("image")]),s._v(" -S\n\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" Images from "),a("span",{staticClass:"hljs-string"},[s._v("'vt-image'")]),s._v("\n\n"),a("span",{staticClass:"hljs-comment"},[s._v("// global install")]),s._v("\nVue.component("),a("span",{staticClass:"hljs-string"},[s._v("'Images'")]),s._v(", Images)\n\n"),a("span",{staticClass:"hljs-comment"},[s._v("// scope install")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-built_in"},[s._v("default")]),s._v(" {\n    components: {\n        Images\n    }\n}")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{staticClass:"lang-example"},[a("code",[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),a("span",{staticClass:"css"},[s._v("\n"),a("span",{staticClass:"hljs-selector-class"},[s._v(".img")]),a("span",{staticClass:"hljs-template-variable"},[s._v("{")]),s._v("\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("width")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("100px")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("height")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("100px")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("margin")]),s._v(":"),a("span",{staticClass:"hljs-number"},[s._v("10px")]),s._v("; \n    "),a("span",{staticClass:"hljs-attribute"},[s._v("display")]),s._v(": block;\n"),a("span",{staticClass:"hljs-template-variable"},[s._v("}")]),s._v("\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Images")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("ref")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"image"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"img in imgs"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"img"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":src")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"img"')]),s._v(" />")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Images")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("ref")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"image"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"img in imgs"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"img"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("lazy")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":src")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"img"')]),s._v(" />")]),s._v(" \n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" Images "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'vt-image'")]),s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" "),a("span",{staticClass:"hljs-template-variable"},[s._v("{")]),s._v("\n        data()"),a("span",{staticClass:"hljs-template-variable"},[s._v("{")]),s._v("\n            "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),a("span",{staticClass:"hljs-template-variable"},[s._v("{")]),s._v("\n                "),a("span",{staticClass:"hljs-attr"},[s._v("imgs")]),s._v(": [\n                    "),a("span",{staticClass:"hljs-built_in"},[s._v("require")]),s._v("("),a("span",{staticClass:"hljs-string"},[s._v("'assets/logo.png'")]),s._v(")\n                ]\n            "),a("span",{staticClass:"hljs-template-variable"},[s._v("}")]),s._v("\n        "),a("span",{staticClass:"hljs-template-variable"},[s._v("}")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("components")]),s._v(": "),a("span",{staticClass:"hljs-template-variable"},[s._v("{")]),s._v("\n            Images\n        "),a("span",{staticClass:"hljs-template-variable"},[s._v("}")]),s._v(",\n        mounted()"),a("span",{staticClass:"hljs-template-variable"},[s._v("{")]),s._v("\n             "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".lazyLoad()\n             "),a("span",{staticClass:"hljs-built_in"},[s._v("window")]),s._v(".addEventListener("),a("span",{staticClass:"hljs-string"},[s._v("'scroll'")]),s._v(", "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".lazyLoad.bind("),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v("))\n        "),a("span",{staticClass:"hljs-template-variable"},[s._v("}")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": "),a("span",{staticClass:"hljs-template-variable"},[s._v("{")]),s._v("\n            lazyLoad() "),a("span",{staticClass:"hljs-template-variable"},[s._v("{")]),s._v("\n                setTimeout("),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("_")]),s._v(" =>")]),s._v(" "),a("span",{staticClass:"hljs-template-variable"},[s._v("{")]),s._v("\n                    "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$refs.image.forEach("),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("img")]),s._v(" =>")]),s._v(" "),a("span",{staticClass:"hljs-template-variable"},[s._v("{")]),s._v("\n                        img.lazyHandler()\n                    "),a("span",{staticClass:"hljs-template-variable"},[s._v("}")]),s._v(")\n                "),a("span",{staticClass:"hljs-template-variable"},[s._v("}")]),s._v(", "),a("span",{staticClass:"hljs-number"},[s._v("100")]),s._v(")\n            "),a("span",{staticClass:"hljs-template-variable"},[s._v("}")]),s._v("\n        "),a("span",{staticClass:"hljs-template-variable"},[s._v("}")]),s._v("\n    "),a("span",{staticClass:"hljs-template-variable"},[s._v("}")]),s._v("\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")])])])}]}}});