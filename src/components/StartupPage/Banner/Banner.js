import React from 'react'
import BACKGROUND_IMAGE from '../../../Assets/bg.jpg'
import styled from 'styled-components'
import Navbar from './Navbar'
import BannerText from './BannerText'

function Banner(props) {
    const title = "ROOZ"
    return (
        <Background>
           
            {/* ------ NAVBAR------ */}
            <Navbar title={title}/>
            {/* --- NAVBAR ENDS ----*/}

            {/* --- TEXT-SECTION--- */}
            <Text>
                <BannerText head={"ONE PLATFORM MULTIPLLE "} head1={"INVESTEMENT OPTION."} summary={"Don`t Let The Fear Of Losing Be Greater Then Excitement Of Winning."} />
            </Text>
            {/*--TEXT-SECTION-ENDS--*/}    
        </Background>
    )
}

export default Banner

const Background = styled.div`
width: 100%;
background-image:linear-gradient(to top,rgb(0 0 0 / 52%),rgb(47 49 114 / 73%)),url(${BACKGROUND_IMAGE}); 
background-size:  cover;
background-position: center;
background-attachment: fixed;
height: 750px;
`;
const Text = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 750px;
position: relative;
color: white;
/* border: 2px solid green; */
`;
