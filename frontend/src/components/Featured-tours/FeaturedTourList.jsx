import React from 'react'
import TourCard from '../../shared/TourCard'
import { Col } from 'reactstrap'
import useFetch from '../../hooks/userFetch'
import { BASE_URL } from '../../utils/config'

const FeaturedTourList = () => {

  const {data: featuredTours, loading, error} = useFetch(`${BASE_URL}/tour/search/getFeaturedTour`)

  console.log(featuredTours);
  

  return (
    <>
    {
      loading && <h4>Loding....</h4>
    }
    {
      error && <h4>{error}</h4>
    }
   {!loading && !error && featuredTours?.map(tour => (
        <Col lg ='3' className='mb-4' key={tour.id}>
            <TourCard tour={tour}/>
        </Col>
    ))}
    </>
  )
}

export default FeaturedTourList