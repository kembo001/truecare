import React from 'react'
import './Footer.css'; // Import your CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoB from '../assets/LogoHeader.png'



function Footer() {
  return (
    <div>
      <div className='footer-top'>
        <h2>Call us Today! <span><a href='' title=''>913-426-8333</a></span></h2>
      </div>
<footer className="footer footer--6">
  {" "}
  <div className="container upper">
    {" "}
    <div className="row">
      {" "}
      <div id="FooterOnePane" className="col-12" runat="server">
        {" "}
        <div id="footer-one-pane">
          {" "}
          <div className="footer-row">
            {" "}
            <ul className="list d-lg-flex flex-row justify-content-between">
              {" "}
              <li>
              <a href="/about">About Us</a>
              </li>{" "}
              <li>
              <a href="/services">Hospice Services</a>
              </li>{" "}
              <li>
              <a href="/team">Hospice Team</a>
              </li>{" "}
              <li>
              <a href="/resources">Resources</a>
              </li>{" "}
              <li>
              <a href="/contact-us">Contact Us</a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div id="FooterTwoPane" className="col-12" runat="server">
        {" "}
        <div id="footer-two-pane">
          {" "}
          <div className="footer-row justify-content-center">
            {" "}
            <div className="logo">
              {" "}
              <a href="/" title="">
                {" "}
                <img
                  className="lazyload"
                  src={LogoB}
                  alt="Logo"
                />{" "}
              </a>{" "}
            </div>{" "}
            <div className="address">
              {" "}
              <a href="https://maps.app.goo.gl/kS4uCnysjWX81HGK8" target="_blank" title="Find us on Google Maps">
                {" "}
                <address>
                  {" "}
                  1042 White Porch Ave,
                  <br /> Forney, TX 75126{" "}
                </address>{" "}
              </a>{" "}
            </div>{" "}
            <div className="phone-number">
              {" "}
              <p>Call Today</p>{" "}
              <a
                href="tel:913-426-8333"
                title="Contact us today"
                data-phone-number=""
              >
                913-426-8333
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
  </div>{" "}
</footer>

    </div>
  )
}

export default Footer