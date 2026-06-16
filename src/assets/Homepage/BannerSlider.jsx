import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import "../Home/BannerSlider.css";

// images for banner slider

import slideone from "../../assets/Image/bannerone.avif";
import slidetwo from "../../assets/Image/bannertwo.avif";
import slidethree from "../../assets/Image/bannerthree.avif";
import slidefor from "../../assets/Image/bannerfor.avif";

const BannerSlider = () => {
  const bannerLinks = [
    { id: 1, img: slideone, url: "/shop/summer-essentials" },
    { id: 2, img: slidetwo, url: "/shop/trending" },
    { id: 3, img: slidethree, url: "/shop/new-arrivals" },
    { id: 4, img: slidefor, url: "/shop/offers" },
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