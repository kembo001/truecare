import React from 'react';
import './Header.css'; // Import your CSS file for styling
import facebooklogo from '../assets/facebook-f.svg';
import twitterlogo from '../assets/x-twitter.svg';
import phone from '../assets/phone-solid.svg';
import Logo from '../assets/LogoHeader.png';
import Hamburger from './Hamburger.js'




function Header() {

  return (
    <header className="header">
     <Hamburger />
      <div className="top-nav">
        <div className="left">
        <img src={phone} alt="Phone Icon" />
          <p>Have questions? Call Us Today! <a href="tel:9134268333" title='Call Us Today!'>913-426-8333</a></p>
        </div>
        <div className="right">
          <p>Email Us at: <a href="mailto:truecarehhagency@gmail.com">truecarehhagency@gmail.com</a></p>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img className='facebook' src={facebooklogo} alt="Facebook" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img className='twitter' src={twitterlogo} alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-nav">
          <div className='logo'>
                <a href='/' title='Logo'>
                  <img className='twitter' src={Logo} alt="Twitter" />
                </a>
          </div>
        <nav>
          <ul>
            {/* <li><a href="/">Home</a></li> */}
            <li><a href="/services">Hospice Services</a></li>
            <li><a href="/home-health">Home Health</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>

          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
