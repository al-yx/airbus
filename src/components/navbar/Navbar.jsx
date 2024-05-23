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
    backgroundColor: '#042c54',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',

  },
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [modalType, setModalType] = useState('');
  const [user, setUser] = useState(null);

  const handleSignIn = (userData) => {
    setUser(userData);
    setModalType('SIGN_IN');
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
          <p><a href="#detection">Image Detection</a></p>
          <p><a href="#features">3D model</a></p>
          <p><a href="#blog">Contact us</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">

        <button type="button" onClick={() => setModalType('SIGN_IN')}>Sign In</button>
        <button type="button" onClick={() => setModalType('SIGN_UP')}>Sign Up</button>
        <Modal
          isOpen={modalType === 'SIGN_IN' || modalType === 'SIGN_UP'}
          onRequestClose={() => setModalType('')}
          contentLabel="User Authentication"
          style={customStyles}
        >
          {modalType === 'SIGN_IN' && <SignIn onSignIn={handleSignIn} />}
          {modalType === 'SIGN_UP' && <SignUp />}
          <button
            type="button"
            onClick={() => setModalType('')}
            className="close"
            style={{
              display: 'block',
              margin: '10px auto',
              textAlign: 'center',
              padding: '10px 20px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >Close
          </button>
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
            <button type="button" onClick={() => setModalType('SIGN_IN')}>Sign In</button>
            <button type="button" onClick={handleSignOut}>Sign Up</button>
            {modalType !== '' && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={() => { setModalType(''); }}>&times;</span>
                {modalType === 'SIGN_IN' && <SignIn onSignIn={handleSignIn} />}
                {modalType === 'SIGN_UP' && <SignUp />}
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
