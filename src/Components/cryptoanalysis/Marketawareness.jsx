import React from 'react';

const Marketawareness = () => {
  const sections = [
    {
      title: '🕵️‍♂️ Stay One Step Ahead',
      description: `Daily analysis helps you catch trends early before the market reacts.`,
      reverse: false,
    },
    {
      title: '📅 Consistency is Profit Power',
      description: `Monitoring daily moves builds strong trading habits and sharp instincts.`,
      reverse: true,
    },
    {
      title: '🚨 Catch Breakouts in Real-Time',
      description: `Spot bullish breakouts or bearish crashes as they happen — not after.`,
      reverse: false,
    },
    {
      title: '🧠 Turn Noise into Insights',
      description: `Filter out hype and FOMO — focus on what the charts and volumes really say.`,
      reverse: true,
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
