import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "../../Home/Ingredients.css"; 


import imgone from '../../../assets/Image/Makin.avif';
import imgtw from '../../../assets/Image/Making.avif';
import imgthree from '../../../assets/Image/Makingm.avif';
import imgfor from '../../../assets/Image/Makingmi.avif';
import imgfive from '../../../assets/Image/makingmil.avif';
import imgsix from '../../../assets/Image/makingmilk.avif';

const Ingredients = () => {
  const ingredients = [imgone, imgtw, imgthree, imgfor, imgfive, imgsix];

  return (
    <div className="ingredients-container">
      <h2 className="section-title">Made with Pure, Nourishing Butters & Oils</h2>
      
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
        {ingredients.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="ing-card">
              <img src={img} alt={`Ingredient ${index}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Ingredients;