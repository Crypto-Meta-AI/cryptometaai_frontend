import React from 'react'

const Metalcardfinance = () => {
  const features = [
    {
      title: "Instant Conversion to Fiat",
      emoji: "💸",
      desc: "Convert BTC, ETH, USDT, and other coins instantly into local currency at the time of purchase — seamless and automatic.",
    },
    {
      title: "Low Fees, Transparent Rates",
      emoji: "💲",
      desc: "Enjoy competitive exchange rates and minimal transaction fees — no hidden costs, just clear crypto-to-fiat pricing.",
    },
    {
      title: "Multi-Currency, Multi-Coin Support",
      emoji: "🌍",
      desc: "Use a wide range of cryptocurrencies and stablecoins across different blockchains — flexible, scalable, and future-proof.",
    },
    {
      title: "Real-Time Expense Tracking",
      emoji: "📊",
      desc: "Get live spending analytics in both fiat and crypto, along with monthly reports — all tracked inside one powerful app.",
    },
  ];

  return (
    <>
      <div className='text-white' style={{ backgroundColor: 'black' }}>
        <div className="container py-5">
          <div className='text-center display-4' style={{ fontWeight: "400" }}>
            Smarter Finance in Real Time
          </div>
          <div className="text-center mb-5 mt-3" style={{ fontSize: "19px" }}>
            “Smart Spending. Zero Guesswork.”
          </div>

          <div className="row justify-content-center">
            {features.map((feature, index) => (
              <div className="col-md-6 col-lg-3 mb-4" key={index}>
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

export default Metalcardfinance;
