import React from 'react';
import analyticsIcon from '../../assets/analytics.jpg';  // Add your own icons
import aiIcon from '../../assets/Aiicon.jpg';
import newsIcon from '../../assets/news.jpg';

const Smartanalysis = () => {
  const sections = [
    {
      title: '📈 Advanced Analytics —',
      description: `Master market movements with powerful tools like candlestick charts, RSI, MACD, market cap tracking, and dominance trends — all in one unified interface designed for traders and analysts.`,
      image: analyticsIcon,
      reverse: false
    },
    {
      title: '🧠 AI-Powered Insights —',
      description: `Let AI do the heavy lifting — get predictive insights, sentiment analysis, and historical pattern recognition powered by machine learning. Know where the market might move — before it happens.`,
      image: aiIcon,
      reverse: true
    },
    {
      title: '📰 News + Price Integration —',
      description: `Stay updated with real-time news directly linked to price spikes, volume changes, or dips. Filter irrelevant noise and focus only on news with real, measurable market impact.`,
      image: newsIcon,
      reverse: false
    }
  ];

  return (
    <div className="text-white" style={{ backgroundColor: 'black' }}>
      <div className="container py-5">
        <div className="text-center display-4" style={{ fontWeight: "400" }}>
          Smart Analysis Tools
        </div>
        <div className="text-center mb-5 mt-3" style={{ fontSize: "19px" }}>
          “Smarter Insights. Sharper Trades.”
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
            </div>
            <div className="col-md-6">
              <h3 className="mb-3">{section.title}</h3>
              <p className="text-white fs-6" style={{ lineHeight: "1.9" }}>
                {section.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Smartanalysis;
