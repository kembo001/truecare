import React from 'react';
import Welcome from '../assets/welcomeImage.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Services/PageIntro.css';
import Homehealth from '../assets/43859605_l_normal_none.jpg';

function PageIntro() {
  return (
    <div>
      <div className="feature feature--6 my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5 mt-md-0 p-md-0 absolute absolute--right">
              <img width="100%" className="feature__image" src={Homehealth} alt="" />
            </div>
            <div className="col-md-6">
              <div className="feature__content">
                <h2 className="content__title">Comprehensive Home Health Services</h2>
                <p className="content__text">
                  At our Home Health Services, we provide a wide range of healthcare solutions right in the comfort of your home. Our dedicated team is committed to your well-being, offering services that include:
                </p>
                <ul className="content__list">
                  <li>Skilled Nursing Care for expert medical assistance and monitoring.</li>
                  <li>Physical and Occupational Therapy for enhanced mobility and daily living skills.</li>
                  <li>Home Health Aide Services for personal care, meal assistance, and medication reminders.</li>
                </ul>
                <div className="content__buttons">
                  <a href="/contact-us" className="button button-secondary" title="Contact Us">Contact Us</a>
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
