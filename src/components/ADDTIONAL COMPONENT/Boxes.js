import React from 'react'
import { Icon } from 'rsuite'
import styled from 'styled-components'

const Boxes = ({heading, icon,add}) => {
  return (
    <Box>
        <div className='header'>
        <h4>{heading}</h4>
        <span><Icon id="icon" icon={icon}/></span>
        </div>
        <hr className='header-line'/>
        <p>456465</p>
    </Box>
  )
}

export default Boxes

const Box = styled.div`
border:2px solid #091135 ;
width:28% ;
height:160px ;
padding:15px 15px ;
border-radius:20px ;
background-color:#091135 ;
box-shadow:6px 5px 10px  grey ;

color:white ;
cursor: pointer;
transition:0.3s all ease-in ;
&:nth-child(2){
  background-color:#c29605 ;
}
&:hover{
transform:scale(1.1) ;
}
p{
  font-size:23px ;
  font-weight:600 ;
}
h4{
  margin:0 ;
  display:inline-block ;
  font-size:24px ;
  font-weight:bolder ;
}
.header{
  display:flex ;
  justify-content:space-between ;
  align-items:center ;
  span{
    #icon{
      display:inline-block ;
      font-size:24px ;
    }
  }
}
.header-line{
    margin:0px ;
    width:100% ;
    border:1px solid grey ;
    display:inline-block ;
    margin-bottom:10px ;
  }

`;