import React from 'react';
import "../../Home/SummerCare.css";

// ചിത്രങ്ങൾ ഇംപോർട്ട് ചെയ്യുന്നു (നിങ്ങളുടെ ഫയൽ പാത്ത് അനുസരിച്ച് മാറ്റുക)
import HennaPasteone from "../../Image/bobooo.avif"; 
import HennaPasteon from "../../Image/cole.avif"; 
import HennaPasteo from "../../Image/lip.avif"; 
import HennaPast from "../../Image/madduu.avif"; 
import HennaPas from "../../Image/malai.avif";
 import HennaPa from "../../Image/koko.avif"; 
 import HennaP from "../../Image/hoho.avif"; 
 import Henna from "../../Image/hand.avif"; 
 import Henn from "../../Image/facee.avif"; 
 import Hennaa from "../../Image/himo.avif"; 
 import Hen from "../../Image/Active.avif"; 
 import Heno from "../../Image/domo.avif"; 

const products = [
  { id: 1, name: "Active Gel Moisturisers", desc: "Hydration", img: HennaPasteone },
  { id: 2, name: "Fresh Face Packs", desc: "Rejuvenating", img: HennaPasteon },
  { id: 3, name: "Fresh Daily Tikta", desc: "Non-Drying", img: HennaPasteo },
  { id: 4, name: "Cold Processed Soaps", desc: "Natural", img: HennaPast },
  { id: 5, name: "All-Day Face Malai", desc: "Moisture", img: HennaPas },
  { id: 6, name: "Pure Hair Oils", desc: "Nutrition", img: HennaPa },
  { id: 7, name: "Mukhalaya Face Oil", desc: "Face Care", img: HennaP },
  { id: 8, name: "Whipped Malai Lotion", desc: "Body Lotion", img: Henna },
  { id: 9, name: "Whipped Hand Malai", desc: "Hand Cream", img: Henn },
  { id: 10, name: "Whipped Body Malai", desc: "Dryness Relief", img: Hennaa },
  { id: 11, name: "Infused Lip Butter", desc: "Lip Care", img: Hen },
  { id: 12, name: "Body Maahu Oils", desc: "Massage Oil", img: Heno },
];

const SummerCare = () => {
  return (
    <section className="summer-care-section">
      <div className="container">
        <h2 className="section-title">Summer Care Favourites</h2>
        <div className="grid-container">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummerCare;