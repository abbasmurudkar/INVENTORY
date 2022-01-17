import React from 'react'
import { Button, Icon } from 'rsuite'
import styled from 'styled-components'
import FadeIn from 'react-fade-in/lib/FadeIn';
function BannerText(props) {
    return (
        <div>
            <TextBanner>
                <Fades transitionDuration="500">
                <div className='Nav_Head'>
                <h1>{props.head}<br/>{props.head1}</h1>
                </div>
                <div className='Nav_Text'>
                <p>{props.summary}</p>
                </div>
                <div className='Nav_Btn'>
                <Button >Get Started Now <Icon icon="play2"/></Button>
                <Button >Get Started Now <Icon icon="play2"/></Button>
                </div>
                </Fades>
            </TextBanner>
        </div>
    )
}

export default BannerText

const TextBanner = styled.div`
width: 50vw;
height: 400px;
display: flex;
justify-content: center;
flex-direction: column;
.Nav_Head{
    user-select:none;
    display: block;
    text-align: center;
    h1{
      font-weight: 500;
    }
}
.Nav_Text{
    margin-top: 12px;
    color: #c4990c;
    font-size: 19px;
    user-select:none;
    font-weight: bolder;
    display: block;
    text-align: center;
}
.Nav_Btn{
    display: inline-block;
    margin-top: 20px;
    display: block;
    text-align: center;
    Button{
        font-size: 20px;
        color: white;
        background-color:#e5a023;
        margin-right :30px ;
    }
}
`;
const Fades = styled(FadeIn)`
transition: 0.3s all ease-in-out;
`;
