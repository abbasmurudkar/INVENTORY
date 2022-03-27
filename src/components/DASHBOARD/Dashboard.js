import React, { useState } from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import "../../CSS/Sidebar.css"
const Dashboard = () => {
  const [inactive,setinactive] = useState(false)
    return (
        <MainBoard>
         <Sidebar sideContent={(inactive)=>{
           setinactive(inactive)
         }} />
         <div className={`main ${inactive? "inactive":" "}`}>
         sfsadg
         </div>
        </MainBoard>
    )
}

export default Dashboard

const MainBoard = styled.div`
.main {
  margin-left: 300px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
  transition: margin-left 0.3s ease-in ;
}

`;