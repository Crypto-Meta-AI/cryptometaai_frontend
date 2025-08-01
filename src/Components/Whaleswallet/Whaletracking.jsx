import React from 'react';

const Whaletracking = () => {
  const features = [
    {
      title: "📊 Track Wallet Portfolios",
      desc: "Analyze whale portfolio breakdowns including holdings, entry points, token weightage, and growth over time.",
    },
    {
      title: "🔗 Multi-Chain Whale Tracking",
      desc: "Follow whale movements across Ethereum, BNB, Solana, Polygon, Arbitrum, Avalanche, and many more chains.",
    },
    {
      title: "💼 Project-Specific Whale Watch",
      desc: "Focus on the coins you care about — track SHIB, ETH, LINK or any token with customizable project alerts.",
    },
    {
      title: "📞 Easy-to-Use Interface",
      desc: "Heat maps, charts, and on-chain explorers — beautifully designed and beginner-friendly, no technical expertise needed.",
    },
  ];

  return (
    <div className='text-white' style={{ backgroundColor: 'black' }}>
      <div className="container py-5">
        <div className='text-center display-4' style={{ fontWeight: '400' }}>
          Advanced Tracking Tools & Custom Alerts
        </div>
        <div className="text-center mb-5 mt-3" style={{ fontSize: '19px' }}>
          “Monitor across chains and focus on what matters to you.”
        </div>

        <div className="row justify-content-center">
          {features.map((feature, index) => (
            <div className="col-md-5 mb-4" key={index}>
              <div
                className="card h-100 text-center p-4 border-0"
                style={{ backgroundColor: '#1a1a1a', borderRadius: '12px' }}
              >
                <div style={{ fontSize: '34px' }}>{feature.title.split(' ')[0]}</div>
                <h5 className="mt-3 mb-2 text-white">
                  {feature.title.replace(/^.\s/, '')}
                </h5>
                <p className="text-white" style={{ fontSize: '15px' }}>
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whaletracking;
