import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Icon } from 'rsuite';
import styled from 'styled-components';
import WEBSITE_LOGO from '../../../Assets/logo.png'

function Navbar({ title }) {
    const NavMenu = [
        {
            id: "1",
            text: "Home",
            icon: "home",
            url: "#home"
        },
        {
            id: "2",
            text: "About",
            icon: "adjust",
            url: "#About"
        },
        {
            id: "3",
            text: "Contact",
            icon: "address-book",
            url: "#Contact"
        },
        {
            id: "4",
            text: "Support",
            icon: "user",
            url: "#Support"
        }

    ]
    return (
        <Nav>
            {/* LOGO */}
            <div className='Nav_Logo'>
                <Link to="/">
                    <img src={WEBSITE_LOGO} alt="Loading" /><span>{title}</span>
                </Link>
            </div>

            {/* NAVIGATION MENU */}
            <div className='Nav_Navigation'>
                {NavMenu.map((Nav, Key) => {
                    return (
                        <div className='Nav_Menu' key={Key}>
                            <Icon id="icon" icon={Nav ? Nav.icon : "logo"} />
                            <span>{Nav.text}</span>
                        </div>
                    )
                })}

                <div className='Nav_btn'>
                    <Link to="/signin">
                        <Button color="orange">SignIn</Button>
                    </Link>
                    <Link to="/Register">
                        <Button color='orange'>Register</Button>
                    </Link>
                </div>
            </div>
        </Nav>
    )
}
export default Navbar
export const Nav = styled.div`
display: flex;
color: white;
justify-content: space-between; 
padding: 15px 29px; 
align-items: center;
background: #182552;
    position: fixed;
    z-index: 5;
    width: 100%;
    border-radius: 30px;
    box-shadow: 2px 2px 15px #e5a023;
    .Nav_Logo{
        user-select:none;
        cursor: pointer;
            a{
                text-decoration: none;
            }
            img{
                width: 60px;
                height: 60px;
            }
            span{ 
                font-size: 40px;
                position: relative;
                top: 10px;
                right: 5px;
                transition: 0.3s all ease-in-out;
                color: white;
            }
    &:hover span{
        color: #c4990c;
    }
}
.Nav_Navigation{
    display: flex;
    justify-content: space-around;
    padding: 10px 10px;
        .Nav_Menu{
            user-select:none;
            display: block;
            text-align: center;
            padding: 20px 10px;
            cursor: pointer;
            padding: 6px 10px;
            margin-right: 8px ;
            transition: 0.3s all ease-in-out;
                &:hover{
                color: #c4990c;
                transform: scale(1.1);
                }
        #icon{
            font-size: 16px;
        }
        span{
            font-size:18px;
            font-weight: 600;
        }
    }
    .Nav_btn{
        Button{
            cursor: pointer;
            margin-right: 5px;
            height: 32px;
            line-height: 0;
            background-color: transparent;
            border: 2px solid #c4990c;;
            color: #c4990c;
                &:hover{
                    color: white;
                    background-color: #c4990c;
                }
        }
    }
}
`;
