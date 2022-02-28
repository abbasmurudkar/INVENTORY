import React from 'react'
import styled from 'styled-components'
import Circle from '../../../styles/Circle';

function Features() {
    return (
        <AppFeatures>

        <div >
            <h2 className='head-title'> BROOZ Features</h2> 

            <div className='mixed'>
                <div className='first'>
                 <img className='first-image' src="https://files.coinswitch.co/ui/public/images/kuber-asset.png?version=2021081913" alt=""/>
                 <div>
                 <Circle text={"50%"}/><br/><br/><br/>
                 <Circle text={"50%"}/>
                 </div>
                </div>

                <div className='second'>
                     <div className='another'>

                         <div className='start'>
                             <img className='second-image' src='https://files.coinswitch.co/ui/public/images/fluent-natural-interface.png?version=2021081913' alt=''/>
                           <div className='writen'>
                               <h4 className='hds'>Simple Design</h4>
                               <p className='paraa'>Easiest platform to Buy, Sell and manage your investments. Instantly deposit, withdraw and trade over 100 assets with ease.</p>
                           </div>
                         </div>

                     </div>

                     <div className='another'>
                         
                         <div className='start'>
                             <img className='second-image' src='https://files.coinswitch.co/ui/public/images/fluent-exchange.png?version=2021081913' alt=''/>
                           <div className='writen'>
                               <h4 className='hds'>Best Rates</h4>
                               <p className='paraa'>By aggregating liquidity across major Indian and global exchanges, BROOZ order matching engine provides you the best rate at a click of the button.</p>
                           </div>
                         </div>

                     </div>

                     <div className='another'>
                         
                         <div className='start'>
                             <img className='second-image' src='https://files.coinswitch.co/ui/public/images/fluent-sale.png?version=2021081913' alt=''/>
                           <div className='writen'>
                               <h4 className='hds'>Zero Fees</h4>
                               <p className='paraa'>ZERO INR trading, deposit and withdrawal fees for first 100 days.</p>
                           </div>
                         </div>

                     </div>


                     <div className='another'>
                         
                         <div className='start'>
                             <img className='second-image' src='https://files.coinswitch.co/ui/public/images/kuber-secure.png?version=2021081913' alt=''/>
                           <div className='writen'>
                               <h4 className='hds'>Trusted and Secure</h4>
                               <p className='paraa'>CoinSwitch trading platform has processed over $5 billion and brings the same trust and security to BROOZ.</p>
                           </div>
                         </div>

                     </div>
                </div>
            </div>
        </div>
        </AppFeatures>
    )
}

export default Features

const AppFeatures = styled.div`
.head-title{
    text-align: center;
    margin-top: 30px;
    color: black;
    font-weight: 550;
  font-style: italic;
  text-decoration: underline;
}



.mixed{
    display: flex;
margin-top: 50px;
}

.first{
    /* margin-left: 10%; */
display: flex;
justify-content: space-between;
width: 700px;
}
.first-image{
    width: 100%;
    height: 530px; 
    object-fit: contain;
}

.second{
    margin-left: 10%;
    /* text-align: right; */
   
}
.second-image{
  width: 60px;
   object-fit: contain;
}
.another{
 display: flex; 
 flex-direction: column;
 margin-bottom: 40px;
    /* background-color: red; */
    /* flex-wrap: wrap; */
}

.start{
    display: flex;
}

.writen{
    margin-left: 10px;
}


.hds{
    color: black;
    font-weight: 550;
    font-size: 25px;
    font-family: sans-serif;
}


.paraa{
    margin-top: 10px;
    font-size: 16px;
    font-weight: 700;
    /* flex: 33.33%; */
    max-width: 500px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}


@media  screen and (max-width: 940px){

    .mixed{
        display: flex;
        flex-direction: column;
       
    }

    .first{
        height: max-content;
        text-align: center;
    }

    .head-title{
        text-align: center;
        justify-content: center;
       
    }

    .second{
        margin-top: 50px;
        height: max-content;
        width: max-content;
    }

    .another{
        height: max-content;
         width: max-content;  
    }

  
}
`;