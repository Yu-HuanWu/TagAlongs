import React from "react";
import { Carousel } from 'react-bootstrap'
import img1 from "./img/home1.jpeg"
import img2 from "./img/home2.jpeg"
import img3 from "./img/home3.jpeg"

const CarouselContainer = () => {
    return ( 
      <Carousel controls={false} fade={true}>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p></p>
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
    )
}

export default CarouselContainer; 