
import React, { useEffect, useState } from 'react'
import { Button, Icon} from 'rsuite'
import styled from 'styled-components'
import WEBSITE_LOGO from '../../Assets/logo.png'
import { useProfile } from '../../context/Profile.context'
import CloseIcon from '@rsuite/icons/Close';
import MenuIcon from '@rsuite/icons/Menu';
import "../../CSS/Sidebar.css"
import SideList from './SideList'
import ProfileAvatar from './ProfileAvatar'
const Sidebar = (props) => {
    const { profile } = useProfile()
    //     const {profile} = useProfile()
    const [inactive, setinactive] = useState(false)
    useEffect(() => {
        props.sideContent(inactive)
    }, [inactive])
    
    const Links = [
        {
            to:"/Dashboard",
            sidelist:"DashBoard",
            icon:"dashboard"
        },
        {
            to:"/Dashboard/UserProfile",
            sidelist:"User Profile",
            icon:"user-circle"
        },
        {
            to:"/Dashboard/Inventory",
            sidelist:"Create Your Inventory",
            icon:"edit"
        },
        {
            to:"/Dashboard/Stocks",
            sidelist:"Stocks",
            icon:"bar-chart"
        },
        {
            to:"/Dashboard/News",
            sidelist:"Stocks News",
            icon:"newspaper-o" 
        },
        {
            to:"/Dashboard/Orders",
            sidelist:"Orders",
            icon:"order-form"
        },
    ]

    return (
        <SideNav>
            <div className={`side-menu ${inactive ? "inactive" : " "}`}>
                <div className='top-section'>
                    <div className='logo'>
                        <img src={WEBSITE_LOGO} alt="Loading" />
                    </div>
                    <div className='toogle-menu' >
                        <Button className="btn" onClick={() => setinactive(!inactive)}>
                            {inactive ? <MenuIcon /> : <CloseIcon />}
                        </Button>
                    </div>
                    <div className='Profile-Name'>
                        {inactive ?
                                <ProfileAvatar src={profile.Avatar} name={profile.Name} className="font-bolder"/>
                            :
                            <h4>Hi, {profile.Name}</h4>
                        }
                    </div>
                </div>
                <div className='divider'></div>
                <div className="main-menu">
                    <ul>
                        {Links.map((link,inc)=>{
                       return <SideList  sidelist={link.sidelist} key={inc} to={link.to} icon={link.icon} />
                        })}
                    </ul>
                </div>
                <div className='side-menu-footer'>
                    <div className='Logout_btn'>
                        <Button id="btn" block color='red' ><Icon size='lg' icon="long-arrow-right"/></Button>
                    </div>
                    <div className='user-info'>
                       <h4>Logout</h4>
                    </div>
                </div>
            </div>
        </SideNav>
    )
}
export default Sidebar
const SideNav = styled.div`

    .side-menu{
        position:fixed ;
        background: #000 ;
        width:300px ;
        height:100% ;
        box-sizing:border-box ;
        padding: 30px 20px ;
        transition: width 0.3s ease-in ;
        .top-section{
            position:relative ;
            .logo{
                width:40px ;
                height:40px ;
                overflow:hidden ;
                display: inline-block ;
                img{
                    max-width:100% ;
                    max-height:100% ;
                }
            }
            .toogle-menu{
                color: #333 ;
                font-size:20px ;
                position:absolute ;
                top: 30% ;
                right:0 ;
                transform: translateY(-60%) ;
                .btn{
                    border-radius: 50% ;
                    background-color:#091135 ;
                    color:white ;
                    .icon{
                        font-size:16px ;
                    }
                }
            }
            .Profile-Name{
                width:100% ;
                color: white ;
                padding-top:10px ;
                img{
                    max-width:100% ;
                }
            }
        }
    .divider{
        width: 100%;
        height : 1px;
        border-radius: 1px;
        background: #333 ;
        margin-top:10px ;
    }
    .main-menu{margin: 5px 0;}

        .side-menu-footer{
            width:100% ;
            height:100px ;
            background:#333 ;
            position:absolute ;
            bottom:0 ;
            padding:  20px;
            left:0 ;
                .Logout_btn{
                    width:40px ;
                    height:50px ;
                    overflow:hidden ;
                    display: inline-block ;
                    #btn{
                        height:50px ;
                    }
            }
                .user-info{
                    display:inline-block ;
                    margin: 0 10px ;
                    color: white ;
                    position:absolute ;
                    opacity:1 ;
                    transition: opacity 0.3s ease-in ;
                h4{
                    padding:8px ;
                    font-weight:bolder ;
                }
            }
        } 
    }
`;