import React from 'react'
import styled from 'styled-components'
import Abouttabs from './Abouttabs';
function About(props) {

  return (
    <Abouts>
      <div className='headm'>
        <h2 className='lom'>Why invest with Brooz?</h2>
        <div className='herd'>
          <div className='mage'>
            <img className='img' src="https://upstox.com/open-demat-account/open-demat-account-login/assets/images/0rs.png" alt="" />
            <div className='ban'>Flat brokerage</div>
            <div className='nan'>Up to ₹20 brokerage* on Equity and ₹0 on Mutual Funds & IPOs.</div>
          </div>
          <div className='mage'>
            <img className='img' src="https://upstox.com/open-demat-account/open-demat-account-login/assets/images/4dots.png" alt="" />
            <div className='ban'>One app for all</div>
            <div className='nan'>Stocks, futures & options, mutual funds, IPO & more...</div>
          </div>
          <div className='mage'>
            <img className='img' src="https://upstox.com/open-demat-account/open-demat-account-login/assets/images/running.png" alt="" />
            <div className='ban'>Trade from anywhere</div>
            <div className='nan'>Invest via browser on laptop or your phone app.</div>
          </div>
        </div>
      </div>
      <Abouttabs/>
    </Abouts>
  )
}
export default About
const Abouts = styled.div`
height: 300px;
.headm{
  height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    flex-direction: column;
}
.lom{
  text-align: center;
  color: black;
}

.herd{
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 25px;
}
.ban{
  color: black;
  font-weight: 500;
  font-size: 19px;
}
.nan{
  font-size: 16px;
  font-family:sans-serif;
  color: black;
  margin-top: 5px;
  font-weight: 600;
}
.mage{
  flex: 33.33%; 
  max-width: 284px;
  margin: 3px 31px;
}
`;
