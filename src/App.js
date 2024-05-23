import React from 'react';

import { Footer, Blog, Possibility, WhatGPT3, Header } from './containers';
import { CTA, Navbar } from './components';

import './App.css';
import Damage from './containers/damageAssesment/Damage';
import Contact from './containers/contactUs/ContactUs';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <WhatGPT3 />
    <Damage />
    <Contact />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;
