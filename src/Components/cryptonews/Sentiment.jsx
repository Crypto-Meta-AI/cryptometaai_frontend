import React from 'react'
 import sentimentImg from '../../assets/sentiment.png'         // placeholder image for sentiment analysis
 import influencerImg from '../../assets/influencer.png'       // placeholder image for influencer tweets

const Sentiment = () => {
  return (
    <>
    <div className="text-white" style={{ backgroundColor: 'black' }}>
    <div className="container py-5 text-white ">
     <div className='text-center display-4' style={{ fontWeight: "400" }}>
            Sentiment & Influencer Insights
          </div>
          <div className="text-center mb-5 mt-3" style={{ fontSize: "19px" }}>
            “Crypto News That Actually Matters.”
          </div>
      <div className="row align-items-center mb-5 ">
        <div className="col-md-6 mb-4 mb-md-0">
          <img src={sentimentImg} alt="Market Sentiment" className="img-fluid rounded" style={{maxHeight:"400px", objectFit:"contain"}} />
        </div>
        <div className="col-md-6">
          <h4 className="text-white">📊 Market Sentiment  —</h4>
          <p className="text-light" style={{lineHeight: "2"}}>
            Understand how the crypto community feels about the market — bullish or bearish? Our sentiment engine scans thousands of tweets, news headlines, and social media trends to give you a real-time sentiment score. Make smarter trades by knowing when confidence is rising or fear is setting in.
          </p>
        </div>
      </div>

      <div className="row align-items-center flex-md-row-reverse">
        <div className="col-md-6 mb-4 mb-md-0">
          <img src={influencerImg} alt="Influencer Tweets" className="img-fluid rounded shadow" style={{maxHeight:"400px", objectFit:"contain"}}  />
        </div>
        <div className="col-md-6">
          <h4 className="text-white">🎙️ Influencer Tweets Tracked  —</h4>
          <p className="text-light" style={{lineHeight: "2"}}>
            Stay updated on the latest tweets from major crypto voices like Elon Musk, CZ, Vitalik, and Saylor. Our system flags market-moving tweets and ties them directly to token trends. Never miss the moment an influencer shakes the market.
          </p>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Sentiment
