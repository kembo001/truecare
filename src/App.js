// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import 'Routes' here
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/pages/Home/Home';
import './App.css';
import Hospice from './components/pages/Services/Hospice';
import HomeHealth from './components/pages/HomeHealth/HomeHealth'
import Contact from './components/pages/Contact/Contact';
import About from './components/pages/About/Aboutus';
import Testimonial from './components/pages/Testimonials/Testimonial';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes> 
          <Route path="/" element={<Home />} /> 
        </Routes>
        <Routes> 
          <Route path="/services" element={<Hospice />} /> 
        </Routes>
        <Routes> 
          <Route path="/home-health" element={<HomeHealth />} /> 
        </Routes>

        <Routes> 
          <Route path="/testimonials" element={<Testimonial />} /> 
        </Routes>
        <Routes> 
          <Route path="/about" element={<About />} /> 
        </Routes>
        <Routes> 
          <Route path="/contact-us" element={<Contact />} /> 
        </Routes>
<Footer />
      </div>
    </Router>
  );
}

export default App;
