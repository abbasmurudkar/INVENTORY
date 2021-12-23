import React from 'react'
import styled from 'styled-components'
import Banner from '../components/Banner';
function StartupPage() {
    return (
        <FrontPage>
               <Banner/>
        </FrontPage>
    )
}
export default StartupPage

const FrontPage = styled.div`
height: 100vh;
`;
