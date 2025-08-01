import React from 'react';

const Smartriskmanagement = () => {
  const features = [
    {
      title: "Balance Risk and Reward",
      emoji: "⚖️",
      desc: "Use daily data to fine-tune entries, exits, and stop-loss levels with precision.",
    },
    {
      title: "Adapt to Market Volatility",
      emoji: "🔁",
      desc: "Crypto is fast-moving. Daily analysis keeps you agile and informed.",
    },
    {
      title: "Seize Every 24-Hour Opportunity",
      emoji: "⏰",
      desc: "Crypto never sleeps. Daily analysis lets you take advantage of global market swings.",
    },
  ];

  return (
    <>
      <div className='text-white' style={{ backgroundColor: 'black' }}>
        <div className="container py-5">
          <div className='text-center display-4' style={{ fontWeight: "400" }}>
            Smarter Risk Management
          </div>
          <div className="text-center mb-5 mt-3" style={{ fontSize: "19px" }}>
            “Manage volatility with precision, awareness, and strategy.”
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

export default Smartriskmanagement;
