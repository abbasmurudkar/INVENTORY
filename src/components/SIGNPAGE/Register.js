import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Form, FormGroup, Grid, Icon, Input, InputGroup, Panel, Row } from 'rsuite'
import styled from 'styled-components'
import CarouselSlider from './Carousel'
import { MainContainer } from './Signpage'
import EmailIcon from '@rsuite/icons/Email';
import ProgressLine from 'rsuite/lib/Progress/ProgressLine'
import Example from './Example'

function Register() {
  const [Users, setUsers] = useState("")
  const [Password, setPassword] = useState("")
  const [Email, setEmail] = useState("")
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
  const OnEmailChange = (value) => {
    setEmail(value)

  }

  return (
    <Registration>
      <Grid className=' w-100 h-100'>
        <Row className='h-100' >
          <Col xs={24} md={14} className="columns h-100">
          <Panel className='panel2'>
              <div><CarouselSlider /></div>
            </Panel>
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
                                        <Input type={show_hide ? "text" : "password"} value={Password} onChange={OnpasswordChange} id="password"/>
                                        <InputGroup.Button onClick={Show_Hide}>
                                            <Icon icon={show_hide ? "eye" : "eye-slash"}></Icon>
                                        </InputGroup.Button>
                                    </InputGroup>
                                    </div>
                                    <Button style={{background:"transparent",color:"#a8fefe",border:"2px solid #a8fefe", width:"25%"}} type="submit" className='mt-5' size='lg' color="red">Submit</Button>
                                    <p className='sign-with'>Sign up with</p>
                                </div>
                                <div className='mt-3 '>
                                    <Button block type="submit" size='lg' color='blue' required>
                                        <Icon size='lg' icon="facebook" /> Login with Facebook
                                    </Button>
                                    <Button className='google' block type="submit" size='lg'>
                                        <Icon size='lg' icon="google" /> Login with Google
                                    </Button>
                                    <Button className='github' block size='lg' type="submit">
                                        <Icon size='lg' icon="github" /> Login with Github
                                    </Button>
                                    <p className='mt-5 text-center'>Create Your BROOZ Account Now?<span className='text-blue cursor-pointer'><Link to="/Register">Register Now</Link></span></p>
                                </div>
                        </Panel>
          </Col>
        </Row>
      </Grid>
    </Registration>
  );
}

export default Register

const Registration = styled(MainContainer)`
.panel{
  left:0px ;
  position: relative ;
margin-right: 60px ;
}

`