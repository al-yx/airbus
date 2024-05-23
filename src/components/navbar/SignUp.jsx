import React, { useState } from 'react';

const SignUp = ({ onSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if (!email || !password) {
      setError('Please fill in all fields');
    } else {
      const storedUser = localStorage.getItem(email);
      if (storedUser) {
        setError('User already exists');
      } else {
        const userData = { email, password };
        localStorage.setItem(email, JSON.stringify(userData));
        onSignUp(userData);
        setError('');
      }
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="button" onClick={handleSignUp}>Sign Up</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignUp;
