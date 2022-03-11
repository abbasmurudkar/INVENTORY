import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Alert, Button, Col, Grid, Icon, Input, InputGroup, Panel, Row } from 'rsuite'
import styled from 'styled-components'
import { auth, db } from '../../misc/Firebase'
import CarouselSlider from './Carousel'
import firebase from 'firebase/app'

function Signpage() {
    const [Email, setUsers] = useState("")
    const [Password, setPassword] = useState("")
    const [show_hide, setshow_hide] = useState(false)
    ////-------------SIGINWITH PROVIDER--------------------////
    const SigInWithProvider = async (provider) => {
        try {
            const { additionalUserInfo, user } = await auth.signInWithPopup(provider);
            console.log(additionalUserInfo)
            if (additionalUserInfo.isNewUser) {
                await db.ref(`/profiles/${user.uid}`).set({
                    Name: user.displayName,
                    CreatedAt: firebase.database.ServerValue.TIMESTAMP,
                    Provider: additionalUserInfo.providerId,
                    Avatar: user.photoURL
                })}
            Alert.success("LOGIN SUCCESSFULL WELCOME TO BROOZ", 4000)
        }
        catch (err) {
            Alert.info(err.message, 4000)
        }
    }
    //////////////////////////////////////////////////////////////

    /////----------------- PROVIDERS -------------------/////////
    const onFacebookLogin = () => {
        SigInWithProvider(new firebase.auth.FacebookAuthProvider())
    }
    const onGoogleLogin = () => {
        SigInWithProvider(new firebase.auth.GoogleAuthProvider())
    }
    const onGithubLogin = () => {
        SigInWithProvider(new firebase.auth.GithubAuthProvider())
    }
    //////////////////////////////////////////////////////////////

    ////---------------- STATE VALUE ------------------------////
    const OnuserChange = (value) => {
        setUsers(value)
    }
    const OnpasswordChange = (value) => {
        setPassword(value)
    }
    const Show_Hide = () => {
        setshow_hide(!show_hide)
        console.log(show_hide)
    }
    // ///////////////////////////////////////////////////////////

    ////--------- SIGIN METHOD WITH SUBMIT BUTTON ------------///
    const OnSignIN = async (e) => {
        e.preventDefault()
        try {
            const { additionalUserInfo, user } = await auth.signInWithEmailAndPassword(Email,Password);
            console.log(additionalUserInfo)
            if (additionalUserInfo.isNewUser===false) {
                await db.ref(`/profiles/${user.uid}`).set({
                    Name: user.email,
                    CreatedAt: firebase.database.ServerValue.TIMESTAMP,
                    Provider: additionalUserInfo.providerId,
                    Avatar: user.photoURL
                })
            }
            Alert.success("LOGIN SUCCESSFULL WELCOME TO BROOZ", 4000)
        }
        catch (err) {
            Alert.info(err.message, 4000)
        }
    }
    //////////////////////////////////////////////////////////////

    return (
        <MainContainer className='h-100 w-100'>
            <Grid className='w-100 h-100'>
                <Row className='w-100 h-100' >
                    <Col xs={24} md={14} className="columns h-100">
                        <Panel className='panel'>
                            <div className='text-center '>
                                <h2>Welcome To BROOZ</h2>
                                <p>Progressive Platform For Investment</p>
                            </div>
                            <div className='mt-5 '>
                                <div className='Input-Group mt-3'>
                                    <label htmlFor='user'>USERNAME:</label>
                                    <InputGroup>
                                        <Input type='text' value={Email} onChange={OnuserChange} id="user" />
                                        <InputGroup.Button>
                                            <Icon icon="user" />
                                        </InputGroup.Button>
                                    </InputGroup>
                                </div>
                                <div className='Input-Group mt-3'>
                                    <label htmlFor='password'>PASSWORD:</label>
                                    <InputGroup>
                                        <Input type={show_hide ? "text" : "password"} value={Password} onChange={OnpasswordChange} id="password" />
                                        <InputGroup.Button onClick={Show_Hide}>
                                            <Icon icon={show_hide ? "eye" : "eye-slash"}></Icon>
                                        </InputGroup.Button>
                                    </InputGroup>
                                </div>
                                <Button onClick={OnSignIN} style={{ background: "transparent", color: "#a8fefe", border: "2px solid #a8fefe", width: "25%" }} type="submit" className='mt-5' size='lg' color="red">Submit</Button>
                                <p className='sign-with'>Sign up with</p>
                            </div>
                            <div className='mt-3 '>
                                <Button onClick={onFacebookLogin} block type="submit" size='lg' color='blue' required>
                                    <Icon size='lg' icon="facebook" /> Login with Facebook
                                </Button>
                                <Button onClick={onGoogleLogin} className='google' block type="submit" size='lg'>
                                    <Icon size='lg' icon="google" /> Login with Google
                                </Button>
                                <Button onClick={onGithubLogin} className='github' block size='lg' type="submit">
                                    <Icon size='lg' icon="github" /> Login with Github
                                </Button>
                                <p className='mt-5 text-center'>Create Your BROOZ Account Now?<span className='text-blue cursor-pointer'><Link to="/Register">Register Now</Link></span></p>
                            </div>
                        </Panel>

                        <Panel className='panel2 '>
                            <CarouselSlider />
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        </MainContainer>
    )
}
export default Signpage

export const MainContainer = styled.div`
user-select:none ;
background-color: #070a2a;
color:white ;
.columns{
    display: flex;
    justify-content: space-around; //changes would be done and it would be change to space-around for responsive
    align-items: center;
    /* border: 2px solid red ; */
    width: 100%;
}
.rs-panel-body{
    padding:0 ;
}
.panel{
    width: 500px;
    position:relative;
    padding:40px;
    /* left:60px; */
    right:0 ;
    height:650px ;
    /* box-shadow:5px 5px 15px #5fb9ba ; */
    /* border:2px solid green ; */
}
.github{
    background-color:#00d09c ;
    color:white ;
}

.google{
    background-color:white;
}
.sign-with{
  margin-top: 20px; 
  margin-left: 10px;
  text-align: center;
  font-size: 18px;
  color: #a8fffe;
  font-weight: 540;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
} 
.sign-with::before{
    content: "";
    display: inline-block;
    height: 3px;
    width: 27%;
    background-color: #2a405b;
    position: relative;
    vertical-align: middle;
    left: -20px;
}
.sign-with::after{
    content: "";
    display: inline-block; 
    height: 3px;
    width: 27%;
    background-color: #2a405b;
    vertical-align: middle;
    position: relative;
    left: 30px;
}
`;