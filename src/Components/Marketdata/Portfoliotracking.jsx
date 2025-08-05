import React from 'react';
import portfolioImg from "../../assets/portfolioimg.jpg"; // Optional image
import commandcenter from "../../assets/commandcenter.jpg"; // Optional image
const Portfoliotracking = () => {
  const sections = [
    {
      title: '💼 Simplified Portfolio View',
      description: `Monitor your ROI, profits, losses, and trade history across wallets and exchanges — all in one unified dashboard. Know exactly where you stand, anytime.`,
      reverse: false,
      image: portfolioImg
    },
    {
      title: '🌟 Your Crypto Command Center',
      description: `Whether you're a daily trader or long-term HODLer, this is your go-to hub. Get a real-time pulse on your portfolio, with the tools and insights you need to act fast.`,
      reverse: true,
      image: commandcenter
    }
  ];

  return (
    <div className='text-white' style={{ backgroundColor: 'black' }}>
      <div className="container py-5">
        <div className='text-center display-4' style={{ fontWeight: "400" }}>
          Portfolio & Profit Tracking
        </div>
        <div className="text-center mb-5 mt-3" style={{ fontSize: "19px" }}>
          “Track everything. Know everything. Control everything.”
        </div>

        {sections.map((section, index) => (
          <div
            key={index}
            className={`d-flex justify-content-center mb-5`}
          >
            <div className={`row align-items-center ${section.reverse ? 'flex-row-reverse' : ''} card p-4 w-100`} style={{ maxWidth: "1000px", backgroundColor: "#1c1c1c", borderRadius: "20px" }}>
              <div className='row'>
                <div className="col-lg-5 mb-4">
                  {section.image && (
                    <img
                      src={section.image}
                      alt={section.title}
                      className="img-fluid rounded"
                      style={{ maxHeight: "400px", objectFit: "contain", width: "100%" }}
                    />
                  )}
                </div>
                <div className="col-lg-7">
                  <h3 className="mb-3 text-white">{section.title}</h3>
                  <p className="fs-6 text-white" style={{ lineHeight: "1.9", whiteSpace: "pre-line" }}>
                    {section.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Portfoliotracking;
