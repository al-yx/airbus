import React from 'react';
import TestingVideoInput from '../../assets/TestingVideoInput.mp4';
import TestingVideoResult from '../../assets/TestingVideoResult.mp4';
import './VideoDetection.css';

const VideoDetection = () => (
  <div className="damageHeader">
    <h1 className="gradient__text">YOLOv8 Based Airplane Video Analysis and Damage Detection Model</h1>
    <div className="embed-container" id="detection">
      <div className="image-container">
        <a href="https://huggingface.co/spaces/bishalrauniyar/Yolov8based-VideoMotion-Aircraftdamagedetection">
          <video src={TestingVideoInput} alt="input" autoPlay loop muted className="video" />
        </a>
        <p className="caption">Input Video to check the damage</p>
      </div>
      <div className="image-container">
        <a href="https://huggingface.co/spaces/bishalrauniyar/Yolov8based-VideoMotion-Aircraftdamagedetection">
          <video src={TestingVideoResult} alt="output" autoPlay loop muted className="video" />
        </a>
        <p className="caption">Damage Detection of the Dent indentified with high accuracy in video format </p>
      </div>
    </div>
    <div className="image-container">
      <a href="https://github.com/bishalrauniyar/Aerothon6.0-YOLO-based-feature2-VideoAnalysis">
        <p className="caption">🔗Github link:https://github.com/bishalrauniyar/Aerothon6.0-YOLO-based-feature2-VideoAnalysis
        </p>
      </a>
    </div>

  </div>
);

export default VideoDetection;
