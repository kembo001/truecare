import React from 'react';
import Welcome from '../assets/welcomeImage.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PageIntro.css';

function PageIntro() {
  return (
    <div>
      <div className="feature feature--6 my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5 mt-md-0 p-md-0 absolute absolute--right">
              <img width="100%" className="feature__image" src={Welcome} alt="" />
            </div>
            <div className="col-md-6">
              <div className="feature__content">
                <h2 className="content__title">Compassionate Hospice Care</h2>
                <p className="content__text">
                  At our hospice, we provide compassionate care for patients with life-limiting illnesses. 
                  Our dedicated team specializes in pain management and symptom relief,
                  ensuring the utmost comfort and support during challenging times.
                </p>
                <div className="content__buttons">
                  <a href="/contact" className="button button-secondary" title="Contact Us">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageIntro;
