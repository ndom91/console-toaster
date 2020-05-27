import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

export default Logger = () => {
  var oldLog = console.log;
  console.log = function (message) {
    console.error('test error')
    Toastify({
      text: "This is a toast",
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      className: "info",
    }).showToast();
    oldLog.apply(console, arguments);
  };
}
