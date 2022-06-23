import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import FadeIn from 'react-fade-in/lib/FadeIn';
import Boxes from '../ADDTIONAL COMPONENT/Boxes';
import Nifty from '../ADDTIONAL COMPONENT/Nifty';
import Carosuel from '../ADDTIONAL COMPONENT/Active-Carosuel';
import { api_key, url } from '../Api';
import axios from 'axios';

const Dashboard = ({ add }) => {
  const [MostActive, setActive] = useState([])
  const [Losers, setLosers] = useState([])
  const [Gainers, setGainers] = useState([])
  const [isLoading, setisLoading] = useState(true)
  useEffect(() => {
    fetchData()
    setisLoading(false)
  }, [])



  const fetchData = () => {
    const active = `${url}stock_market/actives?${api_key}`;
    const losers = `${url}stock_market/losers?${api_key}`;
    const gainers = `${url}stock_market/gainers?${api_key}`;
    const getactive = axios.get(active)
    const getlosers = axios.get(losers)
    const getgainers = axios.get(gainers)

    axios.all([getactive, getlosers, getgainers]).then(axios.spread((...allData) => {
      const data = allData[0]
      const datatwo = allData[1]
      const datathree = allData[2]
      setActive(data.data)
      setLosers(datatwo.data)
      setGainers(datathree.data)
      setisLoading(true)
    }))
  }
  return (
    <FadeIn>
      <Dashboards>
        <Blocks>
          <Box>
            <Boxes heading={"Orders"} icon={"angle-right"} add={add} />
            <Boxes heading={"Buy Stocks"} icon={"angle-double-right"} />
            <Boxes heading={"Visitors"} icon={"people-group"} />
          </Box>
        </Blocks>
        <Blocks>
          <Box1>
            <div className='headers'>
              <h2>Index</h2>
              <div className='header-line' />
            </div>
            <div className='Nifty-Block'>
              <Nifty heading={"NIFTY 50"} />
              <Nifty heading={"SENSEX"} />
              <Nifty heading={"NIFTY BANK"} />
            </div>
          </Box1>
        </Blocks>
        <Blocks>
          <Box1>
            <div className='headers'>
              <h2>Most Active</h2>
              <div className='header-line' />
            </div>
            <div className='Blocks'>
              <Carosuel state={MostActive} isLoading={!isLoading} />
            </div>
          </Box1>
          <Box1>
            <div className='headers'>
              <h2>Top Gainer</h2>
              <div className='header-line' />
            </div>
            <div className='Blocks'>
              <Carosuel state={Gainers} isLoading={!isLoading} />
            </div>
          </Box1>
          <Box1>
            <div className='headers'>
              <h2>Top Loser</h2>
              <div className='header-line' />
            </div>
            <div className='Blocks'>
              <Carosuel state={Losers} isLoading={!isLoading} />
            </div>
          </Box1>
        </Blocks>
      </Dashboards>
    </FadeIn>
  )
}

export default Dashboard
const Dashboards = styled.div`
margin-top:100px;
height:100% ;
user-select:none ;

`;
const Blocks = styled.div`
padding:10px ;
`;
const Box = styled.div`
padding:2px ;
display:flex ;
width:100% ;
flex-direction:row;
justify-content:space-around ;
`;
const Box1 = styled.div`
display:flex ;
justify-content:space-around ;
flex-direction:column ;
.headers{
  padding: 10px 20px;
  .header-line{
    border:2px solid grey ;
    width:50% ;  }
}
.Nifty-Block{
  padding: 10px 20px;
  display:grid ;
  width:50% ;
  grid-gap:10px ;
  grid-template-columns:auto auto ;
}

`;