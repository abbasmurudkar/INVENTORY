import React, { useRef } from 'react'
import styled from 'styled-components'
import About from '../components/About';
import Banner from '../components/Banner';
function StartupPage() {
    const AboutSection = useRef(null)

    const gotoAboutSection = () =>{
        window.scrollTo({
            top: AboutSection.current.offsetTop, 
            behavior: 'smooth'
        })
    }
    return (
        <FrontPage>
               <Banner section1 = {()=>gotoAboutSection}/>
               <About ref = {AboutSection}/>
        </FrontPage>
    )
}
export default StartupPage

const FrontPage = styled.div`
height: 100vh;
`;
