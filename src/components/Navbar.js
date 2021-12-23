import React from 'react'
import {  Button, Icon } from 'rsuite';
import styled from 'styled-components'

function Navbar() {
    const NavMenu = [
        {
           text: "Home",
           icon: "home",                 
        },
        {
            text: "About",
            icon:""
        },
        {
            text: "Contact",
            icon:"user"
        },
        {
            text: "Support",
            icon:"users"
        }
    ]
    return (
        <Nav>
            <div className='Nav_Logo'>
                <h2>BITCOIN</h2>
            </div>
            <div className='Nav_Navigation'>
                   {NavMenu.map((Nav , Key)=> {
                       return(
                           <div className='Nav_Menu' key={Key}>
                               <Icon id="icon" icon={Nav? Nav.icon : "logo"}/> <span>{Nav.text}</span>
                           </div>
                       )})}
                       <Button color="red">SignIn</Button>
            </div>
        </Nav>
    )
}
export default Navbar
const Nav = styled.div`
display: flex;
flex-direction: row;
text-align: center;
/* border: 2px solid red;*/
color: white;
justify-content: space-between;
align-items: center;
padding: 15px 29px;
.Nav_Logo{
/* border: 2px solid grey; */
}
.Nav_Navigation{
display: flex;
justify-content: space-around;
/* border: 2px solid green; */
    .Nav_Menu{
        display: block;
        text-align: center;
        cursor: pointer;
        /* border: 2px solid; */
        padding: 6px 10px;
        margin-right: 8px ;
        #icon{
            font-size: 16px;
        }
        span{
            font-size:18px;
        }
    }
}
`;