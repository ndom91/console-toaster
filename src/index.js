import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

/* eslint-disable */
const Logger = ({
  position = 'bottom',
  duration = '4000',
  destination,
  className = ''
}) => {
  if (window.console && console) {
    for (const c in console) {
      if (typeof console[c] === 'function') {
        const cx = console[c]
        console[c] = function (args) {
          Toastify({
            text: args.trim(),
            gravity: position,
            stopOnFocus: true,
            duration: duration,
            className: className,
            newWindow: true,
            destination=destination || `https://google.com?q=${args}`
          }).showToast()
          cx.apply(this, [args])
        }
      }
    }
  }
}

export default Logger
