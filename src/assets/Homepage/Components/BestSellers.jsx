import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "../../Home/BestSellers.css";

import HennaPaste from "../../Image/domo.avif"; 
import FaceWash from "../../Image/himo.avif";
import NightGel from "../../Image/koko.avif";
import Shampoo from "../../Image/momo.avif";
import HairOil from "../../Image/popo.avif"; 
import FaceCream from "../../Image/simo.avif";
import BodyLotion from "../../Image/soaso.avif";
import Sunscreen from "../../Image/vimo.avif";
import LipBalm from "../../Image/ummer.avif";
import Serum from "../../Image/skin.avif";

const products = [
  { id: 1, name: "Henna Paste", desc: "Herbs Pre-Soaked", price: 357, oldPrice: 421, tag: "BEST SELLER", img: HennaPaste },
  { id: 2, name: "Face Wash", desc: "All Skin Types", price: 269, oldPrice: 317, tag: "AWARD WINNER", img: FaceWash },
  { id: 3, name: "Night Gel", desc: "Night & Aging", price: 399, oldPrice: 471, tag: "NEW", img: NightGel },
  { id: 4, name: "Shampoo", desc: "Long Thick Hair", price: 345, oldPrice: 431, tag: "BEST SELLER", img: Shampoo },
  { id: 5, name: "Hair Oil", desc: "Hair Growth", price: 322, oldPrice: 394, tag: "FEATURED", img: HairOil },
  { id: 6, name: "Face Cream", desc: "Summer Care", price: 450, oldPrice: 500, tag: "TRENDING", img: FaceCream },
  { id: 7, name: "Body Lotion", desc: "Ubtan Glow", price: 299, oldPrice: 350, tag: "NEW", img: BodyLotion },
  { id: 8, name: "Sunscreen", desc: "Protection", price: 499, oldPrice: 550, tag: "BEST SELLER", img: Sunscreen },
  { id: 9, name: "Lip Balm", desc: "Soft Lips", price: 150, oldPrice: 200, tag: "FEATURED", img: LipBalm },
  { id: 10, name: "Serum", desc: "Skin Repair", price: 600, oldPrice: 700, tag: "AWARD WINNER", img: Serum }
];

const BestSellers = () => {
  const [quantities, setQuantities] = useState({});

  const updateQuantity = (id, delta) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta)
    }));
  };

  return (
    <section className="popular-container">
      <h2 className="title">Best Sellers</h2>
      <p className="subtitle">Breathe Life Into Your Beauty with Fresh Ayurveda</p>
      
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        navigation
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }
        }}
      >
        {products.map(product => {
          const qty = quantities[product.id] || 0;
          return (
            <SwiperSlide key={product.id}>
              <div className="product-card">
                {qty === 0 ? (
                  <button className="add-btn-top" onClick={() => updateQuantity(product.id, 1)}>+</button>
                ) : (
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(product.id, -1)}>-</button>
                    <span>{qty}</span>
                    <button onClick={() => updateQuantity(product.id, 1)}>+</button>
                  </div>
                )}
                
                <div className="product-image-container">
                  <img src={product.img} alt={product.name} className="product-image" />
                  <div className="tag-overlay">{product.tag}</div>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-desc">{product.desc}</p>
                  <div className="price-box">
                    <span className="price">₹{product.price}</span>
                    <span className="old-price">₹{product.oldPrice}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};


export default BestSellers;