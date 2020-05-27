import React, { useState, useEffect } from 'react'
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'
import Popover from 'react-tiny-popover'
import localforage from 'localforage'
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
          destination: destination || `https://google.com/search?q=${args}`
        }).showToast()
        setLogCount(prevCount => prevCount + 1)
        const newLogInfo = logInfo
        newLogInfo.push({ info: args, date: new Date(Date.now()).toISOString() })
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
          destination: destination || `https://google.com/search?q=${args}`
        }).showToast()
        setErrorCount(prevCount => prevCount + 1)
        const newErrorInfo = errorInfo
        newErrorInfo.push({ info: args, date: new Date(Date.now()).toISOString() })
        setErrorInfo(newErrorInfo)
      }
    }
  }, [])

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
                  <b>{index + 1}</b> - [{item.date}] - {item.info}
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
            log
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
                  <b>{index + 1}</b> - [{item.date}] - {item.info}
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
            error
            <S.Badge className='error'>
              {errorCount}
            </S.Badge>
          </S.Console>
        )}
      </Popover>
    </S.Wrapper>
  )
}

export default Toaster