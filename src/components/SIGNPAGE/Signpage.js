import React, { useState } from 'react'
import { Button, Col, Container, Grid, Icon, Input, InputGroup, Panel, Row } from 'rsuite'
import styled from 'styled-components'

function Signpage() {
    const [Users, setUsers] = useState("")
    const [Password, setPassword] = useState("")
    const [show_hide , setshow_hide] = useState(false)
    const OnuserChange = (value)=>{
        setUsers(value)
        console.log(value)
    }
    const OnpasswordChange = (value) =>{
        setPassword(value)
        console.log(value)
    }
    const Show_Hide = () =>{
        setshow_hide(!show_hide)
        console.log(show_hide)
    }
  return (
    <Container className=''>
        <MainContainer>
        <Grid>
            <Row>
                <Col xs={24} md={12} >
                    <Panel className=''>
                        <div className='text-center '>
                            <h2>Welcome To BROOZ</h2>
                            <p>Progressive Platform For Investment</p>
                        </div>
                        <div className='mt-3 '>
                            <div className='mt-3 '>
                                <label htmlFor='user'>USERNAME:</label>
                                <div>
                                <InputGroup>
                                <Input type='text' value={Users} onChange={OnuserChange} id="user"/>
                                <InputGroup.Button>
                                <Icon icon="user"/>
                                </InputGroup.Button>
                                </InputGroup>
                                </div>
                                <label htmlFor='password'>PASSWORD:</label>
                                <InputGroup>
                                <Input type={show_hide?"text":"password"} value={Password} onChange={OnpasswordChange} id="password"/>
                                <InputGroup.Button onClick={Show_Hide}>
                                <Icon icon={show_hide?"eye":"eye-slash"}></Icon>
                                </InputGroup.Button>
                                </InputGroup>
                                <Button type="submit" className='mt-3' color="red">Submit</Button>
                            </div>
                            <div className='mt-3 '>
                                <Button block type="submit" color='blue'>
                                    <Icon  size='lg' icon="facebook"/> Login with Facebook
                                </Button>
                                <Button block type="submit" color='green'> 
                                    <Icon size='lg' icon="google"/> Login with Google
                                </Button>
                                <Button block type="submit">
                                    <Icon  size='lg' icon="github"/> Login with Github
                                </Button>
                            </div>
                        </div>
                    </Panel>
                </Col>
            </Row>
        </Grid>
        <div>
            <h1> CAROUSEL</h1>
        </div>
        </MainContainer>
    </Container>
  )
}

export default Signpage

const MainContainer = styled.div`
display: flex;
border: 2px solid;
flex-direction: row;
justify-content: space-around;
align-items: center;
height: 100vh;

`;