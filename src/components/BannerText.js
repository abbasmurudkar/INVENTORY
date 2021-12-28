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
                </div>
                </Fades>
            </TextBanner>
        </div>
    )
}

export default BannerText

const TextBanner = styled.div`
/* border: 2px solid green; */
width: 50vw;
height: 400px;
display: flex;
justify-content: center;
/* align-items: center; */
flex-direction: column;
.Nav_Head{
    /* border: 2px solid ; */
    user-select:none;
    h1{
      font-weight: 500;
    }
    p{
        color: #c4990c;
        font-size:60px ;
        display: inline-block;
    }
}
.Nav_Text{
    /* border:2px solid white; */
    margin-top: 12px;
    color: #c4990c;
    font-size: 19px;
    user-select:none;
    font-weight: bolder;
}
.Nav_Btn{
    /* border: 2px solid white; */
    display: inline-block;
    margin-top: 20px;
    Button{
        font-size: 20px;
        color: black;
        background-color:#e5a023; 
    }
}
`;
const Fades = styled(FadeIn)`
transition: 0.3s all ease-in-out;
`;
