import React from 'react'
import healthAidCard from '../assets/Health-aide-card.jpg'
import physicalTherapyCard from '../assets/Physical-therapy-card.jpg'
import skilledNursingCard from '../assets/Skilled-nursing-card.jpg'
import viewMoreServicesCard from '../assets/View-more-services-card.jpg'
import beravementSupportCard from '../assets/Bereavement-support-card.jpg'
import hospiceCareCoordinationCard from '../assets/Hospice-care-coordination-card.jpg'
import './cards.css'

function cards() {
  return (
    <div>
<div className='what-we-offer'>
<div className='home-title'>
<h3>What We Offer</h3>
        <h2>Our Available Services</h2>
        <p>We are excited to post content on the webstie. This space is reserved for more information about the company</p>
</div>
        <div className='what-we-offer-cards'>
            <h3 className='offer-title'>Home Health Services</h3>
            <div className='cards'>
                <div className='card'>
                    <h3>Skilled<span> Nursing</span></h3>
                    <p>This space is reserved for more information about the company.</p>
                    <img src={skilledNursingCard} alt="" />
                    <a className='button button-primary'>Find Out More</a>
                </div>
                <div className='card'>
                    <h3>Physical<span> Therapy</span></h3>
                    <p>This space is reserved for more information about the company.</p>
                    <img src={physicalTherapyCard} alt="" />
                              <a className='button button-primary'>Find Out More</a>

                </div>
                <div className='card'>
                    <h3>Home<span> Health Aide</span></h3>
                    <p>This space is reserved for more information about the company.</p>
                    <img src={healthAidCard} alt="" />
                              <a className='button button-primary'>Find Out More</a>

                </div>
                <div className='card'>
                    <h3>View more<span> Services</span></h3>
                    <p>This space is reserved for more information about the company.</p>
                    <img src={viewMoreServicesCard} alt="" />
                              <a className='button button-primary'>Find Out More</a>

                </div>
            </div>
            <div className='what-we-offer-cards'>
                <h3 className='offer-title'>Hospice Care Services</h3>
            <div className='cards'>
            <div className='card'>
                    <h3>Hospice<span> Coordination</span></h3>
                    <p>This space is reserved for more information about the company.</p>
                    <img src={hospiceCareCoordinationCard} alt="" />
                              <a className='button button-primary'>Find Out More</a>

                </div>
                <div className='card'>
                    <h3>Bereavement<span> Support</span></h3>
                    <p>This space is reserved for more information about the company.</p>
                    <img src={beravementSupportCard} alt="" />
                              <a className='button button-primary'>Find Out More</a>

                </div>
                <div className='card'>
                    <h3>View More<span> Services</span></h3>
                    <p>This space is reserved for more information about the company.</p>
                    <img src={viewMoreServicesCard} alt="" />
                              <a className='button button-primary'>Find Out More</a>

                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default cards