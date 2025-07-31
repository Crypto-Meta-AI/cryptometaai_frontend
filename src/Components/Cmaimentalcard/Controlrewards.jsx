import React from 'react';
import earnreward from "../../assets/earnrewards.png";
const Controlrewards = () => {
  const sections = [
    {
      title: '🎁 Earn Rewards in Crypto',
      description: `Get cashback, staking bonuses, and loyalty points every time you spend. Your crypto card pays you back in your favorite coins — just swipe and earn.`,
      reverse: false,
      image: earnreward
    },
    {
      title: '🔐 High Security & Instant Locking',
      description: `Lost your card? Lock it instantly via the app. Enjoy 2FA, virtual card support, and top-tier fraud protection — your funds, always under your control.`,
      reverse: true
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
            className={`row align-items-center mb-5 ${section.reverse ? 'flex-row-reverse' : ''}`}
          >
          <div className='card cardstyle p-5 mb-3 w-75'>
          <div className='row'>
            <div className="col-lg-4 mb-4 mb-md-0">
               <img src={section.image}   alt={section.title} className="img-fluid rounded feature-img"  style={{maxHeight:"400px", objectFit:"contain"}}/>
            </div>
            <div className="col-lg-8 ">
              <h3 className="mb-3">{section.title}</h3>
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
