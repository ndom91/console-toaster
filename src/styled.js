import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  background-color: #fff;
  left: 20px;
  bottom: 20px;
  display: flex;
  justify-content: space-around;
  width: 200px;
`

export const Badge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 50%;
  top: -25px;
  right: -25px;
  width: 32px;
  height: 32px;
  color: #fff;

  &.log {
    background-color: #b9b9b9;
  }

  &.error {
    background-color: #ff4242;
  }
`

export const Console = styled.div`
  position: relative;
  border-radius: 5px;
  border: 2px solid #eaeaea;
  padding: 10px;
  
  &:hover {
    cursor: pointer;
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
`