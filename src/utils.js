export const supportWebp = function detectWebp() {
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
}()

export function isUrl(url) {
  return /^(\/\/|https?)/.test(url)
}

export function defaultWebpFormat(url) {
  return `${url}.webp`
}
