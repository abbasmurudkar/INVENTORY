import React from 'react'
import styled from 'styled-components'
import Abouttabs from './Abouttabs';
function About(props) {

  return (
    <Abouts>
      <div className='headm'>
        <h2>Why invest with Brooz?</h2>
        <div className='herd'>
          <div className='sections'>
            <img  src="https://upstox.com/open-demat-account/open-demat-account-login/assets/images/0rs.png" alt="" />
            <div className='info_head'>Flat brokerage</div>
            <div className='info_para'>Up to ₹20 brokerage* on Equity and ₹0 on Mutual Funds & IPOs.</div>
          </div>
          <div className='sections'>
            <img  src="https://upstox.com/open-demat-account/open-demat-account-login/assets/images/4dots.png" alt="" />
            <div className='info_head'>One app for all</div>
            <div className='info_para'>Stocks, futures & options, mutual funds, IPO & more...</div>
          </div>
          <div className='sections'>
            <img  src="https://upstox.com/open-demat-account/open-demat-account-login/assets/images/running.png" alt="" />
            <div className='info_head'>Trade from anywhere</div>
            <div className='info_para'>Invest via browser on laptop or your phone app.</div>
          </div>
        </div>
      </div>
      <Abouttabs/>
    </Abouts>
  )
}
export default About
const Abouts = styled.div`
.headm{
  height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.herd{
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 25px;
}
.info_head{
  color: black;
  font-weight: 500;
  font-size: 19px;
}
.info_para{
  font-size: 16px;
  font-family:sans-serif;
  color: black;
  margin-top: 5px;
  font-weight: 600;
}
.sections{
  flex: 33.33%; 
  max-width: 284px;
  margin: 3px 31px;
}

`;
