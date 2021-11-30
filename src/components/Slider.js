import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import Img1 from '../assets/slider.png'
import "react-alice-carousel/lib/alice-carousel.css";

const ImageCarousel = () => (
  <AliceCarousel>
    <img src={Img1} style={{width:'100%'}} className="yours-custom-class" />
    <img src={Img1} style={{width:'100%'}} className="yours-custom-class" />
    <img src={Img1} style={{width:'100%'}} className="yours-custom-class" />
    <img src={Img1} style={{width:'100%'}} className="yours-custom-class" />
    <img src={Img1} style={{width:'100%'}} className="yours-custom-class" />
  </AliceCarousel>
)
export default ImageCarousel