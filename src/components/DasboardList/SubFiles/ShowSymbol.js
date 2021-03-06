import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, List } from 'rsuite'
import styled from 'styled-components'
import { api_key, url } from '../../Api'
import Chart from './Chart'
import Logo from '../../../Assets/logo.png'
function ShowSymbol({addTocart}) {
  const { id } = useParams()
  const [data, setData] = useState([])
  const [prices, setPrice] = useState()
  useEffect(() => {
    fetch(`${url}/profile/${id}?${api_key}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result)
        const p = result[0].price
        setPrice(p)
      })
  }, [id])
  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  }
  const displayrazorpay = async (amount) => {
    addTocart()
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    if (!res) {
      alert("your are offlibe failed to load razorpay")
      return;
    }
    const options = {
      key: "rzp_test_mNj333YrVgR9NC",
      key_secret: "cYdkhX47xesmmCeGGpKOzyrG",
      currency: "USD",
      amount: amount * 100,
      name: "BROOZ MEALS",
      description: "THANKS FOR PURCHASING",
      image: `${Logo}`,
      handler: function (response) {
        alert(response.razorpay_payment_id)
        alert("Payment Successful, Order Purchased")
      },
      prefill: {
        name: "ABBAS MURUDKAR"
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#3399cc",
      }
    };
    const paymentOnject = new window.Razorpay(options)
    paymentOnject.open()
  }
  return (
    <Body className="Symbol-body">
      <div className='Symbol-header'>
        {data.map((item, key) => {
          return (
            <div key={key} className='Symbol-sym'>
              <img src={item.image} alt='Loading' />
              <h2>{item.companyName}</h2>
              <div className='header-line' />
              <div className='Symbol-ceo'>{item.ceo}</div>
              <div className='chart-bar'>
                <Chart id={id} />
              </div>
              <div className='Symbol-Info'>
                <p>{item.description}</p>
              </div>
              <h4>FUNDAMENTALS:-</h4>
              <div className='header-line' />
              <div className='header-line' />

              <div className='Symbol-table'>

                <div className='table-1'>
                  <List >
                    <List.Item><p>mktCap: {item.mktCap}</p></List.Item>
                    <List.Item><p>volAvg: {item.volAvg}</p></List.Item>
                    <List.Item >Price: <p style={{ display: "inline-block" }} className={item.price > 0 ? "green" : "red"}>{item.price}</p></List.Item>
                    <List.Item><p>IpoDate: {item.ipoDate}</p></List.Item>

                  </List>
                </div>
                <div className='table-2'>
                  <List>
                    <List.Item>Changes: <p style={{ display: "inline-block" }} className={item.changes > 0 ? "green" : "red"}>{item.changes}</p></List.Item>
                    <List.Item><p>Range: {item.range}</p></List.Item>
                    <List.Item><p>LastDiv: {item.lastDiv}</p></List.Item>
                    <List.Item><p>State: {item.state ? item.state : "No City Mention"}</p></List.Item>
                  </List>
                </div>
              </div>

            </div>
          )
        })}

        <Button onClick={() => displayrazorpay(Math.floor(prices))} style={{ marginTop: "30px" }} block color="green">Buy Now</Button>

      </div>
    </Body>

  )
}

export default ShowSymbol

const Body = styled.div`
.red{
  color:red
}
.green{
  color:green ;
}
margin-top:120px ;
user-select:none ;
width:100% ;
.Symbol-header{
  margin-bottom:10px ;
  .Symbol-sym{
    h4{
      font-size:25px;
      margin-top:20px ;
      color:#434141 ;
    }
    .Symbol-Info{
      p{
        font-size:14px ;
        margin-top:10px ;
        font-weight:bold ;
        font-family:Roboto,system-ui;
        line-height:1.6 ;
        text-align:left ;
      }
    }
    .Symbol-table{
      display:flex ;
      justify-content:center ;
      align-items:center ;
      margin-top:20px ;
      .table-1,.table-2{
        width:50% ;
        padding-left:30px ;
        border-right:2px solid gray ;
        .rs-list-item-content{
          font-size:16px;
          color:#6d6666 ;
          border:none ;
        }
        .rs-list{
          -webkit-box-shadow:none;
          border:none ;
        }
        .rs-list-item {
          box-shadow:none;
        
        }
      }
      .table-2{
        width:50% ;
        border-right:none ;
      }
      
    }
    .chart-bar{
      width:100% ;
      height:500px ;
    }
    h2{
      font-weight:bolder ;
      color:#4a4a4a ;
      display:inline-block ;
    }
    .header-line{
      border:1px solid grey;
      width:90% ;
    }
    img{
      width:40px ;
      height:40px ;
      margin-bottom:10px ;
    }

    .Symbol-ceo{
      color:grey ;
      font-size:16px ;
    }
  }
}
button{
  font-size:20px ;
  font-weight:bolder ;
}
`;