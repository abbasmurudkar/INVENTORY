import React, { useState } from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import "../../CSS/Sidebar.css"
import { Route, Switch } from 'react-router-dom'
import DashboardNav from './DashboardNav'
import UserProfile from '../DasboardList/UserProfile'
import Inventory from '../DasboardList/Inventory'
import Stocks from '../DasboardList/Stocks'
import StocksNews from '../DasboardList/StocksNews'
import Orders from '../DasboardList/Orders'
const Dashboard = () => {
  const [inactive, setinactive] = useState(false)
  return (
    <MainBoard>
      <Sidebar sideContent={(inactive) => {
        setinactive(inactive)
      }} />
      <div className={`Dashboard ${inactive ? "inactive" : " "}`}>
        <div className='Dashboard-Nav'>
          <DashboardNav />
        </div>
        <Switch>
          <Route path="/Dashboard/UserProfile">
            <UserProfile />
          </Route>
          <Route path="/Dashboard/Inventory">
            <Inventory />
          </Route>
          <Route path="/Dashboard/Stocks">
            <Stocks />
          </Route>
          <Route path="/Dashboard/News">
            <StocksNews />
          </Route>
          <Route path="/Dashboard/Orders">
            <Orders />
          </Route>
        </Switch>
      </div>
    </MainBoard>
  )
}

export default Dashboard

const MainBoard = styled.div`
.Dashboard {
  margin-left: 300px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding:  50px;
  border:2px solid red ;
  transition: margin-left 0.3s ease-in ;
}

`;