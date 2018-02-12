import Vue from 'vue'
import Images from '../src'
import { expect } from 'chai'

describe('vt-image', () => {
    it('image default', () => {
        let vm = new Vue({
            render(h) {
                return (
                    <Images src="https://vuejs.org/images/logo.png" />
                )
            },
            components: {
                Images
            }
        }).$mount()

        expect(vm.$el.classList.contains('vt-image')).to.equal(true)
        expect(vm.$el.src).to.equal('https://vuejs.org/images/logo.png')
    })

    it('image local src', () => {
        let Control = Vue.extend(Images)
        let vm = new Control({
            propsData: {
                src: require('./assets/logo.png')
            }
        }).$mount()

        expect(vm.$el.src.indexOf('logo') > -1).to.equal(true)
    })

    it('image method: _inVisibleArea', () => {
        let Control, vm, mockEle

        Control = Vue.extend(Images)
        vm = new Control({
            propsData: {
                visibleRange: 400,
                src: require('./assets/logo.png')
            }
        }).$mount()

        mockEle = { clientHeight: 100, offsetTop: 300 }
        // offsetTop - visibleRange < scrollTop && scrollTop < offsetTop + visibleRange + height
        expect(vm._inVisibleArea(mockEle, 0)).to.equal(true)
        expect(vm._inVisibleArea(mockEle, 500)).to.equal(true)
        expect(vm._inVisibleArea(mockEle, 1000)).to.equal(false)
    })

    it('image method: _lozyLoad', () => {
        let Control = Vue.extend(Images)
        let vm = new Control({
            propsData: {
                src: require('./assets/logo.png')
            }
        }).$mount()

        vm._lozyLoad()

        setTimeout(_ => {
            expect(vm.loading, false)
        }, 1000)
    })

    it('image method: lazyHandler', () => {
        let Control = Vue.extend(Images)
        let vm = new Control({
            propsData: {
                lazy: false,
                src: require('./assets/logo.png')
            }
        }).$mount()

        expect(vm.lazyHandler()).to.equal(false)
    })
})
