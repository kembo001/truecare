import React from 'react'
import './CTA.css'
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("movaaoqo");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
      </label>
      <input
        id="name"
        type="text" 
        name="name"
        placeholder='Name'
      />
      <label htmlFor="phone">
      </label>
      <input
        id="phone"
        type="tel" 
        name="phone"
        placeholder='Phone'
      />
      <label htmlFor="email">
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Email Address'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder='How May We Help You?'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

function CTA() {
  return (
    <div>
        <div className="container-fluid">
  <div className="row">
    <div className="col-12">
              <div className="purplesection">
                {" "}
                <div className="container">
                  {" "}
                  <div className="row">
                    {" "}
                    <div className="col-md-8">
                      {" "}
                      <h2 style={{ textTransform: "uppercase" }}>
                        Choose TrueCare For Your Hospice Needs{" "}
                      </h2>{" "}
                      <p>
                      At TrueCare, we are your trusted partner for comprehensive Home Health Services. Our commitment is to provide exceptional care that goes beyond medical assistance. Here's why you should choose us:
                    </p>
                    <p>
                    <ul className="reasons-list">
                      <li>We prioritize your comfort and well-being, ensuring that you receive personalized care right in the comfort of your home.</li>
                      <li>Our skilled nursing care, therapy services, and home health aide support are designed to address your unique needs and improve your quality of life.</li>
                      <li>We believe in a holistic approach to healthcare, where emotional and physical well-being are equally important, and we're here to support you every step of the way.</li>
                    </ul>
                    </p>
                    </div>{" "}
                    <div className="col-md-4">
                    <h2 style={{ padding:"2rem 0 0", textTransform: "uppercase" }}>
                        Contact Us{" "}
                      </h2>{" "}
                    <ContactForm />
      </div>
                  </div>{" "}
                </div>{" "}
              </div>

    </div>
  </div>
</div>

    </div>
  )
}

export default CTA