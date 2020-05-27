import React, { useState } from 'react'
import Toaster from 'console-toaster'
import './style.css'

const App = () => {
  const [action, setAction] = useState('something')
  const randomLogger = () => {
    const i = Math.random()
    if (i < 0.5) {
      console.log(`Log ${i}`)
      setAction('log')
    } else if (i > 0.5) {
      console.error('Error!')
      setAction('error')
    }
  }
  return (
    <div className='container' >
      <Toaster />
      <button onClick={randomLogger} >
        Click Me
      </button>
      console.{action}()
    </div>
  )
}

export default App
