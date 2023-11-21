import React from 'react'
import Welcome from '../assets/welcomeImage.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PageIntro.css'


function PageIntro() {
  return (
    <div>
        <div className="feature feature--6 my-5">
  {" "}
  <div className="container">
    {" "}
    <div className="row">
      {" "}
      <div className="col-md-6 mt-5 mt-md-0 p-md-0 absolute absolute--right">
        {" "}
        <img width= '100%'
          className="feature__image "
        src={Welcome}
          alt=""
        />{" "}
      </div>{" "}
      <div className="col-md-6">
        {" "}
        <div className="feature__content">
          {" "}
          <h2 className="content__title">About Us</h2>{" "}
          <p className="content__text">
          Welcome to TrueCare, where we transcend the role of a traditional healthcare provider to become your trusted partners in wellness and compassion. Committed to delivering exceptional home health and hospice care, we have dedicated ourselves to serving our community with unwavering dedication.

          </p>{" "}
<div class="content__buttons"> <a href="#" class="button button-primary" title="">CTA Button Text</a> <a href="#" class="button button-secondary" title="">BUTTON TEXT</a> </div>
        </div>{" "}
      </div>{" "}
    </div>{" "}
  </div>{" "}
</div>

    </div>
  )
}

export default PageIntro