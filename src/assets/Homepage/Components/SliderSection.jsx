import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "../../Home/SliderSection.css"; 


import img1 from '../../../assets/Image/monday.avif';
import img2 from '../../../assets/Image/mondayfo.avif';
import img3 from '../../../assets/Image/mondayg.avif';
import img4 from '../../../assets/Image/mondayqq.avif';
import img5 from '../../../assets/Image/mondaythree.avif';
import img6 from '../../../assets/Image/mondayvaa.avif';

const SliderSection = () => {
  const products = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="slider-container">
      
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4} 
        slidesPerGroup={1} 
        navigation
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="product-card">
              <img src={img} alt={`Product ${index}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderSection;