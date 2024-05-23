import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from 'react-modal';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './navbar.css';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [user, setUser] = useState(null);

  const handleSignIn = (userData) => {
    setUser(userData);
    setShowSignInModal(false);
  };

  const handleSignOut = () => {
    setUser(null);
  };

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src="https://www.airbus.com/themes/custom/airbus_web_experience_ui/logo.svg" alt="Airbus Logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">Features</a></p>
          <p><a href="#possibility">3D Model</a></p>
          <p><a href="#features">Image Detection</a></p>
          <p><a href="#blog">Contact us</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">

        <button type="button" onClick={() => setShowSignInModal(true)}>Sign In</button>
        <button type="button" onClick={() => setShowSignUpModal(true)}>Sign Up</button>
        <Modal
          isOpen={showSignInModal}
          onRequestClose={() => setShowSignInModal(false)}
          contentLabel="Sign In Modal"
          className="modal-content"
          overlayClassName="modal-overlay"
          style={customStyles}

        >
          <SignIn onSignIn={handleSignIn} />
          <button type="button" onClick={() => setShowSignInModal(false)} className="close">Close</button>
        </Modal>
        <Modal
          isOpen={showSignUpModal}
          onRequestClose={() => setShowSignUpModal(false)}
          contentLabel="Sign Up Modal"
          className="modal-content"
          overlayClassName="modal-overlay"
          style={customStyles}

        >
          <SignUp />
          <button type="button" onClick={() => setShowSignUpModal(false)} className="close">Close</button>
        </Modal>
        {user && (
        <div className="user">
          <p>Welcome, {user.email}!</p>
          <button type="button" onClick={handleSignOut}>Sign Out</button>
        </div>
        )}

      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">Features</a></p>
            <p><a href="#possibility">3D Model</a></p>
            <p><a href="#features">Image Detection</a></p>
            <p><a href="#blog">Contact us</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <button type="button" onClick={() => setShowSignUpModal(true)}>Sign In</button>
            <button type="button" onClick={handleSignOut}>Sign Up</button>
            {(showSignUpModal || showSignUpModal) && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={() => { setShowSignUpModal(false); setShowSignUpModal(false); }}>&times;</span>
                {showSignUpModal && <SignIn onSignIn={handleSignIn} />}
                {showSignUpModal && <SignUp />}
              </div>
            </div>
            )}
            {user && (
            <div className="user">
              <p>Welcome, {user.email}!</p>
              <button type="button" onClick={handleSignOut}>Sign Out</button>
            </div>
            )}
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
