
import React, { useState } from 'react'
import { Avatar, Button, Icon, List } from 'rsuite'
import styled from 'styled-components'
import WEBSITE_LOGO from '../../Assets/logo.png'
import { useProfile } from '../../context/Profile.context'
import CloseIcon from '@rsuite/icons/Close';
import MenuIcon from '@rsuite/icons/Menu';
import "./Sidebar.css"
import SideList from './SideList'
import ProfileAvatar from './ProfileAvatar'
const Sidebar = () => {
    const { profile } = useProfile()
    //     const {profile} = useProfile()
    const [inactive, setinactive] = useState(false)
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
                                <ProfileAvatar src={profile.Avatar} name={profile.Name}/>
                            :
                            <h4>Hi, {profile.Name}</h4>
                        }
                    </div>
                </div>
                <div className='divider'></div>
                <div className="main-menu">
                    <ul>
                        <SideList sidelist="DashBoard" icon="dashboard" />
                        <SideList sidelist="User Profile" icon="user-circle" />
                        <SideList sidelist="Create Your Inventory" icon="edit" />
                        <SideList sidelist="Stocks" icon="bar-chart" />
                        <SideList sidelist="Stocks News" icon="newspaper-o" />
                        <SideList sidelist="Orders" icon="order-form" />
                    </ul>
                </div>
                <div className='side-menu-footer'>
                    <div className='avatar'>
                        <Avatar circle>
                        <img src={profile.Avatar} alt="loading" />
                        </Avatar>
                        {/* <Button ><Icon icon="long-arrow-right"/></Button> */}
                    </div>
                    <div className='user-info'>
                        <h5>{profile.Name}</h5>
                        <Button id="btn" color='red'><Icon icon="long-arrow-right"/></Button>
                        <p>{profile.email}</p>
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
        .side-menu-footer{
            width:100% ;
            height:100px ;
            background:#333 ;
            position:absolute ;
            bottom:0 ;
            padding:  20px;
            left:0 ;
                .avatar{
                    width:40px ;
                    height:40px ;
                    overflow:hidden ;
                    display: inline-block ;
                img{
                     max-width:100% ;
                }
            }
                .user-info{
                    display:inline-block ;
                    margin: 0 10px ;
                    color: white ;
                    position:absolute ;
                    opacity:1 ;
                    transition: opacity 0.3s ease-in ;
                h5{
                    font-size:15px ;

                }
                p{
                    font-size:14px ;
                }
                #btn{
                    padding:5px 8px ;
                    position:absolute ;
                    right:0 ;
                    top:-7px ;
                }
            }
        }
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
        }
        .main-menu{
            margin: 5px 0;
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

`;