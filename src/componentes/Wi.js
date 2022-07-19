import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../styles.css";



// import required modules
import { EffectCoverflow, Pagination, Autoplay  } from "swiper";


function Wi() {
  return (
    <div className="dddd">


      <Swiper
      autoplay={{
        delay: 500,
        disableOnInteraction: false,
      }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
       
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}

        loop={true}
        
      
        modules={[EffectCoverflow, Pagination, Autoplay]}
        
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="slide1"></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide2"></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide3"></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide4"></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide5"></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide6"></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide7"></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide8"></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide9"></div>
        </SwiperSlide>
      </Swiper>
   

    </div>
  );
}

export default Wi;