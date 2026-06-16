import React from 'react';
import "../../Home/VideoBanner.css"; 

// video file path
import promoVideo from "../../Home/Video/ayurvedha.mp4"; 

const VideoBanner = () => {
  return (
    <section className="video-banner-container">
      <div className="text-content">
        <h2>Feel Alive with Fresh Ayurveda</h2>
        <p>We bring to you 100% natural, cell-activating, ultra-potent beauty & wellness products. Harnessed fresh everyday & put through nutrition enhancing procedures in our ayurvedic kitchen. Nature served best to you, fresh you.</p>
      </div>

      <div className="video-wrapper">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="promo-video"
        >
          <source src={promoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h3 className="video-overlay-text">Clinically Tested & Proven</h3>
      </div>
    </section>
  );
};

export default VideoBanner;