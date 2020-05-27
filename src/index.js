import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

/* eslint-disable */
const Logger = () => {
  if (window.console && console) {
    for (const c in console) {
      if (typeof console[c] === 'function') {
        const cx = console[c]
        console[c] = function (args) {
          Toastify({
            text: args.trim(),
            backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
            className: 'info'
          }).showToast()
          cx.apply(this, [args])
        }
      }
    }
  }
}

export default Logger
