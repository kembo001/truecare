import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServicesDescription.css';

function ServicesDescription() {
  return (
    <div className="container">
      <div className="row">
        <div className="content-area col-12">
          <div id="dnn_ctr434_HtmlModule_lblContent" className="Normal">
            <h2>Contact Us</h2>
            <p>
              We're here to assist you and answer any questions you may have. Please don't hesitate to reach out to us. Here's how you can get in touch:
            </p>
            <ul>
              <li>Phone: <a href='tel:469-345-7600' title='Call Us Today!'>469-345-7600</a></li>
              <li>Email: <a href="mailto:truecarehhagency@gmail.com">Truecarehhagency@gmail.com</a></li>
              <li>Email: <a href="mailto:Hospicetruecare@gmail.com">Hospicetruecare@gmail.com</a></li>
              <li>Address: 1042 White Porch Ave, Forney, TX 75126</li>
            </ul>
          </div>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.1065944788343!2d-96.4468611417484!3d32.73636013404539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ead7ef9e9d0df%3A0xbe17e551d036f069!2s1042%20White%20Porch%20Ave%2C%20Forney%2C%20TX%2075126!5e0!3m2!1sen!2sus!4v1698175581156!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ServicesDescription;
