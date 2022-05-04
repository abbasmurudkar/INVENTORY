import React from 'react'
import styled from 'styled-components';

function Nifty({heading}) {
  return (
    <Block>
    <div className='Nifty'>
    <h4>{heading}</h4>
    <p>234244</p><span>(24243)</span>
    </div>
    </Block>
  )
}

export default Nifty

const Block = styled.div`
.Nifty{
  width:250px ;
  margin:0 ;
  padding:6px 10px ;
  border-radius:10px ;
  background-color:white ;
  box-shadow:6px 5px 10px  grey ;
  h4{
    margin:0 ;
  }
  p{
    font-size:17px ;
    display:inline-block ;
    margin:0 ;
  }
  span{
    font-size:15px ;
    color:green ;
    display: inline-block;
  }
}
`;