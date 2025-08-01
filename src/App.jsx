import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './Components/Homepage.jsx'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Layout from './Components/Layout.jsx'
import Realtimenews from './Components/cryptonews/Realtimenews.jsx'
import Smartfilter from './Components/cryptonews/Smartfilter.jsx'
import Sentiment from './Components/cryptonews/Sentiment.jsx'
import Airdroplaunch from './Components/cryptonews/Airdroplaunch.jsx'
import Predictionbot from './Components/Aiservices/Predictionbot.jsx'
import Tradingsignal from './Components/Aiservices/Tradingsignal.jsx'
import Portfolioai from './Components/Aiservices/Portfolioai.jsx';
////metalcard
import Metalcardfinance from './Components/Cmaimentalcard/Metalcardfinance.jsx';
import Spendcrypto from './Components/Cmaimentalcard/Spendcrypto.jsx';
import Controlrewards from './Components/Cmaimentalcard/Controlrewards.jsx';
//marketdata
import Portfoliotracking from './Components/Marketdata/Portfoliotracking.jsx';
import Realtimedata from './Components/Marketdata/Realtimedata.jsx';
import Smartanalysis from './Components/Marketdata/Smartanalysis.jsx';
import Unifiedmarket from './Components/Marketdata/Unifiedmarket.jsx';
//tracking system
import Whaletracking from './Components/Whaleswallet/Whaletracking.jsx';
import Whalebehavior from './Components/Whaleswallet/Whalebehavior.jsx';
//cryptoanalysis
import Marketawareness from './Components/cryptoanalysis/Marketawareness.jsx';
import Smartriskmanagement from './Components/cryptoanalysis/Smartriskmanagement.jsx'
import Datadrivenstrategy from './Components/cryptoanalysis/Datadrivenstrategy.jsx';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout><Homepage/></Layout>}/>
          <Route path='/news-alerts' element={<Layout><Realtimenews/></Layout>}/>
          <Route path='/smart-filtering' element={<Layout><Smartfilter/></Layout>}/>
          <Route path='/influencer-insights' element={<Layout><Sentiment/></Layout>}/>
          <Route path='/airdrops' element={<Layout><Airdroplaunch/></Layout>}/>
          <Route path='/prediction-bot' element={<Layout><Predictionbot/></Layout>}/>
          <Route path='/trading-signal' element={<Layout><Tradingsignal/></Layout>}/>
          <Route path='/portfolio-ai' element={<Layout><Portfolioai/></Layout>}/>
          {/* metalcard */}
          <Route path='/spendcrypto' element={<Layout><Spendcrypto/></Layout>}/>
          <Route path='/mentalcard-finance' element={<Layout><Metalcardfinance/></Layout>}/>
          <Route path='/controlrewards' element={<Layout><Controlrewards/></Layout>}/>
          {/* marketdata */}
          <Route path='/portfoliotracking' element={<Layout><Portfoliotracking/></Layout>}/>
          <Route path='/realtimedata' element={<Layout><Realtimedata/></Layout>}/>
          <Route path='/smartanalysis' element={<Layout><Smartanalysis/></Layout>}/>
          <Route path='/unifiedmarket' element={<Layout><Unifiedmarket/></Layout>}/>
          {/* tracking  */}
          <Route path='/whaletracking' element={<Layout><Whaletracking/></Layout>}/>
          <Route path='/whalebehavior' element={<Layout><Whalebehavior/></Layout>}/>
          {/* analysis */}
          <Route path='/marketawareness' element={<Layout><Marketawareness/></Layout>}/>
          <Route path='/smartriskmanagement' element={<Layout><Smartriskmanagement/></Layout>}/>
          <Route path='/datadrivenstrategy' element={<Layout><Datadrivenstrategy/></Layout>}/>
          {/* about */}

          

          
        </Routes>
      </Router>
    </>
  )
}

export default App
