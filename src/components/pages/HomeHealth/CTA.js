import React from 'react';
import '../Services/CTA.css';

function CTA() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="purplesection">
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <h2 style={{ textTransform: "uppercase" }}>
                      Choose TrueCare For Your Home Health Needs
                    </h2>
                    <p>
                      At TrueCare, we are your trusted partner for comprehensive Home Health Services. Our commitment is to provide exceptional care that goes beyond medical assistance. Here's why you should choose us:
                    </p>
                    <ul className="reasons-list">
                      <li>We prioritize your comfort and well-being, ensuring that you receive personalized care right in the comfort of your home.</li>
                      <li>Our skilled nursing care, therapy services, and home health aide support are designed to address your unique needs and improve your quality of life.</li>
                      <li>We believe in a holistic approach to healthcare, where emotional and physical well-being are equally important, and we're here to support you every step of the way.</li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <div className="formwrap">
                      <form>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required /><br /><br />

                        <label htmlFor="number">Number:</label>
                        <input type="tel" id="number" name="number" required /><br /><br />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required /><br /><br />

                        <label htmlFor="help">How may we help you:</label>
                        <textarea id="help" name="help" rows="4" required></textarea><br /><br />

                        <input type="submit" value="Submit" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;
