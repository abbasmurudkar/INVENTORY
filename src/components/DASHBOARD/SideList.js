import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'rsuite'
import styled from 'styled-components'
const SideList = (props) => {
    return (
        <ListItem>
        <li>
            <Link className='list' to={props.to} >
            <div className='menu-icon'>
                <Icon size='2x' className="icon" icon={props.icon} />
            </div>
           <span>{props.sidelist}</span> 
            </Link>
        </li>
        </ListItem>
        )
}

export default SideList

const ListItem = styled.div`
 li{
     padding:15px 0 ;
    .list{
        color: white ;
        text-decoration:none ;
        font-size: 15px;
        display: inline-block ;
        font-weight:600 ;
        cursor: pointer;
        span{
            position:absolute ;
            display:inline-block ;
            line-height:40px ;
            opacity:1 ;
            transition: opacity 0.3s ease-in ;
        }
        }
    .menu-icon{
        display: inline-block ;
        color:white ;
        width: 40px ;
        height: 40px ;
        line-height: 40px ;
        text-align: center;
        }
    }
`;