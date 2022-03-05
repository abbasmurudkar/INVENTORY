import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Grid, Icon, Input, InputGroup, Panel, Row } from 'rsuite'
import styled from 'styled-components'
import CarouselSlider from './Carousel'
import Carousel from './Carousel'

function Signpage() {
    const [Users, setUsers] = useState("")
    const [Password, setPassword] = useState("")
    const [show_hide, setshow_hide] = useState(false)
    const OnuserChange = (value) => {
        setUsers(value)
        console.log(value)
    }
    const OnpasswordChange = (value) => {
        setPassword(value)
        console.log(value)
    }
    const Show_Hide = () => {
        setshow_hide(!show_hide)
        console.log(show_hide)
    }
    return (
        <MainContainer>
            <Grid className=' w-100 h-100'>
                <Row className='h-100' >
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
                                            <Input type='text' value={Users} onChange={OnuserChange} id="user" />
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
                                    <Button type="submit" className='mt-4' size='lg' color="red">Submit</Button>
                                </div>
                                <div className='mt-3 '>
                                    <Button block type="submit" size='lg' color='blue'>
                                        <Icon size='lg' icon="facebook" /> Login with Facebook
                                    </Button>
                                    <Button block type="submit" size='lg' color='green'>
                                        <Icon size='lg' icon="google" /> Login with Google
                                    </Button>
                                    <Button block size='lg' type="submit">
                                        <Icon size='lg' icon="github" /> Login with Github
                                    </Button>
                                    <p className='mt-4 text-center'>Create Your BROOZ Account Now?<span className='text-blue cursor-pointer'><Link to="/Register">Register Now</Link></span></p>
                                </div>
                        </Panel>
                        <Panel className='panel2'>
                            <CarouselSlider/>       
                        </Panel>
                    </Col>
                </Row>
            </Grid>
                        
        </MainContainer>
    )
}

export default Signpage

const MainContainer = styled.div`
justify-content: space-evenly;
user-select:none ;
.columns{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.rs-panel-body{
    padding:0 ;
}
.panel{
    width: 500px;
    position:relative;
    /* border:2px solid red ; */
    padding:20px;
    left:60px;
    height:600px ;
}
`;