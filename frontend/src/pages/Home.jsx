import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap'
import SearchBar from '../shared/SearchBar'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'
import Subtitle from '../shared/Subtitle'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import Testimonials from '../components/Testimonials/Testimonials'
import MasonryImagesGallary from '../components/image-gallary/MasonryImagesGallary'
import Newsletters from '../shared/Newsletters'

function Home() {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know Before You Go'} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>Traveling opens the door to creating <span className="highlight">memories</span></h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quam sunt veniam obcaecati
                  repellendus alias veritatis, pariatur a reprehenderit earum maxime accusamus adipisci iste
                  asperiores? Minus accusamus itaque laboriosam dolores?</p>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero_img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero_img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero_img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
          </Row>
          <SearchBar />
        </Container>
      </section>
      {/* ========== hero section starts ============*/}

      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="service_subtitle">What we serve</h5>
              <h2 className="service_title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ========== featured tour section start============== */}

      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={"Explore "} />
              <h2 className="featured__tour-title">Our freatured tour</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* ========== featured tour section end============== */}
      {/* ========== experience section start============== */}
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Expericance'} />
              <h2>With our all expericance <br />we will serve you</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Iusto omnis laudantium delectus ullam consectetur totam voluptatibus itaque nostrum numquam. Corrupti.</p>
            </div>
            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k</span>
                <h6>Successfull trip</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Years experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      {/* ========== experience section end============== */}
      {/* ========== gallary section start============== */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallary'} />
              <h2 className="gallary__title">
                Visit our customer tour gallary
              </h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallary />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========== gallary section end============== */}
      {/* ========== testimonials section start============== */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'} />
              <h2 className="testimonial__title">
                What our fans say about us
              </h2>
            </Col>
            <Col lg='12'>
              <Testimonials/>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========== testimonials section end============== */}
      <Newsletters/>

    </>
  )
}

export default Home