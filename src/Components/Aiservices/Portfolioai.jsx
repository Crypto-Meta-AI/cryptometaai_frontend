import React from 'react';
import platformIcon from '../../assets/platformintegrate.jpg';
import globalIcon from '../../assets/CulturallyAware.jpg';
 import industryIcon from '../../assets/industry.jpg';

const Portfolioai = () => {
  const sections = [
    {
      title: 'Seamless Platform Integration —',
      description: `AI Agents integrate with your existing tech stack — from emails and CRMs to communication tools like Slack. No disruption, just automation. Let them handle repetitive workflows while you focus on decision-making.`,
      image: platformIcon,
      reverse: false
    },
    {
      title: 'Multilingual & Culturally Aware —',
      description: `AI Agents speak your user’s language. Whether your team or customers are in Europe, Asia, or the Americas, these agents provide localized support with native fluency — ensuring communication is always smooth.`,
      image: globalIcon,
      reverse: true
    },
    {
      title: 'Industry-Trained Intelligence —',
      description: `Whether it's finance, healthcare, e-commerce, or SaaS — AI agents can be tailored with specific workflows, terminology, and compliance needs. They don’t just understand — they specialize.`,
      image: industryIcon,
      reverse: false
    }
  ];

  return (
    <div className='text-white' style={{ backgroundColor: 'black' }}>
      <div className="container py-5">
        <div className='text-center display-4' style={{ fontWeight: "400" }}>Connected, Customizable & Global</div>
        <div className="text-center mb-5 mt-3" style={{ fontSize: "19px" }}>
          “AI Agents Built for You — Everywhere, In Every Language.”
        </div>

        {sections.map((section, index) => (
          <div
            key={index}
            className={`row align-items-center mb-5 ${section.reverse ? 'flex-row-reverse' : ''}`}
          >
            <div className="col-md-6 mb-4 mb-md-0 ">
              <img
                src={section.image}
                alt={section.title}
                className="img-fluid rounded feature-img"
                style={{ maxHeight: "400px", objectFit: "contain" }}
              />
            </div>
            <div className="col-md-6">
              <h3 className="mb-3 text-justify">{section.title}</h3>
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

export default Portfolioai;
