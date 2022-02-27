import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function List({item1,item2,item3,item4,item5,head,item6,item7}) {
  return (
<FooterList>
                        <h3 className='footer-head'>{head}</h3>
                        <div className='uln'>
                            <ul type="square">
                            <li><Link to="/"/>{item1}</li>
                            <li><Link to="/"/>{item2}</li>
                            <li><Link to="/"/>{item3}</li>
                            <li><Link to="/"/>{item4}</li>
                            <li><Link to="/"/>{item5}</li>
                            <li><Link to="/"/>{item6}</li>
                            </ul>
                        </div>
</FooterList>
  )
}
export default List
const FooterList = styled.div`
    margin-left: 7%;
    margin-top: 45px;
    padding: 0px 15px;  
.footer-head{
    margin-top: 15px;
    font-size: 33px;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
}
.uln{
    margin-top: 20px;
    font-size: 18px;
    ul{
        li{
            cursor: pointer;
            :hover{
                color: #e5a023;
            }
            a{
                margin-left: 10px;
            }
        }
    }
}

`;