import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../css/header.css';
import '../css/sidebar.css';

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('');

  const showSidebar = (category) => {
    setActiveCategory(category);
    setSidebarVisible(true);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
    setActiveCategory('');
  };

  const subCategories = {
    'AI Services': ['Smarter Than Chatbots: Intelligent Evolving Agents', 'Your Productivity Partner', ' Connected, Customizable & Global'],
    'Crypto Analysis': ['Tokenomics', 'Volume Analysis', 'Sentiment Score'],
    'Market Data': ['Unified Market Dashboard', 'Real-Time Data & Alerts', 'Smart Analysis Tools', 'Portfolio & Profit Tracking'],
    'Whales Wallet Tracking System': ['Top Wallets', 'Movement Alerts', 'Real-Time Flow'],
    'CMAI Metal Card': [' Spend Freely, Live Flexibly', 'Smarter Finance in Real Time', 'Control, Rewards & Security'],
    'About CMAI': ['Company', 'Team', 'Partners'],
    'Crypto News & Updates': [
      'Real-Time News & Alerts',
      ' Smart Filtering & Global Coverage',
      'Sentiment & Influencer Insights',
      'Launches & Airdrops',
    ],
  };

  const subCategoryRoutes = {
    'Smarter Than Chatbots: Intelligent Evolving Agents': '/prediction-bot',
    'Your Productivity Partner': '/trading-signal',
    ' Connected, Customizable & Global': '/portfolio-ai',
    'Tokenomics': '/tokenomics',
    'Volume Analysis': '/volume-analysis',
    'Unified Market Dashboard': '/unifiedmarket',
    'Real-Time Data & Alerts': '/realtimedata',
    'Smart Analysis Tools': '/smartanalysis',
    'Portfolio & Profit Tracking': '/portfoliotracking',
    'Top Wallets': '/top-wallets',
    'Movement Alerts': '/movement-alerts',
    'Real-Time Flow': '/real-time-flow',
    ' Spend Freely, Live Flexibly': '/spendcrypto',
    'Smarter Finance in Real Time': '/mentalcard-finance',
    'Control, Rewards & Security': '/controlrewards',
    'Company': '/about-company',
    'Team': '/about-team',
    'Partners': '/about-partners',
    'Real-Time News & Alerts': '/news-alerts',
    ' Smart Filtering & Global Coverage': '/smart-filtering',
    'Sentiment & Influencer Insights': '/influencer-insights',
    'Launches & Airdrops': '/airdrops',
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4">
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img src={logo} alt="Logo" className="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            {Object.keys(subCategories).map((category) => (
              <li className="nav-item" key={category}>
                <button
                  className="nav-link btn text-light"
                  onClick={() => showSidebar(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarVisible ? 'active' : ''}`}>
        <div className="sidebar-header d-flex justify-content-between align-items-center">
          <h5 className="text-white">{activeCategory}</h5>
          <button className="btn-close btn-close-white" onClick={closeSidebar}></button>
        </div>

        <ul className="list-group list-group-flush mt-3">
          {subCategories[activeCategory]?.map((item, index) => (
            <li
              key={index}
              className="text-white m-3 listitem"
              onClick={closeSidebar}
            >
              <Link
                to={subCategoryRoutes[item]}
                className="text-white text-decoration-none"
              >
                {item} ➔
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {sidebarVisible && <div className="overlay" onClick={closeSidebar}></div>}
    </>
  );
};

export default Header;
