import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServicesDescription.css';
import facebooklogo from '../assets/facebook-f.svg';
import googlelogo from '../assets/google.svg';

const reviews = [
  {
    id: 1,
    text: "Great service! The team at TrueCare really goes above and beyond to ensure their clients are well taken care of.",
    author: "Brianna S."
  },
  {
    id: 2,
    text: "I highly recommend TrueCare. Their professionalism and dedication to their clients are truly commendable.",
    author: "Chebet C."
  },
  {
    id: 3,
    text: "Exceptional care and support from TrueCare. They made a difficult time much easier for me and my family.",
    author: "Daniel L."
  }
];

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
          <div className="reviewBTN">
            <a href="#">
              <img
                className="lazyload"
                src={facebooklogo}
                alt="Facebook Logo"
                style={{ width: '40px', height: '50px', margin: '0 0 3rem 0' }}
              />
            </a>
            {reviews.map(review => (
              <div key={review.id} className="review">
                <p>{review.text}</p>
                <p>- {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesDescription;
