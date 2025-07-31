import React from 'react';
 import assistantIcon from '../../assets/aiagent.png';  // You can replace with your actual asset path
 import chatIcon from '../../assets/Natural.png';
 import productivityIcon from '../../assets/boost.png';
 import secureIcon from '../../assets/smart.png';

const Tradingsignal = () => {
  const sections = [
    {
      title: 'Your 24/7 Digital Assistant —',
      description: `AI Agents never sleep. They’re always ready to answer, solve, and assist — anytime, anywhere. From customer queries to task planning, your assistant is always on.`,
       image: assistantIcon,
      reverse: false
    },
    {
      title: 'Natural Conversations, Human-Like Flow —',
      description: `Talk to an AI agent just like you would to a teammate. Forget robotic scripts — the conversation flows naturally with empathy, memory, and logic.`,
      image: chatIcon,
      reverse: true
    },
    {
      title: 'Boost Productivity by 10x —',
      description: `Let AI agents take over repetitive tasks, data entry, research, and notifications — freeing you to focus on strategy, creativity, and growth.`,
      image: productivityIcon,
      reverse: false
    },
    {
      title: 'Smart, Secure, and Scalable —',
      description: `AI Agents are built with enterprise-grade encryption, privacy, and reliability — ready to scale with your team while keeping your data safe.`,
      image: secureIcon,
      reverse: true
    }
  ];

  return (
    <div className='text-white' style={{ backgroundColor: 'black' }}>
      <div className="container py-5">
        <div className='text-center display-4' style={{ fontWeight: "400" }}>
          Your 24/7 Productivity Partner
        </div>
        <div className="text-center mb-5 mt-3" style={{ fontSize: "19px" }}>
          “Smarter Work. Faster Results. Nonstop Support.”
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

export default Tradingsignal;
