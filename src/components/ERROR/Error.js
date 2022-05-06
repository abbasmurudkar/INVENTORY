import React from 'react'
import styled from 'styled-components'

const Error = () => {
  return (
    <Errorsolver >
        <div className='bg'>

    <div className='content'>
        <h1 data-text="404">404</h1>
        <h4 data-text="Opps! Page not found">Opps! Page not found</h4>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <div className='btn'>
            <a href='/'>Return home</a>
        </div>
    </div>
        </div>
 </Errorsolver>
  )
}
export default Error

const Errorsolver = styled.div`

   position: absolute;
   top: 0%;
   bottom: 20%;
   display: flex;
   align-items: center;
   justify-content: center;
   box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
   background: -webkit-repeating-linear-gradient(-45deg, #71b7e6,#69a6ce,#b98acc,#ee8176, #b98acc, #69a6ce, #9b59b6);
   height: 100%;
   width:100% ;
   .bg{
    background-color: #fff;
    width:70%;
    display: flex;
    align-items: center;
   justify-content: center;
   height:60%
    }
.content{
    max-width: 600px;
    text-align: center;
}

.content h1{
    font-size: 17vw;
    line-height: 1em;
    position: relative;
}


.content h1::after{
    position: absolute;
    content: attr(data-text);
    top: 0;
    left: 0;
    right: 0;
    background: -webkit-repeating-linear-gradient(-45deg, #71b7e6,#69a6ce,#b98acc,#ee8176, #b98acc, #69a6ce, #9b59b6);
    background-size: 400%;
   -webkit-text-fill-color: transparent;
   text-shadow: 1px 1px 2px rgba(255,255,255,0.25);
   animation: animate 8s ease-in-out infinite;
   -webkit-background-clip: text;
}

  @keyframes animate{
      0%{
          background-position: 0 0;
      }

      25%{
          background-position: 100% 0;
      }

      50%{
        background-position: 100% 100%;
    }

    75%{
        background-position: 0 100%;
    }

    100%{
        background-position: 0 0;
    }

   
  }

.content h4{
    font-size: 1.5em;
    margin-bottom: 20px;
    text-transform: uppercase;
    color: #000;
    max-width: 600px;
    font-size: 2em;
    position: relative;
}

.content h4::after{
    position: absolute;
    content: attr(data-text);
    top: 0;
    left: 0;
    right: 0;
    -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   text-shadow: 1px 1px 2px rgba(255,255,255,0.4);


}

.content p{
    font-size: 1.2em;
    color: #0d0d0d;
}


.btn{
    margin: 25px 0;
    display: inline-flex;
}

.btn a{
    display: inline-block;
    text-decoration: none;
    margin: 0 10px;
    border: 2px solid #69a6ce;
    color: #69a6ce;
    font-weight: 500;
    border-radius: 25px;
    padding: 10px 25px;
    text-transform: uppercase;
    transition: all 0.3s ease;
}

.btn a:hover{
    color: #fff;
    background: #69a6ce;

}


   
   

`;