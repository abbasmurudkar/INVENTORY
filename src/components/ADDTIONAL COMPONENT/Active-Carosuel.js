import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spinner from './Spinner';

function Carosuel({ state,isLoading }) {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3
  }

  return (
    <Carousel>
      {isLoading && <Spinner/>}
      <Slider {...settings } >
      {state.map((item, index) => {
        return (
            <div className='Blocks'key={index} >
              <div className='active-block' >
                <div className='active-header'>
                  <h4>{item.symbol}</h4>
                  <div className='header-line' />
                </div>
                <div className='active-info'>
                  <p>{item.name.slice(0, 15)}..</p>
                  <p><span className={`${item.changesPercentage>0?"green":"red"}`}>{item.changesPercentage}</span><span>${item.price}</span></p>
                </div>
              </div>
            </div>
        )
      })} 
    </Slider>

    </Carousel>

  )
}

export default Carosuel

export const Carousel = styled.div`
.red{
color:red ;
}
.green{
  color:green ;
}
button{
  background:#091135 ;
  width:30px ;
  height:30px ;
  border-radius:50% ;
}
.slick-prev:hover, .slick-prev:focus, .slick-next:hover, .slick-next:focus {
    color: #091135;
    outline: none;
    background: #091135;
}
.Blocks{
  padding: 15px 15px;
  display:flex ;
  flex-direction:row ;
  width:20% ;
  .active-block{
    width:100% ;
    height:160px ;
    padding:15px 15px ;
    border-radius:20px ;
    background-color:#edebeb ;
    box-shadow:6px 5px 10px  grey ;
    cursor: pointer;
    transition:0.3s all ease-in ;
    &:hover{
      transform:scale(1.1) ;
    }
    &:hover span:nth-child(2){
      color:green ;
    }
    .active-header{
      h4{
        display:inline-block ;
      }
    }
    .header-line{
      border:1px solid grey;
    }
    .active-info{
      p{
        font-size:16px ;
        padding:10px 0px ;
        span{
            margin-right:25px ;
        }
      }
    }
  }
}
`

