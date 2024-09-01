import React from 'react'
import './newsletters.css'

import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletters = () => {
    return (
        <section className='newsletter'>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="newsletter__content">
                            <h2>Subscribe now to get useful traveling information.</h2>
                            <div className="newsletter__inputs">
                                <input type="email" placeholder='Enter email' name="" id="" />
                                <button className="btn newsletter_btn">
                                    Subscribe
                                </button>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur dolorum
                                repudiandae qui consequatur earum consectetur dignissimos magni, accusantium natus corporis.</p>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="newsletter__img">
                            <img src={maleTourist} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Newsletters