import React from 'react';
import './CTA.css';

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
                      Choose TrueCare For Your Hospice Needs
                    </h2>
                    <p>
                      At TrueCare, we are dedicated to providing exceptional hospice services that go beyond medical care. Our team is committed to ensuring that every patient receives compassionate and personalized support during their journey.
                    </p>
                    <p>
                      What sets us apart is our holistic approach. We don't just focus on physical health; we prioritize emotional well-being and provide comprehensive palliative care to manage pain and symptoms effectively.
                    </p>
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
