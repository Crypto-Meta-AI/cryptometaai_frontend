import React ,{useState}from 'react';
import '../css/banner.css';
import backgroundVideo from '../assets/bannervideo.mp4';


const Banner = () => {
   const [copied, setCopied] = useState(false);
   const address = "0x91Ba48D3d870AF024f5BECE46395EcF4f8e7C060"
   const handleCopyLinkleft = () => {
    if (address) {
      navigator.clipboard
        .writeText(address)
        .then(() => {
          setCopied(true); // Set copied to true
          setTimeout(() => setCopied(false), 4000);
          // alert('Referral link and code copied to clipboard!');
        })
        .catch((error) => {
          console.error("Error copying referral link and code:", error);
        });
    } else {
      console.error("No referral link to copy");
    }
  };
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
          <div className="row justify-content-center">
  <div className="col-auto">
    <label className='h4 fw-bold'>Buy Now:</label>
  </div>
  <div class="col-auto">
    <input type="text" id="inputPassword6" className="form-control w-100" readOnly value={address}/>
  </div>
  <div class="col-auto">
  {
                    copied ? <span className="ms-2 text-success">Copied!</span> : <i className="fa fa-copy mt-2 text-white"  style={{fontSize:"20px"}} onClick={handleCopyLinkleft}></i>
                  }
    {/* <i className='fa fa-copy mt-2 text-white' style={{fontSize:"20px"}}></i> */}
  </div>
</div>
        <div className="banner-buttons d-flex justify-content-center mt-5">
          <a href='#about'><button className="btn-primary">Get Started</button></a>
         {/* <a href='#intro '><button className="btn-secondary">Learn More</button></a> */}
          
          
        </div>

      </div>
     
    </div>
  );
};

export default Banner;
