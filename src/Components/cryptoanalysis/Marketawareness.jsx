import React from 'react';
import pic1 from "../../assets/stepahead.png";
import pic2 from "../../assets/profitpower.png";
import pic3 from "../../assets/catch.png";
import pic4 from "../../assets/insights.png";
const Marketawareness = () => {
  const sections = [
    {
      title: '🕵️‍♂️ Stay One Step Ahead',
      description: `Daily market analysis empowers you to identify emerging trends before they become obvious to the broader market. By reviewing data and patterns every day, you can anticipate movements, optimize your entry and exit points, and make more informed trading decisions — giving you a competitive edge in a fast-changing environment.`,
      reverse: false,
      image: pic1,
    },
    {
      title: '📅 Consistency is Profit Power',
      description: `Tracking the market daily reinforces discipline and helps develop reliable trading habits. Over time, this consistent practice sharpens your instincts, improves decision-making, and increases your chances of making steady profits — turning routine into a powerful edge.`,
      reverse: true,
      image: pic2,
    },
    {
      title: '🚨 Catch Breakouts in Real-Time',
      description: `Stay alert to market shifts as they unfold. Real-time analysis lets you spot bullish breakouts or bearish crashes the moment they happen, so you can act immediately — maximizing gains or minimizing losses before the opportunity slips away.`,
      reverse: false,
      image: pic3,
    },
    {
      title: '🧠 Turn Noise into Insights',
      description:`In a market full of distractions and hype, daily analysis helps you stay grounded. By focusing on charts, volume, and real data, you can filter out emotional noise like FOMO and make smart, objective trading decisions based on actual market behavior.`,
      reverse: true,
      image: pic4,
    },
  ];

  return (
    <div className='text-white' style={{ backgroundColor: 'black' }}>
      <div className="container py-5">
        <div className='text-center display-4' style={{ fontWeight: "400" }}>
          Stay Ahead with Daily Market Awareness
        </div>
        <div className="text-center mb-5 mt-3" style={{ fontSize: "19px" }}>
          “Spot trends early and make smarter moves before the crowd does.”
        </div>

        {sections.map((section, index) => (
          <div
            key={index}
            className="d-flex justify-content-center mb-5"
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

export default Marketawareness;
