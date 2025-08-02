import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../assets/logo1.png';
import pic from "../assets/pic.png"
const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">
        <div className="row g-4">

          {/* About Section */}
          <div className="col-12 col-md-3">
            <h5 className="mb-3">About CryptoMetaAI</h5>
            <ul className="list-unstyled text-muted">
              <li><a href="#" className="text-decoration-none text-secondary">Our Vision</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Developers Hub</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Roadmap</a></li>
              {/* <li><a href="#" className="text-decoration-none text-secondary">Blog</a></li> */}
            </ul>
          </div>

          {/* Tech Stack Section */}
          <div className="col-12 col-md-3">
            <h5 className="mb-3">Tech Stack</h5>
            <ul className="list-unstyled text-muted">
              <li><a href="#" className="text-decoration-none text-secondary">Blockchain</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">AI Engine</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Smart Insights</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Analytics</a></li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="col-12 col-md-3">
            <h5 className="mb-3">Connect with Us</h5>
            <ul className="list-unstyled text-muted">
              <li><a href="#" className="text-decoration-none text-secondary">X (Twitter)</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">GitHub</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Telegram</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Discord</a></li>
            </ul>
          </div>

          {/* CTA Box */}
          <div className="col-12 col-md-3">
            <div className=" d-flex align-items-center justify-content-center">
               <img src={pic} width={200} className="img-fluid" alt="CryptoMetaAI Visual" />
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        {/* Bottom Footer */}
        <div className="d-flex flex-column flex-md-row justify-content-between text-muted small">
       <img src={logo} alt="Logo" className="logo" />
          <div className='text-white text-end mt-4'>© 2025 CryptoMetaAI. All rights reserved.</div>
          <div className="mt-4 mt-md-0">
            <a href="#" className="text-decoration-none text-secondary me-3">Privacy</a>
            <a href="#" className="text-decoration-none text-secondary me-3">Terms of Use</a>
            <a href="#" className="text-decoration-none text-secondary">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
