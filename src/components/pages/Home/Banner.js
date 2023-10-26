import React from 'react'
import './Banner.css'
import image1 from '../assets/homebanner-slideshow-1.jpg'
import image2 from '../assets/homebanner-slideshow-2.jpg'
import image3 from '../assets/homebanner-slideshow-3.jpg'
import calendar from '../assets/calendar-clock-light.svg'
import { Carousel } from 'react-responsive-carousel';
import LogoB from '../assets/ecdc0f65-1814-4348-bcd9-b4d84d76b31c.png'

function Banner() {
  return (
    <div>
              <div className='banner'>
        <Carousel autoPlay={true} interval={3000 /* milliseconds */} infiniteLoop={true}>
          <div>
            <img src={image1} alt="Image 1" />
          </div>
          <div>
            <img src={image2} alt="Image 2" />
          </div>
          <div>
            <img src={image3} alt="Image 3" />
          </div>
        </Carousel>
        <div className="carousel-content">
<div className='top-half'>
<h1><span>Bringing<br></br></span>Quality Care<br></br>to Your Doorstep</h1>
        <p>At TrueCare, we're more than just a healthcare provider; we're your partners in
wellness and compassion. With a deep commitment to delivering exceptional
home health and hospice care, we have been serving our community for over 10
years. Our journey began with a simple yet powerful belief: every individual
deserves to age with dignity, comfort, and the highest quality of care, right in the
place they call home.</p>
          <a className='button button-primary' href='/contact-us'>Find Out More</a>
</div>
<a href='/contact-us'>
<div className='bottom-half'>
  <div class="image-container">
    <img src={calendar} alt="calendar" width={'60px'} />
    <div class="white-line"></div>
  </div>
  <h3>Schedule an Assessment</h3>
</div>
</a>


        </div>
      </div>
    </div>
  )
}

export default Banner