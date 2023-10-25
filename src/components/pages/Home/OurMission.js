import React from 'react'
import './OurMission.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ourmission from '../assets/our-mission.jpg'

function OurMission() {
  return (
    <div>
<div className='container'>
<div className="feature feature--3">
  {" "}
  <div className="row">
    {" "}
    <div className="col-md-6">
      {" "}
      <h2 className="feature__title">
      Our Mission
      </h2>{" "}
      <p className="feature__text">
      At the heart of our mission is a dedication to enhancing the lives of those we
serve. We understand the unique challenges individuals and their families face
when dealing with health issues, and we are driven to make a difference. Our
mission is to provide personalized, patient-centered care that not only addresses
medical needs but also fosters emotional support, hope, and a sense of
belonging.
      </p>{" "}
      <div className="feature__buttons">
        {" "}
        <a href="#" className="button button--secondary" title="">
          Button Text
        </a>{" "}
        <a href="#" className="button button--primary" title="">
          CTA Button Text
        </a>{" "}
      </div>{" "}
    </div>{" "}
    <div className="col-md-6">
      {" "}
      <img
        className="feature__image lazyload"
        src={ourmission}
        alt=""
      />{" "}
    </div>{" "}
  </div>{" "}
</div>
</div>


    </div>
  )
}

export default OurMission