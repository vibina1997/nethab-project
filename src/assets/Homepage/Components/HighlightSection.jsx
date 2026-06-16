import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import "../../Home/HighlightSection.css";

import flashImg from "../../../assets/Image/hairoo.avif";
import websiteImg from "../../../assets/Image/websitoo.avif";

const BannerSlider = () => {
  const bannerLinks = [
    { id: 1, img: flashImg, url: "/shop/summer-essentials" },
    { id: 2, img: websiteImg, url: "/shop/trending" },
  ];

  return (
    <section className="banner-slider-wrapper">
      <Swiper
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