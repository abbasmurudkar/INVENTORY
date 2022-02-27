import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Icon } from "rsuite";
import styled from 'styled-components'
import BACKGROUND_IMAGE1 from "../../../Assets/stocks.png"
import BACKGROUND_IMAGE2 from "../../../Assets/mf.png"
import BACKGROUND_IMAGE3 from "../../../Assets/ipo.png"
import BACKGROUND_IMAGE4 from "../../../Assets/futures.png"


function Abouttabs() {
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
        <TabsComponent>
            <div className="Head">
            <h2>Multiple Investment Opportunities</h2>
            <p>Long term investors, pro traders or part-time traders can <br/>choose across various asset classes and create your<br/> customised portfolio. All from one platform</p>
            </div>
            <Tabs className="M-tabs">
                <TabList className="tabs-list" style={{ fontSize: "22px" }}>
                    <Tab>Stocks</Tab>
                    <Tab>Mutual Funds</Tab>
                    <Tab>IPOs</Tab>
                    <Tab>Future & Options</Tab>
                </TabList>
                <hr className='line' />
                {tabs.map((t, index) => (
                    <div key={index}>
                        <TabPanel className="Panel">

                            <h2 style={{ position: "relative", display: "block", padding: "20px", fontWeight: "900" }}>{t.Head}</h2>
                            <img style={{ position: "relative", left: "550px", display: "inline-block", width: "300px", top: "-45px" }} src={t.background} alt="Loading" />
                            <div className="tabs-text">
                                <p style={{ fontSize: "20px" , fontWeight:"400"}}><Icon style={{ fontSize: "22px", paddingRight: "10px" }} icon={t.icon} /> {t.para1}</p>
                                <p style={{ fontSize: "20px" ,fontWeight:"400"}}><Icon style={{ fontSize: "22px", paddingRight: "10px" }} icon={t.icon} /> {t.para2}</p>
                                <p style={{ fontSize: "20px",fontWeight:"400" }}><Icon style={{ fontSize: "22px", paddingRight: "10px" }} icon={t.icon} /> {t.para3}</p>
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
background :#EEEBE6;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
.Head{
margin-top: 80px;
h2{
    margin-bottom: 16px;
}
p{
    color: gray;
    font-size: 20px;
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