import React from 'react'
import { Icon } from 'rsuite'
import styled from 'styled-components'
import { useProfile } from '../../context/Profile.context'
import ProfileAvatar from './ProfileAvatar'

const DashboardNav = () => {
  const{profile} = useProfile()
  return (
    <>
    <Dashboard>
      <div className='menus'>
        <Icon className="menus-items"icon="shopping-cart"/>
        <Icon className="menus-items"icon="bookmark-o"/>
        <Icon className="menus-items"icon="bell-o"/>
         <ProfileAvatar  src={profile.Avatar} name={profile.Name} className="font-bolder menus-items2"/>
         <Icon className="menus-items1" icon="arrow-down"/>
      </div>

      </Dashboard>
      {/* <hr style={{margin:"0",border:"1px solid grey"}}/> */}
      </>
  )
}

export default DashboardNav

const Dashboard = styled.div`
/* border: 2px solid red ; */

display:flex ;
justify-content:flex-end;
padding:20px 5px ;
width:100%;
box-shadow:2px 2px 10px 2px grey ;
border-radius:10px ;
.menus{
  /* border: 2px solid red ; */
  display:flex ;
  justify-content:center ;
  align-items:center ;
  width:250px ;
  .menus-items,.menus-items1,.menus-items2{
    padding:0px 20px ;
    font-size:20px ;
    cursor: pointer;
  }
  .menus-items1{
    font-size:12px ;
    padding:0px 10px ;
  }
  .menus-items2{
    width:40px ;
    height:40px ;
    max-width: 200%;
    max-height: 200%;
  }
}
`;