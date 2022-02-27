import React from 'react'
import WEBSITE_LOGO from '../../../Assets/logo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import List from './List'
function Footer() {
    return (
        <FooterLayout>
                <div className='footer-column'>
                        <img className='footer-logo' src={WEBSITE_LOGO} alt="Loading" /><span>ROOZ</span>
                        <div className='footer-address'>
                            <p>No.11, 2nd floor, 80 FT Road</p>
                            <p>4th Block, S.T Bed, Koramangala</p>
                            <p>Bengaluru – 560034</p>
                        </div>

                    {/* <div className='footer-row'>
                        <h3 className='footer-head'>Products</h3>
                        <div className='uln'>
                            <li className='lon'><Link to="/"/>Stocks</li>
                            <li className='lon'><Link to="/"/>Future & Options</li>
                            <li className='lon'><Link to="/"/>Mutual Funds</li>
                            <li className='lon'><Link to="/"/>Fixed Deposit</li>
                            <li className='lon'><Link to="/"/>US Stocks</li>
                        </div>
                    </div>

                    <div className='footer-row'>
                        <h3 className='footer-head'>BROOZ</h3>
                        <div className='uln'>
                            <li className='lon'><Link to="/"/>About Us</li>
                            <li className='lon'><Link to="/"/>Pricing</li>
                            <li className='lon'><Link to="/"/>Blog</li>
                            <li className='lon'><Link to="/"/>Media & Press</li>
                            <li className='lon'><Link to="/"/>Careers</li>
                            <li className='lon'><Link to="/"/>Help and Supports</li>
                        </div>
                    </div>

                    <div className='footer-row'>
                        <h3 className='footer-head'>Quick Links</h3>
                        <div className='uln'>
                            <li className='lon'><Link to="/"/>AMC Mutual Funds</li>
                            <li className='lon'><Link to="/">Calculators</Link></li>
                            <li className='lon'><Link to="/">Glossary</Link></li>
                            <li className='lon'><Link to="/">Open Demat Account</Link></li>
                            <li className='lon'><Link to="/"/>BROOZ Digest</li>
                            <li className='lon'><Link to="/">BROOZ Academy</Link></li>
                            <li className='lon'><Link to="/">Sitemap</Link></li>
                        </div>
                    </div> */}
                    <List item1={"Stocks"} item2={"Stocks"}  item3={"Stocks"}  item4={"Stocks"}  item5={"Stocks"}  item6={"Stocks"} head={"Products"}/>
                    <List item1={"Stocks"} item2={"Stocks"}  item3={"Stocks"}  item4={"Stocks"}  item5={"Stocks"}  item6={"Stocks"} head={"Products"}/>
                    <List item1={"Stocks"} item2={"Stocks"}  item3={"Stocks"}  item4={"Stocks"}  item5={"Stocks"}  item6={"Stocks"} head={"Products"}/>
                </div>
                <div className='topns'></div>
                <div className='end-footn'>
                    <div className='end-linem'>
                        ⓒ 2019-2022 BROOZ. All rights reserved, Built with <span className="dil"> ♥ </span>in India
                    </div>
                    <div className='two-imgn'>
                        <img className='app' src="https://files.coinswitch.co/ui/public/images/appstore.png?version=2021081913" alt="" />
                        <img className='app' src="https://files.coinswitch.co/ui/public/images/google-play.png?version=2021081913" alt="" />
                    </div>
                </div>
        </FooterLayout>

    )
}
export default Footer

const FooterLayout = styled.div`
    background-color: #1e2232;
    color: white;
    width: 100%;
  height: 470px;
.footer-column{
    display: flex;
    .footer-address{
                margin-left: 15px;
                margin-top: 20px;
                font-size: 16px;
               color: white;
            }
            span{
            font-size: 40px;
            position: relative;
            top: 15px;
            right: 5px;
            transition: 0.3s all ease-in-out;
            color: white;
        }
            .footer-logo{
            width: 60px;
            height: 60px;
        }
}


.lon a:hover{
    color: white;
    text-decoration: none; 
}



.topns{
    border-top: 1px solid lightgray;
     width: 75%;
margin: 40px auto; 
} 


.end-footn{
    display: flex;
   margin-top: 10px;
}


.end-linem{
    margin-left: 45px;
    font-size: 18px;
}

.dil{
  color: #eb5b3c;
  font-size: 20px;
  margin: 0px 2px;
}

.two-imgn{
    text-align: right;
    margin-left: 35%;
}

.app{
    width: 130px;
    margin: 0px 10px;
    margin-top: -10px;
}
`;