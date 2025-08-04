import React from 'react';
// import '../css/airdrop.css'; // custom styles if needed
// import airdropImg from '../assets/airdrop.jpg'; // placeholder image

const upcomingEvents = [
  {
    name: "SOLPAD Airdrop",
    date: "August 2, 2025",
    description: "Claim free $SPAD tokens by connecting your wallet and staking.",
    // image: airdropImg
  },
  {
    name: "NEOChain IDO Launch",
    date: "August 5, 2025",
    description: "Participate in the NEOChain presale on CMAI Launchpad.",
    // image: airdropImg
  },
  {
    name: "MetaDrop Airdrop",
    date: "August 12, 2025",
    description: "NFT-based token drop for early adopters. Limited to 10,000 users.",
    // image: airdropImg
  }
];

const Airdroplaunch = () => {
  return (
    <div className="  py-5 px-4" style={{backgroundColor:"black"}}>
      <div className="container">
        <h2 className="mb-4 text-center text-white">🚀 Upcoming Launches & Airdrops</h2>
        <p className="text-white text-center mb-5">
          Be the first to know about exclusive token launches, presales, airdrops, and IDOs.
          Stay ahead of the market with early access opportunities.
        </p>

        <div className="row">
          {upcomingEvents.map((event, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100  text-white shadow">
                {/* <img src={event.image} className="card-img-top" alt={event.name} /> */}
                <div className="card-body">
                  <h5 className="card-title text-dark">{event.name}</h5>
                  <p className="card-text text-dark">{event.description}</p>
                </div>
                <div className="card-footer text-muted">
                  📅 {event.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <a href="#" className="btn btn-success px-4 py-2">
            View All Launches →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Airdroplaunch;
