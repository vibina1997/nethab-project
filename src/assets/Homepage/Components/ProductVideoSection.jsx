import React from 'react';

import "../../Home/ProductVideoSection.css"; 

// video files for product section

import promoVide from "../../Home/Video/playvideoone.mp4"; 
import promoVid from "../../Home/Video/playvideotwo.mp4"; 
import promoVi from "../../Home/Video/playvideothree.mp4"; 
import promoV from "../../Home/Video/playvideofor.mp4"; 
import promo  from "../../Home/Video/playvideofive.mp4"; 


// images for product section


import Pigmentoo from "../../../assets/Image/videoimgone.avif";

import Pigmento from "../../../assets/Image/playimgtwo.avif";


import Pigment from "../../../assets/Image/playimagthree.avif";

import Pigmen from "../../../assets/Image/Playimagfor.avif";

import Pigme from "../../../assets/Image/Playimgfive.avif";

const products = [
  { id: 1,
     video: promoVide,
      image: Pigmentoo,
       name: "Anti-HairFall Tri-Leaf",
        price: "₹335",
         old: "₹419" },
  { id: 2,
     video: promoVid,
      image: Pigmento, 
      name: "Ready to Apply Fresh Henna",
       price: "₹357",
        old: "₹421" },
  { id: 3,
     video: promoVi,
      image: Pigment,
       name: "Five Oil Hibiscus Repair",
        price: "₹345",
         old: "₹431" },
  { id: 4,
     video: promoV,
      image: Pigmen,
       name: "48HR Malai Moisturiser",
        price: "₹375",
         old: "₹439" },
  { id: 5,
     video: promo ,
      image: Pigme,
       name: "Fresh Hibiscus Hair Growth",
        price: "₹356",
         old: "₹444" },
];

const ProductVideoSection = () => {
  return (
    <section className="video-cards-section">
      <h2>Unreeling the Magic Behind Cell Revival</h2>
      <p>Hear it from Nat Lovers!</p>
      <div className="cards-wrapper">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <video autoPlay loop muted playsInline className="card-video">
              <source src={p.video} type="video/mp4" />
            </video>
            <div className="product-info">
              <img src={p.image} alt={p.name} className="product-thumb" />
              <p className="product-name">{p.name}</p>
              <div className="price-box">
                <strong>{p.price}</strong> <del>{p.old}</del>
              </div>
              <button className="add-btn">ADD +</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductVideoSection;