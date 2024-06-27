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
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. At deserunt corrupti voluptatum vitae consequuntur hic explicabo provident reiciendis dolor voluptate rem deleniti, aperiam, minima dolorum laudantium. Sed aliquam voluptas eius?
                      </p>
                      <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. At deserunt corrupti voluptatum vitae consequuntur hic explicabo provident reiciendis dolor voluptate rem deleniti, aperiam, minima dolorum laudantium. Sed aliquam voluptas eius?
                      </p>{" "}
                    </div>{" "}
                    <div className="col-md-4">
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