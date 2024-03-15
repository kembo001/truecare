import React from 'react'
import './CTA.css'
import { useForm, ValidationError } from '@formspree/react';

function CTA() {
  const [state, handleSubmit] = useForm("mnqezkyk");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
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
                      At TrueCare, we are dedicated to providing exceptional hospice services that go beyond medical care. Our team is committed to ensuring that every patient receives compassionate and personalized support during their journey.
                      </p>
                      <p>
                      What sets us apart is our holistic approach. We don't just focus on physical health; we prioritize emotional well-being and provide comprehensive palliative care to manage pain and symptoms effectively.
                      </p>{" "}
                    </div>{" "}
                    <div className="col-md-4">
        <div className="formwrap">
        <form onSubmit={handleSubmit}>

        <label htmlFor="Name">
        Name
      </label>
      <input
        id="name"
        type="name" 
        name="name"
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />

<label htmlFor="Number">
        Number
      </label>
      <input
        id="number"
        type="number" 
        number="number"
      />
      <ValidationError 
        prefix="Number" 
        field="Number"
        errors={state.errors}
      />


      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

<label htmlFor="How may we help you">
How may we help you
      </label>
      <textarea
        id="message"
        name="message"
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
        </div>
        
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

