import React from 'react';
import "../../Home/CollectionsSection.css"; 


// importing images for collections

import flashImg from "../../../assets/Image/collectionone.avif";
import flashIm from "../../../assets/Image/Collectiontwo.avif";
import flashI from "../../../assets/Image/collectionthree.avif";
import flash from "../../../assets/Image/collectionfor.avif";
import flas from "../../../assets/Image/collectionfive.avif";
import fla from "../../../assets/Image/collection six.avif";
import floo from "../../../assets/Image/collectionseven.avif";
import foo from "../../../assets/Image/collectioneghte.avif";
import flro from "../../../assets/Image/collectionnine.avif";

const collections = [
  { id: 1,
     name: "Fresh Navdha Shampoo",
      desc: "100% Natural 9-Care Nourishment",
       img: flashImg },
  { id: 2,
     name: "Fresh Daily Tikta Facewash",
      desc: "Regenerative, Gentle & Non-Drying",
       img: flashIm },
  { id: 3,
     name: "Ready-To-Apply Henna Paste",
      desc: "Pre-Soaked In Black Tea & Herbs",
       img: flashI },
  { id: 4,
     name: "Cold Processed Soaps",
      desc: "Natural And Handmade",
       img: flash },
  { id: 5,
     name: "Summer Dasabuti Hair Oil",
      desc: "Active Herb Nutrition",
       img: flas },
  { id: 6,
     name: "Active Gel Moisturisers",
      desc: "72 Hr Active Hydration &",
       img: fla },
  { id: 7,
     name: "All-Day Face Malai",
      desc: "48hr Moisture, Active Nutrition",
       img: floo },
  { id: 8,
     name: "Pure Cold Pressed Oils",
      desc: "Pure & High-Grade Nutrition",
       img: foo },
  { id: 9,
     name: "Pure Mukhalaya Face Oil",
      desc: "Ultra-Nourishing Exquisite",
       img: flro }
];



const CollectionsSection = () => {
  return (
    <section className="collections-container">
      <h2 className="title">Must-Have Collections for You!</h2>
      <div className="grid-container">
        {collections.map((item, index) => (
          <div 
            key={item.id} 
            className={`collection-card ${index === 8 ? 'last-card' : ''}`}
          >
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};



export default CollectionsSection;