import React from 'react'
import './WelcomeMessage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from '../assets/welcomeImage.jpg';
import Freindssvg from '../assets/people-line-light.svg'

function OurMission() {
  return (
    <div>
              <div className='our-mission'>
              <div className="feature feature--5 my-5">
  {" "}
  <div className="container">
    {" "}
    <div className="row">
      {" "}
      <div className="col-md-6 offset-md-6 order-md-12">
        {" "}
        <div className="feature__content">
          {" "}
          <h2 className="content__title">Our Values</h2>{" "}
          <p className="content__text">
<ul>
  <li><strong>Compassion</strong>: We approach every patient with the empathy and kindness they
deserve, recognizing the significance of our role in their lives.</li>
  <li><strong>Quality</strong>: We maintain the highest standards of care and continuously strive for
excellence through education and innovation.</li>
  <li><strong>Dignity</strong>: We uphold the dignity of every individual, honoring their choices and
providing care that respects their preferences and autonomy.</li>
  <li><strong>Teamwork</strong>: We believe in the power of collaboration, working closely with our
patients, their families, and our healthcare professionals to ensure comprehensive
care.</li>
  <li><strong>Community</strong>: We are an active and engaged part of our community, participating
in events and initiatives that promote wellness and support those in need.</li>
</ul>
          </p>{" "}
          <div className="content__buttons">
            {" "}
            <a href="#" className="button button-primary" title="">
              CTA Button Text
            </a>{" "}
            <a href="#" className="button button-secondary" title="">
              BUTTON TEXT
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="col-md-6 mt-5 mt-md-0 p-md-0 absolute absolute--left order-md-1">
        {" "}
        <img
          className="feature__image"
          src={Welcome}
          alt=""
        />{" "}
      </div>{" "}
    </div>{" "}
  </div>{" "}
</div>
<div className='call-out'>
  <img src={Freindssvg} />
  <h2>Be a Hospice<br></br><span> care volunteer</span></h2>
  <p>We are excited to post contents on<br></br> the webstie. This space is reserved</p>
  <a href="#" className="button button-tertiary" title="">
              BUTTON TEXT
            </a>{" "}
</div>
      </div>
    </div>
  )
}

export default OurMission