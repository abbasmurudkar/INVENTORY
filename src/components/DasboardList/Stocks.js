import React, {  useState } from 'react'
import {  Icon, Input, InputGroup } from 'rsuite'
import styled from 'styled-components'
import { api_key, searchengine} from '../Api'

const Stocks = () => {
  const [Value, setValue] = useState("")
  const Values = (value) => {
    setValue(value)
  }
  const keydown = (ev) => {
    if (ev.keyCode === 13) {
      Onsearch()
    }
  }
  const Onsearch = ()=>{
   fetch(`${searchengine}?query=${Value}&limit=100&${api_key}`).then((res)=>res.json()).then((result)=>
   console.log(result)
   )
  }
  return (
    <StocksDiv>
      <div className='Top-header'>
        <div className='Input-Group'>
        <InputGroup id="input">
          <Input onChange={Values} value={Value} onKeyDown={keydown}  />
          <InputGroup.Button color='yellow' onClick={Onsearch}><Icon icon="search" /></InputGroup.Button>
        </InputGroup>
        </div>
      </div>
    </StocksDiv>
  )
}

export default Stocks

const StocksDiv = styled.div`
margin-top:100px;
height:100% ;
padding:10px ;
.Top-header{
  justify-content:flex-end ;
  display:flex ;
  .Input-Group{
    width:30% ;
  }
}
`;