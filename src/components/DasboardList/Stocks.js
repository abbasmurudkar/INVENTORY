import React, { useState } from 'react'
import { Icon, Input, InputGroup } from 'rsuite'
import styled from 'styled-components'
import { api_key, url } from '../Api'
import FadeIn from 'react-fade-in/lib/FadeIn';
import { Carousel } from '../ADDTIONAL COMPONENT/Active-Carosuel';
import StocksEngine from '../ADDTIONAL COMPONENT/Stocks-Engine';
import NoMatches from "../../Assets/No-Matches.png"
const Stocks = () => {

  const [Value, setValue] = useState("")
  const [Result, setResult] = useState(null)
  const Values = (value) => {
    setValue(value)
  }
  const keydown = (ev) => {
    if (ev.keyCode === 13) {
      Onsearch()
    }
  }
  const Onsearch = () => {
    fetch(`${url}search-name/?query=${Value}&limit=100&${api_key}`).then((res) => res.json()).then((result) =>{
     setResult(result)
    }
    )
  }
  const DisplayResult = () =>{
    if(Result && Result.length === 0)
    {
      return(
        <FadeIn><div className='Matches'><img src={NoMatches} alt=""/>No Mathces Found!!!</div></FadeIn>
      )
    }
    if(Result && Result.length > 0)
    {
      return Result? <StocksEngine Result={Result}/>:" "
    }
  
return null
  }
  return (
    <StocksDiv>
      <div className='Top-header'>
        <div className='Input-Group'>
          <InputGroup id="input">
            <Input onChange={Values} value={Value} onKeyDown={keydown} placeholder="Search For Result" />
            <InputGroup.Button color='yellow' onClick={Onsearch}><Icon icon="search" /></InputGroup.Button>
          </InputGroup>
        </div>
      </div>
      <FadeIn>
        {DisplayResult()}
      </FadeIn>
    </StocksDiv>
  )
}

export default Stocks

const StocksDiv = styled(Carousel)`
margin-top:100px;
height:100% ;
padding:10px ;
.Top-header{
  justify-content:flex-end ;
  display:flex ;
  .Input-Group{
    width:30% ;
    input{
      background-color:#edebeb ;
      color:#8b6868;
      
    }
  }
}
.Blocks{
  width:85%;
  border-bottom:1px solid grey
}
.grid{
  display:grid ;
  grid-template-columns:auto auto auto  ;
  column-gap:-70px ;
  margin-top:40px;
  height:100% ;
}
.Matches{
  height:600px;
  display:flex ;
  justify-content:center ;
  align-items:center;
  color:#b4afaf;
  font-weight:bolder ;
flex-direction:column ;
img{
  width:100px
}
}
`;