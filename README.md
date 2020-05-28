# 🍞 console-toaster

> Toastify your console.logs!

[![NPM](https://img.shields.io/npm/v/console-toaster.svg)](https://www.npmjs.com/package/console-toaster) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Tiny heads-up display which will show your `console.log` and `console.error` messages in toasts on your screen. 

In addition, you get a counter of the two in the bottom left. Clicking on either will show you a history of log lines. 

Clicking on a log toast itself will launch a google search of that error message.

## 🚀 Install

```bash
npm install --save console-toaster
```

## 📋 Usage

```jsx
import React from 'react'
import Container from 'rest-of-app'
import Toaster from 'console-toaster'

const App = props => {
  return (
    <div>
      <Toaster />
      <Container />
    </div>
  )
}
```

This will get you a little heads up menu on the left, and your `console.log()` and `console.error()` calls in toast messages along the right. Don't worry, they'll still show up in your console as well.

![Screenshot1](https://i.imgur.com/V4LplsT.png)

Clicking on either `log` or `error` will display the latest log entries

![Screenshot2](https://i.imgur.com/JcV0p55.png)

## 🗄 Props

```jsx
<Toaster
  position={'bottom' || 'top'}
  duration={4000}
  destination={`https://google.com/search?q${error}`}
  className={''}
/>
```

## 📖 License

MIT
