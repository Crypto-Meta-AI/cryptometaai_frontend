import React from 'react';

const Smartfilter = () => {
  const features = [
    {
      title: "Global Crypto Coverage",
      emoji: "🌍",
      desc: "Track key updates from every region — U.S. regulations, Asian Web3 projects, and Europe’s DeFi growth — all in one place.",
    },
    {
      title: "Category-Based Filters",
      emoji: "🔍",
      desc: "Cut through the noise. Easily browse news by topics like NFTs, Layer 2s, Regulations, Memecoins, and more — on your terms.",
    },
    {
      title: "Smart News, Not Noise",
      emoji: "🧠",
      desc: "No more FOMO traps. Get clean, verified updates from trusted sources with AI-powered filtering — just the facts that matter.",
    },
  ];

  return (
    <>
      <div className='text-white' style={{ backgroundColor: 'black' }}>
        <div className="container py-5">
          <div className='text-center display-4' style={{ fontWeight: "400" }}>
            Smart Filtering & Global Coverage
          </div>
          <div className="text-center mb-5 mt-3" style={{ fontSize: "19px" }}>
            “Every Update. Zero Delay.”
          </div>

          <div className="row justify-content-center">
            {features.map((feature, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 text-center p-4 border-0" style={{ backgroundColor: "#1a1a1a", borderRadius: "12px" }}>
                  <div style={{ fontSize: "40px" }}>{feature.emoji}</div>
                  <h5 className="mt-3 mb-2 text-white">{feature.title}</h5>
                  <p className="text-white" style={{ fontSize: "15px" }}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Smartfilter;
