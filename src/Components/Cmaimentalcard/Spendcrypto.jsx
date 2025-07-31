import React from 'react';
import spent from "../../assets/spent.png";
import linkwallet from "../../assets/linkwaleet.png";
import assistantIcon from "../../assets/Business.png";
import useuber from "../../assets/useuber.png";
const Spendcrypto = () => {
  const sections = [
    {
      title: '🌐 Spend Crypto Anywhere —',
       image: spent,
      description: `Use your crypto like cash in everyday life — shop online, book travel, dine out, or buy groceries, wherever major cards are accepted, globally and seamlessly.`,
      reverse: false

    },
    {
      title: '📱 Link to Wallet or Exchange —',
       image: linkwallet,
      description: `Connect your crypto wallet or exchange directly to your card for automatic payments — no need to manually load or convert, just swipe and go with real-time access.`,
      reverse: true
    },
    {
      title: '💼 Business & Personal Use Friendly —',
       image: assistantIcon,
      description: `Perfect for freelancers, remote workers, and global teams — use the card for personal shopping, client payments, business expenses, or cross-border crypto settlements with ease.`,
      reverse: false
    },
    {
      title: '🚗 Use for Fuel, Shopping & More —',
      image: useuber,
      description: `From groceries to Netflix, Uber rides to flights — pay for everyday services and subscriptions using your crypto balance without the need to convert manually or wait.`,
      reverse: true
    }
  ];

  return (
    <div className='text-white' style={{ backgroundColor: 'black' }}>
      <div className="container py-5">
        <div className='text-center display-4' style={{ fontWeight: "400" }}>
          Spend Freely, Live Flexibly
        </div>
        <div className="text-center mb-5 mt-3" style={{ fontSize: "19px" }}>
          “Use your crypto like real money — for everything, everywhere.”
        </div>

        {sections.map((section, index) => (
          <div
            key={index}
            className={`row align-items-center mb-5 ${section.reverse ? 'flex-row-reverse' : ''}`}
          >
            <div className="col-md-6 mb-4 mb-md-0">
            <img
                src={section.image}
                alt={section.title}
                className="img-fluid rounded feature-img"
                style={{ maxHeight: "400px", objectFit: "contain" }}
              />
              {/* Optional image section */}
            </div>
            <div className="col-md-6">
              <h3 className="mb-3">{section.title}</h3>
              <p className="fs-6 text-white" style={{ lineHeight: "1.9" }}>
                {section.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spendcrypto;
