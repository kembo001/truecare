import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServicesDescription.css';
import facebooklogo from '../assets/facebook-f.svg';
import googlelogo from '../assets/google.svg';

function ServicesDescription() {
  return (
    <div className="container">
      <div className="row">
        <div className="content-area col-12">
          <div className='revieews'>
            <h2>Hear from Our Valued Clients</h2>
            <p>
              At TrueCare, we place immense value on the opinions and experiences of our clients. Your feedback is not just important; it's invaluable to us. We honor your thoughts, stories, and reviews, as they help us continually improve the care and services we provide.
            </p>
            <p>
              We are proud to share the testimonials and stories of those who have entrusted us with their care. These heartfelt accounts reflect the dedication and commitment of our team to make a positive impact on the lives of those we serve.
            </p>
            <p>
              We invite you to explore the testimonials from our clients, and we look forward to hearing from you as well. Your feedback helps us in our mission to provide the best care possible, and we are always here to listen, learn, and grow.
            </p>
            <p>
              To share your thoughts and connect with us, please visit our Google and Facebook page.
            </p>
          </div>
          <h3>Leave us a Review:</h3>
          <div class="reviewBTN">
<a href=""><img
                  className="lazyload"
                  src={facebooklogo}
                  alt="Logo"
                  style={{ width: '40', height: '50px', margin: '0 1rem 0 0' }}
                />{" "}</a> 
<a href=""><img
                  className="lazyload"
                  src={googlelogo}
                  alt="Logo"
                  style={{ width: '40', height: '50px' }}
                />{" "}</a>        
</div>
        </div>
      </div>
    </div>
  );
}

export default ServicesDescription;
