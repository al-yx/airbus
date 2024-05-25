import React from 'react';
// import { useNavigate } from 'react-router-dom';

import Damage from '../../containers/damageAssesment/Damage';
import Contact from '../../containers/contactUs/ContactUs';
import VideoDetection from '../../containers/videoDetection /VideoDetection';
import CnnModal from '../../containers/cnnModal/CnnModal';

import { Footer, Possibility, WhatGPT3, Header } from '../../containers';
import Navbar from '../navbar/Navbar';

import './landingPage.css';

function LandingPage() {
  // const navigate = useNavigate();
  // navigate('/modelViewer');

  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <WhatGPT3 />
      <CnnModal />
      <Damage />
      <VideoDetection />
      <Contact />
      <Possibility />
      <Footer />
      <div className="chatbot">
        <iframe src="https://al-yx.github.io/chatbot/" style={{ border: 'none', borderRadius: '15px' }} width="100%" height="600px" title="chatbot" />
      </div>
    </div>
  );
}

export default LandingPage;
