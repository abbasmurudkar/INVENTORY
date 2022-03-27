import React from 'react'
import styled from 'styled-components';

function Circle(props) {
    return (
        <Circlesoption>
            <div className="wrapper">
                <svg className="rail" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="80" />
                    <text x="50%" y="50%" textAnchor="middle" fill="black" fontSize="50px" fontFamily="Arial" dy=".3em">{props.text}</text>
                </svg>
                <svg
                    className="bar"
                    viewBox='0 0 200 200'
                    xmlnx="https://www.w3.org/2000/svg"
                >
                    <circle cx="100" cy="100" r="80">
                    </circle>
                </svg>
            </div>
        </Circlesoption>
    )
}

export default Circle
const Circlesoption = styled.div`
.wrapper{
    position: relative;
    width: 200px;
    height: 200px;
}
svg{
    position: absolute;
    width: 200px;
    height: 200px;
    fill: none;
}
circle{
    stroke-width: 20;
    
}
.text{
    color: beige;
    font-size:50px;
    z-index: 3;
}
.rail{
    z-index: 1;
}
.bar{
    transform: rotate(-90deg);
    z-index: 2;
}
.rail>circle{
    stroke:
    #182552;
}
.bar>circle{
    stroke:#e5a023;
    stroke-dasharray:628 628;
    stroke-linecap: round;
    stroke-dashoffset: 400;
    animation: load 4s infinite;
    @keyframes load{
        0%{
            stroke-dashoffset: 628;
        }
        100%{
            stroke-dashoffset: 400;
        }
    }
}
`;
