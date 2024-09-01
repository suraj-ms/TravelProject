import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay:true,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    dots: true,
                    infinite: true,
                },
            },
            {
                breakpoint:572,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ]
      };

    return (
        <Slider  {...settings}>
            <div className="testimonials py-4 px-3">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quibusdam quidem asperiores,
                    libero quisquam quia possimus at consectetur accusamus quas laborum cupiditate
                    sint? Eos ad aperiam inventore eaque doloribus nulla.
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava01} className='w-25 h-25 rounded-2' alt="Testimonial 1" />
                    <div>
                        <h5 className="mb-0 mt-3">John Doe</h5>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonials py-4 px-3">
                <p>
                    Another testimonial content here. Praesentium veniam tempora, commodi distinctio aspernatur
                    maiores libero quia possimus at consectetur accusamus quas laborum cupiditate sint.
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className='w-25 h-25 rounded-2' alt="Testimonial 2" />
                    <div>
                        <h5 className="mb-0 mt-3">Jane Doe</h5>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonials py-4 px-3">
                <p>
                    A third testimonial goes here. Amet consectetur adipisicing elit. Eos ad aperiam inventore
                    eaque doloribus nulla.
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava03} className='w-25 h-25 rounded-2' alt="Testimonial 3" />
                    <div>
                        <h5 className="mb-0 mt-3">Sam Smith</h5>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonials py-4 px-3">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quibusdam quidem asperiores,
                    libero quisquam quia possimus at consectetur accusamus quas laborum cupiditate
                    sint? Eos ad aperiam inventore eaque doloribus nulla.
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava01} className='w-25 h-25 rounded-2' alt="Testimonial 1" />
                    <div>
                        <h5 className="mb-0 mt-3">John Doe</h5>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonials py-4 px-3">
                <p>
                    Another testimonial content here. Praesentium veniam tempora, commodi distinctio aspernatur
                    maiores libero quia possimus at consectetur accusamus quas laborum cupiditate sint.
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className='w-25 h-25 rounded-2' alt="Testimonial 2" />
                    <div>
                        <h5 className="mb-0 mt-3">Jane Doe</h5>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonials py-4 px-3">
                <p>
                    A third testimonial goes here. Amet consectetur adipisicing elit. Eos ad aperiam inventore
                    eaque doloribus nulla.
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava03} className='w-25 h-25 rounded-2' alt="Testimonial 3" />
                    <div>
                        <h5 className="mb-0 mt-3">Sam Smith</h5>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Testimonials
