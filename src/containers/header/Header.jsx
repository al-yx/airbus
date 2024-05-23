import React, { useState } from 'react';
import people from '../../assets/people.png';
import './header.css';
import video from '../../assets/video.mp4';
import takeoff from '../../assets/takeoff.png';

const Header = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleKnowMoreClick = () => {
    if (!email.trim()) {
      setMessage('Please enter your email.');
    } else {
      setMessage('Your email has been stored. Thank you!');
      setEmail('');
    }
  };

  return (
    <div className="header section__padding" id="home">
      <div className="header-content">
        <h1 className="gradient__text">Team 8848 - Airbus: Committed to Innovations and Excellence </h1>
        <p>Trust our Innovations for a safer, more united world through sustainable aerospace advancements with cutting-edge technology.</p>

        <div className="input">
          <div className="header-content__input">
            <input
              type="email"
              placeholder="Enter your details"
              value={email}
              onChange={handleInputChange}
            />
            <button type="button" onClick={handleKnowMoreClick}>Know more</button>
          </div>
          {message && <p>{message}</p>}
        </div>

        <div className="header-content__people">
          <img src={people} />
          <p> Setting Records with 2000+ Orders for Commercial Aircrafts in 2023</p>
        </div>
      </div>

      <div className="header-image">
        <div className="videoDiv">
          <video src={video} autoPlay loop muted className="video" />
          <img src={takeoff} className="plane" />
        </div>
      </div>
    </div>
  );
};

export default Header;
