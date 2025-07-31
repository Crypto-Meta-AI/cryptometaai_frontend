import React from 'react';
import '../css/about.css';

const About = () => {
  return (
    <section className="about-section bg-about text-white py-5" id="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="display-3  text-center mb-4" style={{fontWeight:400}}>Our Vision For CryptoMetaAI</h2>
            <p className="about-description text-justify">
              We envision a future where artificial intelligence is not locked behind corporate firewalls but thrives in an open, decentralized ecosystem—where intelligent agents can collaborate, learn, and transact freely across secure networks.
              <br /><br />
              CryptoMetaAI is building the foundation for a decentralized AI economy—one that empowers individuals, protects user data, and ensures that the benefits of intelligence are distributed, not hoarded. In our world, agents are not controlled—they’re free to act with purpose and evolve with integrity.
              <br /><br />
              CryptoMetaAI is more than just blockchain infrastructure. It’s a movement toward a smarter, more inclusive internet—where AI works for everyone, not just the few.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
