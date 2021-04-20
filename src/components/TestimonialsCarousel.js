import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import portfolio1 from "../portfolio-background-1.jpeg";
import portfolio2 from "../portfolio-background-2.jpg";
import portfolio3 from "../portfolio-background-3.jpeg";
import portfolio4 from "../portfolio-background-4.jpeg";

const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <img src={portfolio1} alt='' />
        <div className='mycarousel'>
          <h1>mathi1</h1>
          <p>sample text 1</p>
        </div>
      </>
      <>
        <img src={portfolio2} alt='' />
        <div className='mycarousel'>
          <h1>mathi2</h1>
          <p>sample text 2</p>
        </div>
      </>
      <>
        <img src={portfolio3} alt='' />
        <div className='mycarousel'>
          <h1>mathi3</h1>
          <p>sample text 3</p>
        </div>
      </>
      <>
        <img src={portfolio4} alt='' />
        <div className='mycarousel'>
          <h1>mathi4</h1>
          <p>sample text 4</p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
