import React from 'react'
import styled from 'styled-components';

const Inventory = () => {
  let todos = [
    {
      sno: 1,
      ComapnyName: "GO TO MARKET",
      desc : "Here the markets",
      ComapanyPrice:"6789"
      
    }
  ]
  return (
    <Inven>
      <h1>INVENTORY</h1>
    </Inven>
  )
}

export default Inventory

const Inven = styled.div`
margin-top:100px;
height:100% ;
padding:10px ;
`;