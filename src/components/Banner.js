import React from 'react'
import BACKGROUND_IMAGE from '../Assets/bg4.jpg'
import styled from 'styled-components'
import Navbar from './Navbar'
import BannerText from './BannerText'

function Banner() {
    const title = "ROOZ"
    return (
        <Background>
            {/* ------ NAVBAR------ */}
            <Navbar title={title}/>
            {/* --- NAVBAR ENDS ----*/}

            {/* --- TEXT-SECTION--- */}
            <Text>
            <BannerText/>
            </Text>
        </Background>
    )
}

export default Banner

const Background = styled.div`
width: 100vw;
background-image:linear-gradient(to top,rgb(0 0 0 / 52%),rgb(47 49 114 / 73%)),url(${BACKGROUND_IMAGE}); 
background-size:  cover;
background-position: center;
height: 700px;
`;
const Text = styled.div`
display: flex;
/* justify-content: center; */
align-items: center;
/* border: 2px solid red; */
width: 100%;
height: 500px;
color: white;
padding-left: 10%;
;
`
