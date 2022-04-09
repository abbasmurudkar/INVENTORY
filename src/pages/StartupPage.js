import React from 'react'
import styled from 'styled-components'
import About from '../components/StartupPage/ABOUT/About';
import Banner from '../components/StartupPage/Banner/Banner';
import Navbar from '../components/StartupPage/Banner/Navbar';
import Features from '../components/StartupPage/Features/Features';
import Footer from '../components/StartupPage/FOOTER/Footer';
function StartupPage() {
    const title = "ROOZ"
    return (
        <FrontPage>
            <main id="home">
            <Navbar title={title}/>
            <section >
               <Banner/>
            </section>
            <section id="About">
               <About />
            </section>
            <section id="Contact">
               <Features/>
            </section>
            <section>
               <Footer id="Support"/>
            </section>
            </main>
        </FrontPage>
    )
}
export default StartupPage

const FrontPage = styled.div`
height: 100vh;

`;
