import React from 'react';

import baner from "../../../assets/Image/bigbaneer.avif";

const SkinAnalysisBanner = () => {

    // styles for the banner section
  const styles = {
    container: {
      padding: '20px',
      maxWidth: '1000px',
      margin: '40px auto',
      textAlign: 'center',
    },
    poster: {
      width: '100%',
      height: 'auto',
      borderRadius: '20px', 
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      display: 'block',
    }
  };

  return (
    <section style={styles.container}>
      <img 
        src={baner} 
        alt="VeDHA Skin Analysis" 
        style={styles.poster} 
      />
    </section>
  );
};

export default SkinAnalysisBanner;