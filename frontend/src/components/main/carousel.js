import React from "react";
import { Carousel } from 'react-bootstrap'
import './carousel.scss'
import img1 from "./img/home_1.jpeg"
import img2 from "./img/home_4.jpeg"
import img3 from "./img/home_5.jpeg"


const CarouselContainer = () => {
    return ( 
      // <div className="carousel-container">
        <Carousel controls={false} wrap={true}>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="top-left">First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    // </div>
    )
}

export default CarouselContainer; 

