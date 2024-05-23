/* eslint-disable max-len */
import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What are we doing?" text="We have deve comprehensive web application to address aircraft maintenance issues by detecting and assessing surface damage and identifying faulty wires in harnesses. Our product leverages advanced image detection using CNN and machine learning algorithms to identify wire faults, and assess damage severity. Additionally, it utilizes CAD 3D modeling for precise fault detettion. Our AI based software provides a comprehensive solution for aircraft repair and maintainance." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Fly Safe, Fly Airbus.</h1>
      <p>Dive Deep into our Technologies and Innovation</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Intelligent Repair Recommendations" text="Our Technical Support Chat Bot is designed to assist maintenance teams by generating precise repair recommendations based on the assessed damage and faulty wire locations. Leveraging advanced diagnostic algorithms, the chat bot provides actionable insights tailored to the specific needs of the aircraft." />
      <Feature title="Faulty Wire Location Identification System" text="Our model utilizes cutting-edge signal processing and advanced machine learning techniques to ensure the utmost safety and reliability in aircraft harnesses. This system not only pinpoints faulty wires with great accuracy but can also be integrated seamlessly with IoT devices for real-time monitoring and detection." />
      <Feature title="Path Finder 3D" text="We employed advanced algorithms to identify the shortest path between critical points, such as from functional identification numbers to specific locations on the aircraft surface. We utilized CAD 3D modeling to visualize the identified path and marked damage or faulty wiring with precision. We enhanced efficiency, accuracy, and safety in aircraft maintenance with PathFinder 3D." />
    </div>
  </div>
);

export default WhatGPT3;
