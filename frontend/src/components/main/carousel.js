import React from "react";
import { Carousel } from 'react-bootstrap'
import './carousel.scss'
import img1 from "./img/home_1.jpeg"
import img2 from "./img/home_2.jpeg"
import img3 from "./img/home_8.jpeg"
// import { Link } from "react-router-dom";


const CarouselContainer = () => {
    return ( 
      <div className="carousel-container">
        <Carousel controls={false} wrap={true}>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
          <div class="carousel-content_1">
            {/* <p>TEST</p> */}
          </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption>
          <div class="carousel-content_2">
            {/* <p>TEST</p> */}
          </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
          <div class="carousel-content_3">
            {/* <p>TEST</p> */}
           </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    )
}

export default CarouselContainer; 

