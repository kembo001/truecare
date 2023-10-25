import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css';
import Cards from './card2'
import WelcomeMessage from './WelcomeMessage';
import Banner from './Banner';
import OurMission from './OurMission';
import SendUsMessage from './SendUsMessage';

function Home() {
  return (
    <div>
        <Banner />
      <Cards />
    <WelcomeMessage />
<OurMission />
<SendUsMessage />
    </div>
  );
}

export default Home;
