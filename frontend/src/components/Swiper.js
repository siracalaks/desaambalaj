import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Swiper.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

// image
import Image1 from '../assets/swiper/bakliyat-naylon-torba.jpg';
import Image2 from '../assets/swiper/baskili-atlet-poset.jpg';
import Image3 from '../assets/swiper/gomlek-jelatini.jpg';
import Image4 from '../assets/swiper/yumusak-sapli-poset.jpg';

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Image1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image1} alt="Swiper" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} alt="Swiper" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} alt="Swiper" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image4} alt="Swiper" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
