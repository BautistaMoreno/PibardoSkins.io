import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import arma15 from '../SKINS/arma15.png';
import arma11 from '../SKINS/arma11.png';
import arma18 from "../SKINS/skin18.png";
import arma2 from "../SKINS/arma2.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500 
  };

  return (
    <div className="supercontainer">
      <Slider {...settings}>
        <div className="slider-section">
          <img src={arma15} alt="arma 15"/>
        </div>
        <div className="slider-section">
          <img src={arma11} alt="arma 11"/>
        </div>
        <div className="slider-section">
          <img src={arma18} alt="arma 18"/>
        </div>
        <div className="slider-section">
          <img src={arma2} alt="arma 2"/>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
