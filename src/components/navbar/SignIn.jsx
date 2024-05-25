import React, { useState } from 'react';
import './SignIn.css';

const SignIn = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = () => {
    const storedUser = localStorage.getItem(email);
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      if (userData.password === password) {
        onSignIn(userData);
        setError('');
      } else {
        setError('Incorrect password');
      }
    } else {
      setError('User not found');
    }
  };

  return (
    <div className="sign-in-container">
      <h2 className="gradient__text">Sign In</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button
        type="button"
        onClick={handleSignIn}
      >Sign In
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignIn;
