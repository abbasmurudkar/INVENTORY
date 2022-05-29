import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Alert, Button, Col, Grid, Icon, Input, InputGroup, Panel, Row } from 'rsuite'
import styled from 'styled-components'
import CarouselSlider from './Carousel'
import { MainContainer } from './Signpage'
import EmailFill from '@rsuite/icons/EmailFill'
import { auth} from '../../misc/Firebase'
import { useHistory } from 'react-router-dom';
function Register({Users, OnusernameChange}) {
  const [Password, setPassword] = useState("")
  const [Email, setEmail] = useState(" ")
  const [show_hide, setshow_hide] = useState(false)
  const history = useHistory();

  const OnpasswordChange = (value) => {
    setPassword(value)
  }
  const OnEmailChange = (value) => {
    setEmail(value)
  }
  const Show_Hide = () => {
    setshow_hide(!show_hide)
  }
  const OnRegister = async (e) => {
    e.preventDefault()
    try {
       await auth.createUserWithEmailAndPassword(Email, Password).then((auth) => {
        if (auth) {
          history.push("/signin")
        }})
        Alert.success("REGISTER SUCCESSFULL PROCEED TO LOGIN", 4000)
    }
    catch (err) {
      Alert.info(err.message, 4000)
    }}
  return (
    <Registration>
      <Grid className=' w-100 h-100'>
        <Row className='h-100' >
          <Col xs={24} md={14} className="columns h-100">
            <Panel className='panel2'>
              <div><CarouselSlider /></div>
            </Panel>
            <div className='main-div'>
              <Panel className='panel'>
                <div className='text-center '>
                  <h2>BROOZ REGISTRATION</h2>
                  <p>Register Your Self For Accessing Dashboard</p>
                </div>
                <div className='mt-5 '>
                  <div className='Input-Group mt-3'>
                    <label htmlFor='User-Name'>NAME:</label>

                    <InputGroup inside>
                      <Input type='text' value={Users} onChange={OnusernameChange} id="User-Name" />
                      <InputGroup.Button>
                        <Icon icon="user" />
                      </InputGroup.Button>
                    </InputGroup>
                  </div>
                  <div className='Input-Group mt-3'>
                    <label htmlFor='User-Email'>EMAIL:</label>
                    <InputGroup inside>
                      <Input type='text' value={Email} onChange={OnEmailChange} id="User-Email" />
                      <InputGroup.Button>
                        <EmailFill />
                      </InputGroup.Button>
                    </InputGroup>
                  </div>
                  <div className='Input-Group mt-3'>
                    <label htmlFor='password'>PASSWORD:</label>
                    <InputGroup inside>
                      <Input type={show_hide ? "text" : "password"} value={Password} onChange={OnpasswordChange} id="password" />
                      <InputGroup.Button onClick={Show_Hide}>
                        <Icon icon={show_hide ? "eye" : "eye-slash"}></Icon>
                      </InputGroup.Button>
                    </InputGroup>
                  </div>
                  <Button onClick={OnRegister} style={{ background: "transparent", color: "#a8fefe", border: "2px solid #a8fefe", width: "25%" }} type="submit" className='mt-5' size='lg' color="red">Register</Button>
                </div>
                <div className='mt-3 '>
                  <p className='mt-5 text-center'>SignIn With Your Account After Registration?<span className='text-blue cursor-pointer'><Link to="/signin">SignIn Now</Link></span></p>
                </div>
              </Panel>
            </div>
          </Col>
        </Row>
      </Grid>
    </Registration >
  );
}

export default Register

const Registration = styled(MainContainer)`
.panel{
  left:0px ;
  position: relative ;
}
`