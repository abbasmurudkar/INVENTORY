import React from 'react'
import WEBSITE_LOGO from '../../../Assets/logo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import List from './List'
function Footer() {
    return (
        <FooterLayout>
                <div className='footer-column'>
                    <div className='Info-column'>
                        <img className='footer-logo' src={WEBSITE_LOGO} alt="Loading" /><span>ROOZ</span>
                        <div className='footer-address'>
                            <p>No.11, 2nd floor, 80 FT Road</p>
                            <p>4th Block, S.T Bed, Koramangala</p>
                            <p>Bengaluru – 560034</p>
                        </div>
                    </div>
                    <List item1={"Stocks"} item2={"Future & Options"}  item3={"Mutual Funds"}  item4={"Fixed Deposit"}  item5={"US Stocks"}  item6={"Stocks"} head={"Products"}/>
                    <List item1={"About Us"} item2={"Pricing"}  item3={"Blog"}  item4={"Media & Press"}  item5={"Careers"}  item6={"Help and Supports"} head={"BROOZ"}/>
                    <List item1={"Calculators"} item2={"AMC Mutual Funds"}  item3={"Glossary"}  item4={"Open Demat Account"}  item5={"BROOZ Digest"}  item6={"BROOZ Academy"} head={"Quick Links"}/>
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
    .Info-column{
        margin-left: 7%;
        margin-top: 45px;
        padding: 0px 15px;
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