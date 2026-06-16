import React from "react";
import "../../Home/CategoryMenu.css"; 

import flashImg from "../../../assets/Image/flash.avif";
import trendingImg from "../../../assets/Image/trending.avif";
import summerImg from "../../../assets/Image/Summer.avif";
import hairImg from "../../../assets/Image/Hair.avif";
import faceImg from "../../../assets/Image/Face.avif";
import bodyImg from "../../../assets/Image/Body.avif";
import skinImg from "../../../assets/Image/skin.avif";
import eyesImg from "../../../assets/Image/Eyes.avif";
import babyImg from "../../../assets/Image/Baby.avif";
import hairfallImg from "../../../assets/Image/hairfall.avif";
import menImg from "../../../assets/Image/Men.avif";
import hibiscusImg from "../../../assets/Image/Hibiscus.avif";
import giftingImg from "../../../assets/Image/Gifting.avif";

const CategoryMenu = () => {
  const categories = [
    { id: 1, name: "Flash Deals ⚡", img: flashImg },
    { id: 2, name: "Trending 🔥", img: trendingImg },
    { id: 3, name: "Summer Care", img: summerImg },
    { id: 4, name: "Hair", img: hairImg },
    { id: 5, name: "Face", img: faceImg },
    { id: 6, name: "Body", img: bodyImg },
    { id: 7, name: "Analyse Skin", img: skinImg },
    { id: 8, name: "Eyes & Lips", img: eyesImg },
    { id: 9, name: "Baby", img: babyImg },
    { id: 10, name: "Hair Fall", img: hairfallImg },
    { id: 11, name: "Men", img: menImg },
    { id: 12, name: "Hibiscus", img: hibiscusImg },
    { id: 13, name: "Gifting ✨", img: giftingImg }
  ];

  return (
    <section className="category-section-wrapper">
      <div className="category-scroll-container">

        {categories.map((item) => (
          <div key={item.id} className="category-circle-item">
            <div className="circle-border-ring">
              <img src={item.img} alt={item.name} />
            </div>
            <p className="circle-label-text">{item.name}</p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default CategoryMenu;