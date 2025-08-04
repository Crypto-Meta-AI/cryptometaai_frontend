import React from 'react'
import pic from "../assets/pic.png"
import  pic1 from "../assets/1.png"
import pic2 from "../assets/2.png"
import pic3 from "../assets/3.png"
import pic4 from "../assets/4.png"
import "../css/intro.css"
const Intro = () => {
  return (
    <>
      <div className='bg-black'>
        <div className="container py-5" id='intro'>
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
              <img src={pic} width={350} className="img-fluid metaai" alt="CryptoMetaAI Visual" />
            </div>
            <div className="col-lg-6">
              <div className="display-5 intro mb-3 text-white" style={{ fontWeight: "500" }}>What is CryptoMetaAI</div>
              <p className="text-white" style={{ textAlign: "justify", lineHeight: "1.7" }}>
                <strong>CryptoMetaAI</strong> is an innovative platform at the intersection of <strong>blockchain (crypto)</strong>, the <strong>metaverse (meta)</strong>, and <strong>artificial intelligence (AI)</strong>. It brings together the decentralized power of cryptocurrency, the immersive potential of the metaverse, and the intelligence of autonomous AI agents.
                <br /><br />
                CryptoMetaAI envisions a future where users can own digital assets, interact in intelligent virtual environments, and benefit from AI that works for them — not against them. By combining secure blockchain infrastructure, metaverse experiences, and adaptive AI, CryptoMetaAI enables intelligent agents to transact, collaborate, and evolve across networks without central control.
                <br /><br />
                This is more than a platform — it’s a movement toward a truly decentralized digital society where value, identity, and intelligence are owned by the user.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="container py-5 text-center">
        <h2 className="display-5 mb-5" style={{ fontWeight: "500" }}>Why Choose CryptoMetaAI?</h2>
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="p-3 h-100 border rounded shadow-sm whycard">
            <img src={pic1} width={100} />
              <h5 className="mb-2 mt-2">Decentralized & Secure</h5>
              <p>Built on blockchain, ensuring trustless, transparent, and secure transactions for all users and AI agents.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="p-3 h-100 border rounded shadow-sm whycard">
            <img src={pic2} width={100} />
              <h5 className="mb-2">AI-Powered Intelligence</h5>
              <p>Leverages smart AI agents that learn, adapt, and work autonomously in favor of the user’s goals.</p>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="p-3 h-100 border rounded shadow-sm whycard">
            <img src={pic3} width={100} />
              <h5 className="mb-2">Metaverse Integration</h5>
              <p>Enables immersive, intelligent virtual environments with real asset ownership and cross-world interaction.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="p-3 h-100 border rounded shadow-sm whycard">
            <img src={pic4} width={100} />
              <h5 className="mb-2">User-Centric Vision</h5>
              <p>CryptoMetaAI prioritizes data privacy, digital freedom, and value returning directly to creators and users.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{backgroundColor: "#0acca8"}}>
      <div className="container py-5 text-start" >
        <h2 className='tagline'>CryptoMetaAI revolutionizes crypto investing with advanced AI tools, real-time data, predictive insights, and secure technology to help traders, investors, and enthusiasts make smarter, faster, and more informed decisions.</h2>
        <h6 ><strong>- Co founder of CryptoMetaAI</strong> </h6>
      </div>
      </div>
    </>
  )
}

export default Intro
