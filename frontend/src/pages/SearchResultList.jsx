import React, { useState } from 'react'
import CommonSection from '../shared/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import { useLocation } from 'react-router-dom'
import TourCard from '../shared/TourCard'
import NewsLetters from '../shared/Newsletters'

function SearchResultList() {
  const location = useLocation()
  const [data] = useState(location.state)
  console.log(`data ${data}`);
  
  return (
    <>
      <CommonSection title={'Tour Search Result'}/>
      <section>
        <Container>
          <Row>
            {
              data.length == 0 ? <h4 className='text-center'>No Tour Found</h4>:data?.map(tour=>
                <Col lg='3' className='mb-4' key={tour._id}><TourCard tour={tour}/></Col>
              )
            }
          </Row>
        </Container>
      </section>
      <NewsLetters/>
    </>
  )
}

export default SearchResultList