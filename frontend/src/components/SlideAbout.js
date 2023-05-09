import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./SlideAbout.css";

// import required modules
import { EffectCards } from "swiper";

// image
import Image1 from '../assets/aboutSlide/strec-1.jpg';
import Image2 from '../assets/aboutSlide/strec-2.jpg';
import Image3 from '../assets/aboutSlide/poset-1.jpg';
import Image4 from '../assets/aboutSlide/poset-2.jpg';
import Image5 from '../assets/aboutSlide/plastik-catal.jpg';
import Image6 from '../assets/aboutSlide/plastik-catal-2.jpg';
import Image7 from '../assets/aboutSlide/sulfit-kagit-1.jpg';
import Image8 from '../assets/aboutSlide/sulfit-kagit-2.jpg';

export default function App() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Image1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Image2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Image3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Image4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Image5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Image6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Image7} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Image8} alt="" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}
