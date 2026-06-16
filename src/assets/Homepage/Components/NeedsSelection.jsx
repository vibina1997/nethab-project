import React from "react";

import "../../Home/NeedsSelection.css"; 


// images for needs selection

import Pigment from "../../../assets/Image/Pigmentation.avif";

import Antu from "../../../assets/Image/ANTI_AGEING.avif";

import Hairfalo from "../../../assets/Image/HairFalloo.avif";

import hairgrowth from "../../../assets/Image/HairGrowth.avif";

import oildance from "../../../assets/Image/oilndacne.avif";

import nightcare from "../../../assets/Image/NightCare.avif";

import dryyy from "../../../assets/Image/dryness.avif";

import glowi from "../../../assets/Image/Glow.avif";

import dandruf from "../../../assets/Image/dandruff.avif";
const needs = [
  { id: 1,
     name: "Pigmentation",
      img: Pigment },
  { id: 2,
     name: "Anti-ageing",
      img: Antu },
  { id: 3,
     name: "Hair Fall",
      img: Hairfalo },
  { id: 4,
     name: "Hair Growth",
      img: hairgrowth },
  { id: 5,
     name: "Night Care",
      img: nightcare },
  { id: 6,
     name: "Oil & Acne",
      img: oildance },
  { id: 7,
     name: "Dryness",
      img: dryyy },
  { id: 8,
     name: "Glow & Radiance",
      img: glowi },
  { id: 9,
     name: "Dandruff",
      img: dandruf },
];

const NeedsSelection = () => {
  return (
    <section className="needs-container">
      <h2 className="title">Special Care for Special Needs</h2>
      <div className="needs-grid">
        {needs.map((item) => (
          <div key={item.id} className="needs-item">
            <div className="img-wrapper">
              <img src={item.img} alt={item.name} />
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NeedsSelection;