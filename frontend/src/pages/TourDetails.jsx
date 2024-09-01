import React, { useRef, useState } from 'react'
import '../shared/tour-details.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tours'
import calculateRating from '../utils/avgRating'
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'
import Newsletters from '../shared/Newsletters'
function TourDetails() {

  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating] = useState(null)
  const { id } = useParams()
  const tour = tourData.find(tour => tour.id == id)

  const { title, photo, price, maxGroupSize, desc, address, reviews, city, distance, featured } = tour
  const { totleRating, avgRating } = calculateRating(reviews)
  const option = { day: 'numeric', month: 'long', year: 'numeric' }

  const submitHeader = e => {
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value
    alert(`${reviewText}, ${tourRating}`)
  }


  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <div className="tour__content">
                <img src={photo} alt="" />
                <div className="tour__info">
                  <h2>{title}</h2>
                  <div className='d-flex align-items-center gap-5'>

                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i class="ri-star-fill" style={{ 'color': 'var(--secondary-color)' }}></i>{avgRating == 0 ? null : avgRating}
                      {totleRating == 0 ? 'Not rated' : <span>({reviews?.length})</span>}
                    </span>
                    <span>
                      <i class="ri-map-pin-fill"></i>{address}
                    </span>
                  </div>
                  <div className="tour__extra-details">
                    <span><i class="ri-map-pin-2-line"></i>{city}</span>
                    <span><i class="ri-money-rupee-circle-line"></i>&#8377;{price}/per person</span>
                    <span><i class="ri-pin-distance-line"></i>{distance} k/m</span>
                    <span><i class="ri-group-2-line"></i>{maxGroupSize} people</span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
                {/* tour review section start */}
                <div className="tour__review mt-4">
                  <h4>Review ({reviews?.length} reviews)</h4>
                  <Form onSubmit={submitHeader}>
                    <div className='rating__group d-flex align-items-center gap-3 mb-4'>
                      <span onClick={() => setTourRating(1)}>1<i class="ri-star-fill"></i></span>
                      <span onClick={() => setTourRating(2)}>2<i class="ri-star-fill"></i></span>
                      <span onClick={() => setTourRating(3)}>3<i class="ri-star-fill"></i></span>
                      <span onClick={() => setTourRating(4)}>4<i class="ri-star-fill"></i></span>
                      <span onClick={() => setTourRating(5)}>5<i class="ri-star-fill"></i></span>
                    </div>
                    <div className="review__input">
                      <input type="text" ref={reviewMsgRef} placeholder='Share your thoughts' required />
                      <button className="btn primary__btn text-white" type='submit'>
                        Submit
                      </button>
                    </div>
                  </Form>
                  <ListGroup className='user__reviews'>
                    {
                      reviews?.map(reviews => (
                        <div className="review__item">
                          <img src={avatar} alt="" />
                          <div className="w-100">
                            <div className='d-flex align-items-center justify-content-between'>
                              <div>
                                <h5>Mamu</h5>
                                <p>{new Date('01-18-2023').toLocaleDateString('en-US', option)}</p>
                              </div>
                              <span className='d-flex align-items-center'>
                                5<i class="ri-star-fill"></i>
                              </span>
                            </div>
                            <h6>Amazing Tour</h6>
                          </div>
                        </div>
                      ))
                    }

                  </ListGroup>
                </div>
                {/* tour review section end */}
              </div>
            </Col>
            <Col lg='4'>
              <Booking tour={tour} avgRating= {avgRating}/>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletters/>
    </>
  )
}

export default TourDetails