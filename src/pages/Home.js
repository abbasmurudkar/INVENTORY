import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Inventory from '../components/DasboardList/Inventory'
import Orders from '../components/DasboardList/Orders'
import Stocks from '../components/DasboardList/Stocks'
import StocksNews from '../components/DasboardList/StocksNews'
import UserProfile from '../components/DasboardList/UserProfile'
import Dashboard from '../components/DasboardList/Dashboard'
import DashboardNav from '../components/DASHBOARD/DashboardNav'
import Sidebar from '../components/DASHBOARD/Sidebar'
import ShowSymbol from '../components/DasboardList/SubFiles/ShowSymbol'

const Home = () => {

  return (
    <MainBoard>
      <Sidebar />
      <div className="Dashboard">
        <div className='Dashboard-Nav'>
          <DashboardNav />
        </div>
        <div className='Route'>
          <Switch>
            <Route path="/Dashboard">
              <Route exact path="/Dashboard">
                <Dashboard />
              </Route>
              <Route  path="/Dashboard/UserProfile">
                <UserProfile />
              </Route>
              <Route path="/Dashboard/Inventory">
                <Inventory />
              </Route>
              <Route  path="/Dashboard/Stocks">
                <Stocks />
              </Route>
              <Route path="/Dashboard/News">
                <StocksNews />
              </Route>
              <Route  path="/Dashboard/Orders">
                <Orders />
              </Route>
              <Route  path="/Dashboard/Data/:id">
                <ShowSymbol />
              </Route>
            </Route>
          </Switch>
        </div>
      </div>
    </MainBoard>
  )
}
export default Home

export const MainBoard = styled.div`
.Dashboard {
  margin-left: 300px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding:10px 20px ;
  
}
`;
