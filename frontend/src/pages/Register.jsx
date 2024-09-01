import React, {useState} from 'react'
import '../styles/login.css'
import { Container, Row, Col, Button, Form, FormGroup} from 'reactstrap'
import {Link} from 'react-router-dom'
import registerImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'


const Register = () => {

  const [credentials, setCredentials] = useState({
    userName:undefined,
   email:undefined,
   password:undefined,

});

  const handleChange = (e) => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
}

const handleClick = (e) => {
  e.preventDefault(); 
}


  return (
    <section>
      <Container>
        <Row>
          <Col lg = '8' className='m-auto'>
              <div className="login__container d-flex justify-content-between">
                <div className="login__img">
                  <img src={registerImg} alt="" />

                </div>

                <div className="login__form">
                  <div className="user">
                    <img src={userIcon} alt="" />
                  </div>
                  <h2>Register</h2>
                  <Form onSubmit={handleClick}>
                    <FormGroup>
                      <input type="text" placeholder='Username' required name="" id="username" onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <input type="email" placeholder='Email' required name="" id="email" onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <input type="password" placeholder='Password' required name="" id="password" onChange={handleChange} />
                    </FormGroup>
                    <Button className='brn secondary__btn auth_btn' type='submit'>Create Account</Button>
                    <p>Already have an account? <Link to='/login  '>Login</Link></p>
                  </Form>
                </div>

              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register