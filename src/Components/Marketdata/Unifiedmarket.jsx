import React from 'react';
import dashboardImg from "../../assets/unifiedmarket.jpg";  // Make sure to add your image in this path
 import exchangeImg from "../../assets/mobileweb.png";    // Optional second image if needed
import exchange from "../../assets/exchangerate.jpg";
const Unifiedmarket = () => {
  const sections = [
    {
      title: '📊 One Dashboard. Every Coin',
      description: `No more switching apps — track Bitcoin, Ethereum, Altcoins, NFTs, DeFi and more in a single view. All your market data, beautifully organized in one interface.`,
      reverse: false,
      image: dashboardImg
    },
    {
      title: '📱 Mobile & Web Friendly',
      description: `Seamlessly track your portfolio and market data anytime, anywhere. Enjoy synchronized access across devices with a responsive, user-friendly layout.`,
      reverse: true,
      image: exchangeImg
    },
    {
      title: '🌐 Global Exchange Rates',
      description: `Compare crypto prices across Binance, Coinbase, Kraken, KuCoin, and more — all in one place. See where you get the best rates before making any trade.`,
      reverse: false,
      image: exchange
    }
  ];

  return (
    <div className='text-white' style={{ backgroundColor: 'black' }}>
      <div className="container py-5">
        <div className='text-center display-4' style={{ fontWeight: "400" }}>
          Unified Market Dashboard
        </div>
        <div className="text-center mb-5 mt-3" style={{ fontSize: "19px" }}>
          “One platform. Every asset. Total control.”
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

export default Unifiedmarket;
