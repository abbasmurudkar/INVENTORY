import React from 'react'
import styled from 'styled-components'
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useProfile } from '../../context/Profile.context';
import EditableInput from './UserProfileComponet/EditableInput';
import { db } from '../../misc/Firebase';
import { Alert } from 'rsuite';
import AvatarUploadBtn from './UserProfileComponet/AvatarUploadBtn';

const UserProfile = () => {
  const {profile}= useProfile()
  const onSave = async (newData)=>{
    const UserNicknameref = db.ref(`/profiles/${profile.uid}`).child('Name');
    try{
      await UserNicknameref.set(newData)

      Alert.success('Nickname has been Updated', 4000)
    }
    catch(err){
      Alert.error(err.message,4000)
    }
  }
  return (
    <Container>
      <FadeIn>
        <Box>
        <h4>USERPROFILE FOR {profile.Name} </h4>
        <div className='w-100'>
        <EditableInput
        name = "nickname"
        initialValue={profile.Name}
        onSave={onSave}
        label={<h5 style={{fontSize:"18px",marginBottom:"6px",marginTop:"6px"}}>Nickname: </h5>}
        label2 = {<h5 style={{fontSize:"18px",marginBottom:"6px",marginTop:"6px"}}>Profile Avatar:</h5>}
        />
        </div>
        <AvatarUploadBtn/>
        </Box>
      </FadeIn>
    </Container>)
}

export default UserProfile

const Container = styled.div`
margin-top:120px;
height:650px ;
padding:20px ;
display:flex ;
justify-content:center ;
align-items:center ;
border:2px solid red ;
`;
const Box = styled.div`
height:500px ;
width:650px ;
display:flex ;
align-items:center ;
padding:60px;
padding-top:20px ;
flex-direction:column ;
box-shadow:1px 1px 4px 1px  grey ;
border-radius:10px ;
h4{
  width:100% ;
  text-align:center ;
  margin-bottom:20px ;
  border-bottom:2px solid black ;
}
`;