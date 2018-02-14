export const getStyle = (el,attr) => {
  return window.getComputedStyle(el,null)[attr]
}
export const supportWebp = function detectWebp() {
  var canvas,supportCanvas

  canvas = document.createElement('canvas')
  supportCanvas = canvas.getContext && canvas.getContext('2d')

  if (supportCanvas) {
    canvas.width = canvas.height = 1
    return canvas.toDataURL('image/webp',0.01).indexOf('image/webp') != -1
  } else {
    /* istanbul ignore next */
    return false
  }
}()

export const isUrl = (url) => {
  return /^(\/\/|https?)/.test(url)
}

export const defaultWebpFormat = (url) => {
  return `${url}.webp`
}

export const getScrollElement = (el,coordinate = 'y') => {
  coordinate = coordinate.toUpperCase()
  let parent = el.parentNode
  let attr = `overflow${coordinate}`
  let value
  while (parent.tagName !== 'HTML' && parent.tagName !== 'body' && parent.nodeType === 1) {
    value = getStyle(parent,attr)
    if (value === 'auto' || value === 'scroll') {
      return parent
    }

    parent = parent.parentNode
  }
  return window
}

export const supportPassive = () => {
  var canPassive = false
  try {
    var opts = Object.defineProperty({},'passive',{
      get: function () {
        canPassive = true
      }
    })
    window.addEventListener('test',null,opts)
  } catch (e) { }
  return canPassive
}
export const rfa = window.requestAnimationFrame || (fn => setTimeout(fn,1000 / 60))

/**
 * http://demo.nimius.net/debounce_throttle/
 * 在一段时间内执行一次，在执行完最后一次delay ms 执行
 * @param fn
 * @param delay
 */
export const debounce = (fn,delay = 500) => {
  let timer
  let context = this
  return function () {
    clearTimeout(timer)
    timer = setTimeout(fn.bind(context,arguments),delay)
  }
}

export const throttle = (fn,delay = 500) => {
  let last
  let now
  let timer
  let context = this
  let args

  return function () {
    now = new Date().getTime()
    args = arguments

    if (last && now - last < delay) {
      clearTimeout(timer)
      timer = setTimeout(function () {
        last = now
        fn.apply(context,args)
      },delay)
    } else {
      last = now
      fn.apply(context,args)
    }
  }
}


export const getOffset = (ele,relativeElement = document.documentElement) => {
  if(relativeElement === window) {
    relativeElement = document.documentElement || document.body
  }
  let offset = {
    top: 0,
    left: 0
  }
  let elRect,relativeRect,parent

  if (typeof ele.getBoundingClientRect === 'function') {
    elRect = ele.getBoundingClientRect()
    relativeRect = relativeElement.getBoundingClientRect()

    offset.top = elRect.top - relativeRect.top
    offset.left = elRect.left - relativeRect.left
  }
  return offset
}

export const getScrollPosition = el => {
  if(el === window) {
    el = document.documentElement || document.body
  }

  const isTop = el.scrollTop !== void 0

  return {
    top: isTop ? el.scrollTop : el.scrollY,
    left: isTop ? el.scrollLeft : el.scrollX
  }
}

export const noop = () => {}

