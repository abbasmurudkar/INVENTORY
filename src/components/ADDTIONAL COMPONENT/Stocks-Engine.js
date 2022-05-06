import React from 'react'

function StocksEngine({Result}) {
  return (
    <div className='grid'>

      {Result.map((item,index)=>{
            return(
              <div className='Blocks'key={index} >
              <div className='active-block' >
                <div className='active-header'>
                  <h4>{item.symbol.slice(1,10)}</h4>
                  <div className='header-line' />
                </div>
                <div className='active-info'>
                  <p>{item.name.slice(0, 15)}..</p>
                  <p><span className={`${item.changesPercentage>0?"green":"red"}`}>{item.currency}</span><span>{item.exchangeShortName}</span></p>
                </div>
              </div>
            </div>
            )
          })}
    </div>
  )
}

export default StocksEngine