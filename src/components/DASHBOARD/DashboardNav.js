import React from 'react'
import { Button, Icon } from 'rsuite'
import styled from 'styled-components'
import { useProfile } from '../../context/Profile.context'
import ProfileAvatar from './ProfileAvatar'

const DashboardNav = () => {
  const { profile } = useProfile()
  return (
    <Navs>

      <Dashboard>
        <div className='menus'>
          <div>
            <Icon className="menus-items" icon="shopping-cart" />
          </div>
          <div>
            <Icon className="menus-items" icon="bookmark-o" />
          </div>
          <div>
            <Icon className="menus-items" icon="bell-o" />
          </div>
          <div className='menus-items2'>
            <ProfileAvatar src={profile.Avatar} name={profile.Name} className="b font-bolder " />
            <div className='hide-show'>
              <p>{profile.email}</p>
              <p>user settings <Icon icon="user-o" /></p>
              <Button color='red'>Logout</Button>
            </div>
            <Icon className="menus-items1" icon="arrow-down" />
          </div>
        </div>
      </Dashboard>
    </Navs>
  )
}

export default DashboardNav

const Dashboard = styled.div`
display:flex ;
justify-content:flex-end;
padding:15px 5px ;
width:76%;
box-shadow:2px 2px 10px 2px grey ;
border-radius:10px ;
position:fixed ;
z-index:10 ;
background-color:white ;
.menus{
  display:flex ;
  justify-content:space-around ;
  align-items:center ;
  width:300px ;
  /* border:2px solid red ; */
  .menus-items,.menus-items1,.menus-items2{
    padding:5px 12px ;
    margin-right:10px ;
    font-size:20px ;
    cursor: pointer;
    /* border:2px solid red ; */
  }
  .menus-items1{
    font-size:12px ;
    padding:0px 10px ;
    transition:0.3s all ease  ;
  }
  .menus-items2{
    .b{
      width:40px ;
      height:40px ;
      max-width: 200%;
      max-height: 200%;
    }
  &:hover .menus-items1{
  transform:rotate(180deg) ;
}
  }
}
.menus-items2:hover .hide-show{
  display:flex ;
}

`;
const Navs = styled.div`
.hide-show{
  position:absolute ;
  display:none ;
  padding:25px 10px ;
  justify-content:center ;
  flex-direction:column ;
  text-align:center ;
  z-index:1 ;
  top:77px ;
  right:5px ;
  border-radius:15px 3px 15px 3px;
  background-color:#eeeeee ;
  width:250px ;
  transition: opacity 0.3s all ease-in-out ;
  p{
    font-size:15px ;
    border-bottom:1px solid grey ;
    cursor: pointer;
  }
  p:nth-child(2){
    display:flex ;
    justify-content:space-between ;
  }
  button{
    margin-top:10px ;
  }
}
`;