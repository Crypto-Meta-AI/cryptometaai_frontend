import React from 'react';
 import botIcon from '../../assets/ai.png';
 import superIcon from '../../assets/ai2.png';
import learnIcon from '../../assets/a3.png';
 import industryIcon from '../../assets/ai4.png';

const Predictionbot = () => {
  const sections = [
    {
      title: 'Beyond Chatbots: They Think, Act, and Learn —',
      description: `AI Agents go beyond basic automation. They're capable of strategic thinking, planning, and adapting to complex situations. Unlike traditional bots, they don't just follow scripts — they evolve with every interaction.`,
       image: botIcon,
      reverse: false,
    },
    {
      title: 'AI Agents = Superpowers for Your Team —',
      description: `Imagine having a digital teammate that works 24/7, never gets tired, and can handle hundreds of tasks in parallel. That’s what an AI Agent is — your ultimate productivity booster.`,
       image: superIcon,
      reverse: true,
    },
    {
      title: 'Auto-Learning from Feedback —',
      description: `Every interaction makes the AI Agent smarter. With feedback loops built-in, agents continually improve performance, accuracy, and decision-making, so results get better with time.`,
       image: learnIcon,
      reverse: false,
    },
    {
      title: 'Trained for Your Industry —',
      description: `Whether you're in healthcare, finance, e-commerce, or support — AI Agents can be customized with domain-specific training. They speak your industry language from day one.`,
       image: industryIcon,
      reverse: true,
    },
  ];

  return (
    <div className="text-white" style={{ backgroundColor: 'black' }}>
      <div className="container py-5">
        <div className="text-center display-4" style={{ fontWeight: '400' }}>
          Smarter Than Chatbots
        </div>
        <div className="text-center mb-5 mt-3" style={{ fontSize: '19px' }}>
          “Think. Adapt. Improve — Meet the Next Generation of AI Agents.”
        </div>

        {sections.map((section, index) => (
          <div
            key={index}
            className={`row align-items-center mb-5 ${section.reverse ? 'flex-row-reverse' : ''}`}
          >
            <div className="col-md-6 mb-4  ">
              <img
                src={section.image}
                alt={section.title}
                className="img-fluid rounded "
                style={{ maxHeight: '400px', objectFit: 'contain' }}
              />
            </div>
            <div className="col-md-6">
              <h3 className="mb-3 text-justify">{section.title}</h3>
              <p className="text-white fs-6" style={{ lineHeight: '1.9' }}>
                {section.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Predictionbot;
