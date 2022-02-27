import React from 'react'
import styled from 'styled-components'
import About from '../components/StartupPage/ABOUT/About';
import Banner from '../components/StartupPage/Banner/Banner';
import Footer from '../components/StartupPage/FOOTER/Footer';
function StartupPage() {
    // const AboutSection = useRef(null)

    // const gotoAboutSection = () =>{
    //     window.scrollTo({
    //         top: AboutSection.current.offsetTop, 
    //         behavior: 'smooth'
    //     })
    // }
    return (
        <FrontPage>
               <Banner/>
               <About/>
               <Footer/>
        </FrontPage>
    )
}
export default StartupPage

const FrontPage = styled.div`
height: 100vh;
`;
