import React, {useState} from 'react'
import '../styles/login.css'
import { Container, Row, Col, Button, Form, FormGroup} from 'reactstrap'
import {Link} from 'react-router-dom'
import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'


const Login = () => {

  const [credentials, setCredentials] = useState({
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
                  <img src={loginImg} alt="" />

                </div>

                <div className="login__form">
                  <div className="user">
                    <img src={userIcon} alt="" />
                  </div>
                  <h2>Login</h2>
                  <Form onSubmit={handleClick}>
                    <FormGroup>
                      <input type="email" placeholder='Email' required name="" id="email" onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <input type="password" placeholder='Password' required name="" id="password" onChange={handleChange} />
                    </FormGroup>
                    <Button className='brn secondary__btn auth_btn' type='submit'>Login</Button>
                    <p>Don't have account? <Link to='/register  '>Create account</Link></p>
                  </Form>
                </div>

              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login