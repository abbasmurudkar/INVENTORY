import React from 'react'
import styled from 'styled-components';
import { Carousel } from 'rsuite';
import CAROUSEL_ITEM1 from '../../Assets/bg10.png'
import CAROUSEL_ITEM2 from '../../Assets/bg11.jpeg'
import CAROUSEL_ITEM3 from '../../Assets/bg16.jpeg'


function CarouselSlider() {
  return (
    <Slider>
      <Carousel shape='bar' autoplay  className="custom-slider">
        <div className='rs-carousel-slider-item'>
          <img src={CAROUSEL_ITEM1} alt='loading' />
          <div className='content'>
            <h1>BROOZ</h1>
            <hr></hr>
            <p>If You are persistent you will get it.<span><br/>
              if you are consistent you will keep it up
            </span>
            </p>
          </div>
        </div>
        <div className='rs-carousel-slider-item'>
          <img src={CAROUSEL_ITEM2} alt='loading' />
          <div className='content'>
            <h1>THE BEST STOCKS MARKET</h1>
            <hr></hr>
            <p>If You Don't Follow Stocks Market<span><br/>You Are Missing Amazing Drama</span> </p>
          </div>
        </div>
        <div className='rs-carousel-slider-item'>
          <img src={CAROUSEL_ITEM3} alt='loading' />
          <div className='content'>
            <h1>FINANCE</h1>
            <hr></hr>
            <p>Wealth Is Not About Having A Lot Of Money<span><br/>It Is About Having A Lot Of Options</span> </p>
          </div>
        </div>
      </Carousel>
    </Slider>
  )
}

export default CarouselSlider
const Slider = styled.div`
user-select: none ;
.rs-carousel{
width: 950px ;
height:100vh ;
}
.rs-carousel-slider-item{
  img{
    width:100% ;
    height:100% ;
  }
  .content{
    /* border: 2px solid red; */
    position: absolute;
    top: 70%;
    display: block;
    color: white;
    width: 100%;
    p{
      padding:0px 20px 0px 20px ; //top right bottom left
      font-size:22px ;
      font-weight:bolder ;
      color: #6bcbca    
    }
    h1{
      padding:20px 20px 0px ;
      font-size:45px ;
      color: #a8fffe;
    }
    hr{
      border:2px solid #02def3;
      width:70% ;
      color: white;
    }
    span{
    font-size:18px ;
    font-weight:bolder ;
    }
  }
}
`;