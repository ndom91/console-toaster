import React, { useState, useEffect } from 'react'
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'
import Popover from 'react-tiny-popover'
import * as S from './styled'

const Toaster = ({
  position = 'bottom',
  duration = '4000',
  destination,
  className = ''
}) => {
  const [logCount, setLogCount] = useState(0)
  const [logInfo, setLogInfo] = useState([])
  const [openLog, setOpenLog] = useState(false)

  const [errorCount, setErrorCount] = useState(0)
  const [errorInfo, setErrorInfo] = useState([])
  const [openError, setOpenError] = useState(false)

  useEffect(() => {
    if (window.console && console) {
      const cx = console.log
      console.log = args => {
        Toastify({
          text: args,
          gravity: position,
          stopOnFocus: true,
          duration: duration,
          className: className,
          newWindow: true,
          destination: destination || `https://google.com/search?q=${args}`,
          backgroundColor: '#b9b9b9'
        }).showToast()
        setLogCount(prevCount => prevCount + 1)
        const newLogInfo = logInfo
        newLogInfo.push({ body: args, count: 1, date: new Date(Date.now()).toISOString() })
        setLogInfo(newLogInfo)
      }
      console.error = args => {
        Toastify({
          text: args,
          gravity: position,
          stopOnFocus: true,
          duration: duration,
          className: className,
          newWindow: true,
          destination: destination || `https://google.com/search?q=${args}`,
          backgroundColor: '#ff4242'
        }).showToast()
        setErrorCount(prevCount => prevCount + 1)
        const newErrorInfo = errorInfo
        if (errorInfo.find(error => error.body === args)) {
          const i = errorInfo.findIndex(error => error.body === args)
          newErrorInfo[i].count++
          setErrorInfo(newErrorInfo)
        } else {
          newErrorInfo.push({ body: args, count: 1, date: new Date(Date.now()).toISOString() })
          setErrorInfo(newErrorInfo)
        }
      }
    }
  }, [])

  const clearState = () => {
    setErrorInfo([])
    setErrorCount(0)
    setLogInfo([])
    setLogCount(0)
  }

  return (
    <S.Wrapper>
      <Popover
        isOpen={openLog}
        position={'top'}
        onClickOutside={() => setOpenLog(false)}
        content={
          <div>
            <S.PopoverBody>
              {logInfo.length > 0 ? logInfo.map((item, index) => (
                <S.PopoverItem key={index}>
                  <S.PopoverCount>
                    {item.count}
                  </S.PopoverCount>
                  <S.PopoverInfo>
                    {item.body}
                  </S.PopoverInfo>
                </S.PopoverItem>
              )) : (
                  <S.PopoverItem>
                    No console.log() yet
                  </S.PopoverItem>
                )}
            </S.PopoverBody>
          </div>
        }
      >
        {ref => (
          <S.Console ref={ref} className='log' onClick={() => setOpenLog(!openLog)}>
            <svg width="24" height="24" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="#fff" viewBox="0 0 24 24"><path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
            <S.Badge className='log'>
              {logCount}
            </S.Badge>
          </S.Console>
        )}
      </Popover>
      <Popover
        isOpen={openError}
        position={'top'}
        onClickOutside={() => setOpenError(false)}
        content={
          <div>
            <S.PopoverBody>
              {errorInfo.length > 0 ? errorInfo.map((item, index) => (
                <S.PopoverItem key={index}>
                  <S.PopoverCount>
                    {item.count}
                  </S.PopoverCount>
                  <S.PopoverInfo>
                    {item.body}
                  </S.PopoverInfo>
                </S.PopoverItem>
              )) : (
                  <S.PopoverItem>
                    No console.error() yet
                  </S.PopoverItem>
                )}
            </S.PopoverBody>
          </div>
        }
      >
        {ref => (
          <S.Console ref={ref} className='error' onClick={() => setOpenError(!openError)}>
            <svg width="24" height="24" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="#fff" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            <S.Badge className='error'>
              {errorCount}
            </S.Badge>
          </S.Console>
        )}
      </Popover>
      <S.Console className='clear' onClick={clearState}>
        <svg style={{ marginLeft: '3px' }} width="24" height="24" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
      </S.Console>
    </S.Wrapper>
  )
}

export default Toaster