import React from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'
const Dashboard = () => {
    return (
        <MainBoard>
         <Sidebar/>
        
        </MainBoard>
    )
}

export default Dashboard

const MainBoard = styled.div`
.main {
  margin-left: 400px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}

`;