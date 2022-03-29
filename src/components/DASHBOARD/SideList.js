import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'rsuite'
import styled from 'styled-components'
const SideList = ({ sidelist, icon, to }) => {
    return (
        <ListItem>
            <li>
                <Link className='list' to={to}>
                    <div className='block'>
                        <div className='menu-icon' >
                            <Icon size='2x' className="icon" icon={icon} />
                        </div>
                        <span>{sidelist}</span>
                    </div>
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
        .block{
            width:100 ;
        }
        cursor: pointer;
        span{
            display:inline-block ;
            line-height:40px ;
            opacity:1 ;
            transition: opacity 0.3s ease-in ;
            padding: 0px 10px ;
            width:200px ;
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