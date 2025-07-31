import React from 'react';
import earnreward from "../../assets/earnrewards.png";
import security from "../../assets/security.png";
const Controlrewards = () => {
  const sections = [
    {
      title: 'Earn Rewards in Crypto',
      description: `Earn Rewards in Crypto refers to the ability to receive cryptocurrency as a reward every time you make a purchase using a crypto card. Instead of traditional cashback or loyalty points, users earn a percentage of their spending back in popular cryptocurrencies like Bitcoin, Ethereum, or stablecoins. 
      For example, if you spend ₹1,000 with a card offering 2% crypto cashback, you receive ₹20 worth of crypto. These rewards can also include staking bonuses or platform-specific tokens, helping users grow their crypto holdings simply by spending. It’s an easy and passive way to accumulate digital assets while using crypto in everyday life.`,  reverse: false,
      image: earnreward
    },
    {
      title: 'High Security & Instant Locking',
      description: `High Security & Instant Locking ensures that your crypto card and funds remain protected at all times. If your card is lost or stolen, you can instantly lock or disable it through the app, preventing unauthorized use. Additional security features like two-factor authentication (2FA), support for virtual cards (for safer online transactions), and advanced fraud detection systems provide multiple layers of protection. This means you stay in full control of your money, with the confidence that your crypto is safe and accessible only by you.`,reverse: true,
      image: security

    }
  ];

  return (
    <div className='text-white' style={{ backgroundColor: 'black' }}>
      <div className="container py-5">
        <div className='text-center display-4' style={{ fontWeight: "400" }}>
          Control, Rewards & Security
        </div>
        <div className="text-center mb-5 mt-3" style={{ fontSize: "19px" }}>
          “Protection meets perks — your crypto, your rules.”
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
export default Controlrewards;
