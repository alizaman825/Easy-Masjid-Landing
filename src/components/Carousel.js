import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import  Img1 from '../assets/carousel.png'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
export default () => (
    <Carousel autoPlay showThumbs={false} infiniteLoop={true} showArrows={false} showStatus={false}>
        <div>
            <img alt="" src={Img1}/>
            
        </div>
        <div>
            <img alt="" src={Img1} />
           
        </div>
        <div>
            <img alt="" src={Img1} />
          
        </div>
    </Carousel>
);
