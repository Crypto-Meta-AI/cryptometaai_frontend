import React from 'react';
import '../css/banner.css';
import backgroundVideo from '../assets/bannervideo.mp4';

const Banner = () => {
  
  return (
    <div className="banner-container">
      <video className="banner-video" autoPlay loop  muted playsInline>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="banner-overlay">
        <h1 className="banner-title">The Blockchain for AI</h1>
        <p className="banner-subtitle">
         The Future of Payments is in Your Pocket.
        </p>
        <div className="banner-buttons d-flex justify-content-center">
          <a href='#about'><button className="btn-primary">Get Started</button></a>
         <a href='#intro '><button className="btn-secondary">Learn More</button></a> 
        </div>
      </div>
    </div>
  );
};

export default Banner;
