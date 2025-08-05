import React from 'react';
import pic1 from "../../assets/money.jpg"
import pic2 from "../../assets/whalealert.jpg"
import pic3 from "../../assets/predictmarket.jpg"
import pic4 from "../../assets/smartwallet.jpg"
import pic5 from "../../assets/protectyourself.jpg"
const Whalebehavior = () => {
  const sections = [
    {
      title: '🔎 Follow the Smartest Money',
      description: `Track top crypto whale wallets to discover exactly what the biggest players are buying, selling, or holding — stay one step ahead.`,
      reverse: false,
      image: pic1
    },
    {
      title: '🚨 Real-Time Whale Alerts',
      description: `Get instant alerts when whales move millions. Stay informed about large transactions and token swaps as they happen — no delay.`,
      reverse: true,
      image: pic2
    },
    {
      title: '📈 Predict Market Moves Early',
      description: `Whale behavior often signals the next big move. Spot pumps, dumps, and reversals before the crowd by watching on-chain actions.`,
      reverse: false,
      image: pic3
    },
    // {
    //   title: '💡 See Through the Noise',
    //   description: `Ignore hype. Rely on real-time, transparent on-chain whale activity instead of speculation from social media or influencers.`,
    //   reverse: true,
    // },
    {
      title: '🧠 Smart Wallet Insights',
      description: `Not all whales are the same — understand if a wallet belongs to a trader, long-term holder, institution, or insider. Analyze behavior, not just transactions.`,
      reverse: false,
      image: pic4
    },
    {
      title: '🛡️ Protect Yourself From Dumps',
      description: `Receive alerts when whales start moving assets to exchanges. Exit positions before major dumps and protect your investments.`,
      reverse: true,
      image: pic5
    },
  ];

  return (
    <div className='text-white' style={{ backgroundColor: 'black' }}>
      <div className="container py-5">
        <div className='text-center display-4' style={{ fontWeight: "400" }}>
          Whale Behavior & Market Prediction
        </div>
        <div className="text-center mb-5 mt-3" style={{ fontSize: "19px" }}>
          “Understand the big players to predict the big moves.”
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

export default Whalebehavior;
