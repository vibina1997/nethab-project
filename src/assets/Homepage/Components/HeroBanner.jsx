import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import "../../Home/HeroBanner.css"; 

// image imports for banner slider


import hairo from "../../../assets/Image/hairfallo.avif";
import anto from "../../../assets/Image/anti.avif";
    import radi from "../../../assets/Image/radiance.avif";

const BannerSlider = () => {
  const bannerLinks = [
    { id: 1,
         img: hairo,
          url: "/shop/summer-essentials" },
    { id: 2,
         img: anto,
          url: "/shop/trending" },
    { id: 3, 
        img: radi,
         url: "/shop/new-arrivals" },
    
  ];

  return (
    <section className="banner-slider-wrapper">
      <Swiper
        // module imports for autoplay, pagination, and fade effect

        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
      >
        {bannerLinks.map((banner) => (
          <SwiperSlide key={banner.id}>
            <a href={banner.url}>
              <img src={banner.img} alt={`Banner ${banner.id}`} className="hero-banner" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerSlider;