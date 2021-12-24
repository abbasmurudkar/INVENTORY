import React from 'react'
import styled from 'styled-components'
import WEBSITE_LOGO from '../Assets/logo.png'

function BannerText() {
    return (
        <div>
            <TextBanner>
                <div className='Nav_Head'>
                {/* <img src={WEBSITE_LOGO} alt='Loding'/> */}
                <h1 style={{display:"inline-block"}}>
                    <span>O</span>NE <span>P</span>LATFORM. <span>M</span>ultiple</h1>
                </div>
            </TextBanner>
        </div>
    )
}

export default BannerText

const TextBanner = styled.div`
border: 2px solid green;
width: 50vw;
height: 400px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


.Nav_Head{
    border: 2px solid red;
    img{
        width: 60px;
        height: 60px;
    }
    h1{
        position: relative;
        top: 12px;
        right: 6px;
        transition: 0.3s all ease-in-out;
    }
    span{
        color: #c4990c;
        font-size:60px ;
    }
}
`;
