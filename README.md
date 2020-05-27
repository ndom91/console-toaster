# 🍞 Console Toaster

Tiny library to get your `console.logs` on screen!

Bonus: clicking on the toast will launch a google search of your error message 🎉

## 📣 Usage

1. Install

`npm i console-toaster`

2. Import

`import Toaster from 'console-toaster'`

3. Call the function somewhere in App

```
import React from 'react'
import Toaster from 'console-toaster'

const App = () => {
  Toaster()

  return (
    <div className='wrapper'>
      <section>
        <App />
      </section>
    </div>
  )
}

export default App
```

4. Profit!

## 🏗️ Options

| Props | Type | Default Value | Required
| --- | --- | --- | --- |
| position | enum('bottom', 'top') | 'bottom' | No |
| duration | number | 4000 | No |
| destination | string | 'https://google.com/search?q=' | No |
| className | string | '' | No |


#### Example
```
const options = {
  position: 'bottom',
  duration: '4000',
  destination: 'https://bing.com/search?q=',
  className = 'my-toast-class'
}

Toaster(options)
```

## License

MIT