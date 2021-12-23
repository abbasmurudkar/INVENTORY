import React from 'react'
import {  Icon } from 'rsuite';
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
                               <Icon icon={Nav? Nav.icon : "logo"}/>{Nav.text}
                               {console.log(Nav)}
                           </div>
                       )
                   })
                }
            </div>
        </Nav>
    )
}

export default Navbar

const Nav = styled.div`
display: flex;
flex-direction: row;
text-align: center;
border: 2px solid red; 
color: white;
justify-content: space-between;
align-items: center;
padding: 5px 29px;
.Nav_Logo{
border: 2px solid grey;
}
.Nav_Navigation{
display: flex;
justify-content: space-around;
border: 2px solid green;

}
`;