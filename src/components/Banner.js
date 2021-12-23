import React from 'react'
import BACKGROUND_IMAGE from '../Assets/bg6.jpeg'
import styled from 'styled-components'
import Navbar from './Navbar'

function Banner() {
    return (
        <Background>
            <div>
            
            <Navbar/>
            </div>
        </Background>
    )
}

export default Banner

const Background = styled.div`
width: 100vw;
background-image: linear-gradient(to top,rgb(0 0 0 / 52%),rgb(47 49 114 / 73%)), url(/INVENTORY/static/media/bg.c919317….jpg), url(${BACKGROUND_IMAGE}); 
background-size:  cover;
background-position: center;
height: 700px;
`;