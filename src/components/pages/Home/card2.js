import React from 'react'
import './card2.css'
import healthAidCard from '../assets/Health-aide-card.jpg'
import physicalTherapyCard from '../assets/Physical-therapy-card.jpg'
import skilledNursingCard from '../assets/Skilled-nursing-card.jpg'
import viewMoreServicesCard from '../assets/View-more-services-card.jpg'
import beravementSupportCard from '../assets/Bereavement-support-card.jpg'
import hospiceCareCoordinationCard from '../assets/Hospice-care-coordination-card.jpg'

function card2() {
  return (
    <div>
        <div className='home-title'>
<h3>What We Offer</h3>
        <h2>Our Available Services</h2>
        <p>We are excited to post content on the webstie. This space is reserved for more information about the company</p>
</div>
<h3 className='offer-title'>Hospice Services</h3>

        <section class="articles">
  <article>
    <div class="article-wrapper">
      <figure>
        <img src={healthAidCard} alt="" />
      </figure>
      <div class="article-body">
        <h2>Palliative<span> Care</span></h2>
        <p>
        Our experienced team specializes in palliative care, focusing on pain management and symptom relief to ensure the utmost comfort for patients with life-limiting illnesses. We prioritize your well-being throughout your journey.        </p>
        <a href="/services" class="read-more">
          Find Out More <span class="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
  <article>

    <div class="article-wrapper">
      <figure>
        <img src={physicalTherapyCard} alt="" />
      </figure>
      <div class="article-body">
        <h2>Emotional<span> Psychological</span></h2>
        <p>
        At our hospice, we understand the emotional challenges that patients and their families face. We offer compassionate counseling and bereavement support to help you navigate this difficult time, providing solace and understanding.        </p>
        <a href="/services" class="read-more">
        Find Out More <span class="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
  <article>

    <div class="article-wrapper">
      <figure>
        <img src={skilledNursingCard} alt="" />
      </figure>
      <div class="article-body">
        <h2>Personalized<span> Care Plans</span></h2>
        <p>
        Our approach to hospice care is individualized. We create customized care plans that address the unique physical, emotional, and spiritual needs of each patient, ensuring that your preferences and goals are respected and supported.        </p>
        <a href="/services" class="read-more">
        Find Out More <span class="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
  
</section>

<h3 className='offer-title'>Home Health Services</h3>

<section class="articles">
  <article>
    <div class="article-wrapper">
      <figure>
        <img src={viewMoreServicesCard} alt="" />
      </figure>
      <div class="article-body">
        <h2>Skilled<span> Nursing</span></h2>
        <p>
        Our skilled nurses provide expert medical care in the comfort of your home. This includes wound care, medication management, and monitoring of complex health conditions. With us, you receive top-notch healthcare where you're most comfortable.        </p>
        <a href="/home-health" class="read-more">
          Find Out More <span class="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
  <article>

    <div class="article-wrapper">
      <figure>
        <img src={beravementSupportCard} alt="" />
      </figure>
      <div class="article-body">
        <h2>Physical<span> Therapy</span></h2>
        <p>
        Our dedicated therapists work closely with patients to create personalized rehabilitation plans. By offering physical and occupational therapy, we help you regain or enhance your mobility and daily living skills, fostering independence in the comfort of your own home.        </p>
        <a href="/home-health" class="read-more">
        Find Out More <span class="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>

  <article>

<div class="article-wrapper">
  <figure>
    <img src={hospiceCareCoordinationCard} alt="" />
  </figure>
  <div class="article-body">
    <h2>Assisting<span> Daily Living</span></h2>
    <p>
    Our professional home health aides play a crucial role in assisting with daily living activities. They provide personal care, including bathing, dressing, and grooming, as well as support with meal preparation and medication reminders. Our aides contribute to your overall well-being, ensuring a higher quality of life at home.
    </p>
    <a href="/home-health" class="read-more">
    Find Out More <span class="sr-only">about this is some title</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
</article>
</section>
    </div>
  )
}

export default card2