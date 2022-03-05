import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Icon } from "rsuite";
import styled from 'styled-components'
import BACKGROUND_IMAGE1 from "../../../Assets/stocks.png"
import BACKGROUND_IMAGE2 from "../../../Assets/mf.png"
import BACKGROUND_IMAGE3 from "../../../Assets/ipo.png"
import BACKGROUND_IMAGE4 from "../../../Assets/futures.png"
import BACKGROUND_VIDEO from "../../../Assets/bg6.jpeg"


function Abouttabs() {
    // TABS DATA
    const tabs = [
        {
            Head: "STOCKS",
            icon: "check-circle-o",
            para1: "Pay just up to ₹20* per order",
            para2: "Option chain with strategy mode",
            para3: "TradingView and ChartsIQ chart libraries",
            background: BACKGROUND_IMAGE1
        },
        {
            Head: "MUTUAL FUNDS",
            icon: "check-circle-o",
            para1: "Pay just up to ₹20* per order",
            para2: "Option chain with strategy mode",
            para3: "TradingView and ChartsIQ chart libraries",
            background: BACKGROUND_IMAGE2
        },
        {
            Head: "IPOs",
            icon: "check-circle-o",
            para1: "Pay just up to ₹20* per order",
            para2: "Option chain with strategy mode",
            para3: "TradingView and ChartsIQ chart libraries",
            background: BACKGROUND_IMAGE3
        },
        {
            Head: "FUTURE & OPTIONS",
            icon: "check-circle-o",
            para1: "Pay just up to ₹20* per order",
            para2: "Option chain with strategy mode",
            para3: "TradingView and ChartsIQ chart libraries",
            background: BACKGROUND_IMAGE4
        },

    ]
    return (
        // TABS FOR ABOUT PAGE
        <TabsComponent>
            <div className="Head">
            <h2>Multiple Investment Opportunities</h2>
            <p>Long term investors, pro traders or part-time traders can <br/>choose across various asset classes and create your<br/> customised portfolio. All from one platform</p>
            </div>
            {/* TABS HEADING */}
            <Tabs className="M-tabs">
                <TabList className="tabs-list" style={{ fontSize: "22px" }}>
                    <Tab>Stocks</Tab>
                    <Tab>Mutual Funds</Tab>
                    <Tab>IPOs</Tab>
                    <Tab>Future & Options</Tab>
                </TabList>
                <hr className='line' />
                {/* TABS LISTS AND ITS DATA */}
                {tabs.map((t, index) => (
                    <div key={index}>
                        <TabPanel className="Panel">
                            <h2 style={{ position: "relative", display: "block", padding: "20px", fontWeight: "900", color:"#cfe6f9" }}>{t.Head}</h2>
                            <img style={{ position: "relative", left: "550px", display: "inline-block", width: "300px", top: "-45px" }} src={t.background} alt="Loading" />
                            <div className="tabs-text">
                                <p style={{ fontSize: "25px" , fontWeight:"400", color:"#ebe1c1"}}><Icon style={{ fontSize: "22px", paddingRight: "10px" }} icon={t.icon} /> {t.para1}</p>
                                <p style={{ fontSize: "25px" ,fontWeight:"400", color:"#ebe1c1"}}><Icon style={{ fontSize: "22px", paddingRight: "10px" }} icon={t.icon} /> {t.para2}</p>
                                <p style={{ fontSize: "25px",fontWeight:"400" , color:"#ebe1c1"}}><Icon style={{ fontSize: "22px", paddingRight: "10px" }} icon={t.icon} /> {t.para3}</p>
                            </div>
                        </TabPanel>
                    </div>
                ))}
            </Tabs>
        </TabsComponent>

    )
}
export default Abouttabs;
const TabsComponent = styled.div`
background-image:linear-gradient(to top,rgb(0 0 0 / 52%),rgb(47 49 114 / 73%)), url(${BACKGROUND_VIDEO});
background-size: cover;
background-position: center;
background-attachment: fixed;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
color: white;
video{
    width: 70%;
    object-fit: cover;
    position: absolute;
    top: 1272px;
    z-index: -1;
    height: 427px;
}
.Head{
margin-top: 80px;
h2{
    margin-bottom: 16px;
    color: #cfe6f9;
    font-size: 45px;
}
p{
    color: #ebe1c1;
    font-size: 25px;
    line-height: 32px;
    display: block;
    text-align: center;
    letter-spacing: normal;
    margin-bottom: 16px;
}
}
.tabs-text{
    display: inline-block;
    position: relative;
    right: 280px;
    padding:12px;
    height: 200px;
}
.M-tabs{
  width: 900px;
  display: flex;
 align-items: center;
  flex-direction:column;
  height: 450px;
}
.tabs-list{
    display: flex;
    justify-content: center;
    justify-content: center;
    height: 80px;
    align-items: center;
    font-weight: bold;
}
.react-tabs__tab--selected {
    background: #c4990c;
    border-color: wheat;
    color: white;
    border-radius: 22px;
    transition: 0.3s all ease-in;
    user-select: none;
    transform: translateX(-4px);
}
.react-tabs__tab
{
  padding: 6px 22px;
  user-select: none ;
}
hr{
width: 80%;
border: 1px solid #e1e0e0;
margin: 0;
margin-bottom: 10px;
}
.Panel{
    width: 900px;
}
`;