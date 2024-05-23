import React from 'react';
import './Damage.css';
import inputImage from '../../assets/inputImage.png';
import imageDetection from '../../assets/imageDetection.png';

const Damage = () => (
  <div className="damageHeader">
    <h1 className="gradient__text">Damage Detection using CNN model</h1>
    <div className="embed-container" id="detection">
      <div className="image-container">
        <a href="https://huggingface.co/spaces/bishalrauniyar/Yolov8basedAircraftdamagedetection">
          <img src={inputImage} alt="input" />
        </a>
        <p className="caption">Input field to check the damage</p>
      </div>
      <div className="image-container">
        <a href="https://huggingface.co/spaces/bishalrauniyar/Yolov8basedAircraftdamagedetection">
          <img src={imageDetection} alt="output" />
        </a>
        <p className="caption">Damage Detection of the Dent indentified with high accuracy </p>
      </div>
    </div>

  </div>
);

export default Damage;
