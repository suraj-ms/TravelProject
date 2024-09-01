import React, { useState } from 'react';
import './booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Booking = ({ tour, avgRating }) => {

    const { title, photo, price, maxGroupSize, desc, address, reviews, city, distance, featured } = tour;

    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        userId: '01',
        userEmail: 'example@gmail.com',
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: ''
    });

    const serviceFee = 1000
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee)

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    }

    const handleClick = (e) => {
        e.preventDefault(); 
        navigate('/thank-you')
    }

    return (
        <div className="booking">
            <div className="booking__top d-flex align-items-center justify-content-between">
                <h3>&#8377;{price} <span>/per person</span></h3>
                <span className="tour__rating d-flex align-items-center">
                    <i className="ri-star-fill"></i>{avgRating === 0 ? null : avgRating} ({reviews?.length})
                </span>
            </div>
            {/* =========booking form============== */}
            <div className="booking__form">
                <h5 className='mt-4'>Information</h5>
                <Form className='booking__info-form'>
                    <FormGroup>
                        <input 
                            type="text" 
                            placeholder='Full Name' 
                            id='fullName' 
                            required 
                            onChange={handleChange} 
                        />
                    </FormGroup>
                    <FormGroup>
                        <input 
                            type="number" 
                            placeholder='Phone' 
                            id='phone' 
                            required 
                            onChange={handleChange} 
                        />
                    </FormGroup>
                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input 
                            type="date" 
                            id='bookAt' 
                            required 
                            onChange={handleChange} 
                        />
                        <input 
                            type="number" 
                            placeholder='Guest' 
                            id='guestSize' 
                            required 
                            onChange={handleChange} 
                        />
                    </FormGroup>
                </Form>
            </div>
            {/* =========booking form end============== */}
            {/* =========booking bottom============== */}
            <div className="booking__bottom">
                <ListGroup className='list border-0 px-0'>
                    <ListGroupItem className='d-flex align-items-center justify-content-between'>
                        <h5>&#8377;{price} <i className="ri-close-line"></i> 1 person</h5>
                        <span>&#8377;{price}</span>
                    </ListGroupItem>
                </ListGroup>
                <ListGroup className='list border-0 px-0'>
                    <ListGroupItem className='d-flex align-items-center justify-content-between'>
                        <h5>Service Charges</h5>
                        <span>&#8377;{serviceFee}</span>
                    </ListGroupItem>
                </ListGroup>
                <ListGroup className='list border-0 px-0 total'>
                    <ListGroupItem className='d-flex align-items-center justify-content-between'>
                        <h5>Total Price</h5>
                        <span>&#8377;{totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>
                <Button 
                    className="btn primary__btn w-100 mt-4" 
                    onClick={handleClick}
                >
                    Book Now
                </Button>
            </div>
            {/* =========booking bottom end============== */}
        </div>
    );
}

export default Booking;
