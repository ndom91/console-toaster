import { h, render, Component } from 'preact'
import { useState } from 'preact/hooks'
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'
import localforage from 'localforage'
import 'index.css'

/* eslint-disable */
const Toaster = ({
  position = 'bottom',
  duration = '4000',
  destination,
  className = ''
}) => {
  const [logCount, setLogCount] = useState(0)
  const [errorCount, setErrorCount] = useState(0)
  const [warnCount, setWarnCount] = useState(0)

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
            destination: destination || `https://google.com/search?q=${args}`
          }).showToast()
          if (c === 'error') {
            setErrorCount(errorCount + 1)
          } else if (c === 'warn') {
            setWarnCount(warnCount + 1)
          } else if (c === 'log') {
            setLogCount(logCount + 1)
          }
          cx.apply(this, [args])
        }
      }
    }
  }
  // logCount = localforage.getItem('logCount')

  return (
    <div className='wrapper'>
      <div className='console log'>
        {logCount}
      </div>
      <div className='console error'>
        {errorCount}
      </div>
      <div className='console warn'>
        {warnCount}
      </div>
    </div>
  )
}

export default Toaster
