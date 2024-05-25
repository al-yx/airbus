import React from 'react';
import './Damage.css';
import inputImage from '../../assets/inputImage.png';
import imageDetection from '../../assets/imageDetection.png';

const Damage = () => (
  <div className="damageHeader">
    <h1 className="gradient__text">YOLOv8 Based Airplane Image Analysis and Damage Detection Model</h1>
    <div className="embed-container" id="detection">
      <div className="image-container">
        <a href="https://huggingface.co/spaces/bishalrauniyar/Yolov8based-ImageAircraftdamagedetection">
          <img src={inputImage} alt="input" />
        </a>
        <p className="caption">Input field to check the damage</p>
      </div>
      <div className="image-container">
        <a href="https://huggingface.co/spaces/bishalrauniyar/Yolov8based-ImageAircraftdamagedetection">
          <img src={imageDetection} alt="output" />
        </a>
        <p className="caption">Image Analysis and Damage Detection Model with high accuracy </p>
      </div>

    </div>
    <div className="image-container">
      <a href="https://github.com/bishalrauniyar/Aerothon6.0-YOLO-based-feature1-ImageAnalysis">
        <p className="caption">🔗Github link: https://github.com/bishalrauniyar/Aerothon6.0-YOLO-based-feature1-ImageAnalysis</p>
      </a>
    </div>

  </div>
);

export default Damage;
