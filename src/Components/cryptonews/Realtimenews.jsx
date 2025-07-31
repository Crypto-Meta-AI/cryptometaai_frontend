import React from 'react';
 import marketIcon from '../../assets/market.png';
 import alertIcon from '../../assets/alert.png';
import priceIcon from '../../assets/price.png';
 import briefIcon from '../../assets/brief.png';
// import '../css/realtimenews.css';



const Realtimenews = () => {
  const sections = [
    {
      title: 'Stay Ahead of the Market —',
      description: `In the ever-volatile world of cryptocurrency, information is power — and timing is everything. CryptoMetaAI delivers major headlines moments after they break. Whether it's Bitcoin crossing a key resistance level or an altcoin about to pump, you'll know before the crowd. This gives you the edge to act swiftly and strategically, ahead of market reactions.`,
      image: marketIcon,
      reverse: false
    },
    {
      title: 'Real-Time Alerts —',
      description: `Crypto moves fast — and sometimes, dangerously so. With real-time alerts from CryptoMetaAI, you're notified the moment something major happens: from whale transfers and wallet drains, to government regulations or ETF approvals. These alerts appear instantly in your feed, on your dashboard, or as push notifications — ensuring you never miss a high-impact event.`,
     image: alertIcon,
      reverse: true
    },
    {
      title: 'News That Impacts Price —',
      description: `Not every news headline moves the market. CryptoMetaAI highlights the stories that actually matter — the ones tied directly to price movement. Using AI, we correlate news articles with market spikes, volume surges, and sentiment changes. This lets you filter out the noise and focus only on information that has a proven effect on market performance.`,
       image: priceIcon,
      reverse: false
    },
    {
      title: 'Digestible Daily Briefs —',
      description: `If you're short on time, our Daily Briefs are made for you. Get a quick summary of the five most important stories every day — each written to be understood in under 30 seconds. It's the perfect way to stay current with trends, regulations, partnerships, and project updates, without spending hours reading blogs or scrolling social media.`,
       image: briefIcon,
      reverse: true
    }
  ];

  return (
    <>
    <div className=' text-white' style={{ backgroundColor: 'black' }}>
    <div className="container py-5">
    <div className='text-center display-4' style={{fontWeight:"400"}}>Real-Time News & Alerts</div>
      <div className="text-center mb-5 mt-3" style={{fontSize:"19px"}}>“Trade Smarter. Stay Informed.”</div>

      {sections.map((section, index) => (
        <div
          key={index}
          className={`row align-items-center mb-5 ${section.reverse ? 'flex-row-reverse' : ''}`}
        >
          <div className="col-md-6 mb-4 mb-md-0">
            <img src={section.image}   alt={section.title} className="img-fluid rounded feature-img"  style={{maxHeight:"400px", objectFit:"contain"}}/>
          </div>
          <div className="col-md-6">
            <h3 className="mb-3 text-justify ">{section.title}</h3>
            <p className="text-white fs-6" style={{lineHeight:"1.9"}}>{section.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default Realtimenews;
