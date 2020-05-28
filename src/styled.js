import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  background-color: #fff;
  left: 20px;
  bottom: 20px;
  display: flex;
  justify-content: space-around;
  width: 280px;
`

export const Badge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4px;
  width: 28px;
  height: 32px;
  color: #fff;
`

export const Console = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-items: center;
  border-radius: 5px;
  padding: 5px;
  color: #fff;
  
  &:hover {
    cursor: pointer;
  }

  &.log {
    background-color: #b9b9b9;
    border: 2px solid #9c9c9c;
  }

  &.error {
    background-color: #ff4242;
    border: 2px solid #8c3333;
  }
  &.clear {
    border-radius: 50%;
    background-color: #656565;
    border: 2px solid #484848;
    width: 30px;
  }
`

export const PopoverBody = styled.div`
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 5px 1px rgba(0,0,0,0.1);
  padding: 10px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  z-index: 999;
  opacity: 0.7;
`

export const PopoverItem = styled.div`
  color: #000;
  z-index: 1000;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const PopoverCount = styled.div`
  border-radius: 50%;
  background-color: #b9b9b9;
  width: 12px;
  padding: 8px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
`
export const PopoverInfo = styled.div`
  font-size: 1.2em;
`