import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const quick__links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
]

const quick__links2 = [
  {
    path: '/gallary',
    display: 'Gallary'
  },
  {
    path: '/login',
    display: 'Login'
  },
  {
    path: '/register',
    display: 'Register'
  },
]


function Footer() {

  const year = new Date().getFullYear()

  return (
    <footer>
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img src={logo} alt="" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora nam tempore recusandae
                beatae dolor dolores libero quam dolore nesciunt doloribus?
              </p>
              <div className="social_links d-flex align-items-center gap-4">
                <span>
                  <Link to="#"><i class="ri-youtube-line"></i></Link>
                </span>
                <span>
                  <Link to="#"><i class="ri-instagram-line"></i></Link>
                </span>
                <span>
                  <Link to="#"><i class="ri-facebook-circle-line"></i></Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className='footer_link-title'>Discovery</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__links.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='footer_link-title'>Quick Links</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__links2.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg='3'>

            <h5 className='footer_link-title'>Contact</h5>
            <ListGroup className='footer__quick-links'>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span>
                      <i class="ri-map-pin-line"></i>
                      Address:
                    </span>
                  </h6>
                  <p className='mb-0'> Whitfield, Bangalore </p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span>
                    <i class="ri-mail-line"></i>
                      Email:
                    </span>
                  </h6>
                  <p className='mb-0'> surajmshivakumar@gmail.com </p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span>
                    <i class="ri-phone-line"></i>
                      Phone:
                    </span>
                  </h6>
                  <p className='mb-0'> +91 000000000 </p>
                </ListGroupItem>

            </ListGroup>

          </Col>

          <Col lg='12' className='text-center pt-5'>
              <p className="copyright">Copyright {year}, design and develop by Suraj MS. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer