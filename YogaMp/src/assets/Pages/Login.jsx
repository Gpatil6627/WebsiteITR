import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

import Nav3 from '../Components/LoginNav';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:4201/login',
        { email, password },
        {
          withCredentials: true, // ✅ Required to send session cookie
        }
      );

      alert(response.data.message);
      console.log('Login success:', response.data);

      // ✅ Optional: Store username in localStorage
      localStorage.setItem('username', response.data.name);

      navigate('/profile');
    } catch (err) {
      console.error('Login error:', err);
      alert(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="bg-image"></div>
      <Nav3 />

      <div className="login-container">
        <h1>Step Into Wellness</h1>
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <input
                type="email"
                required
                placeholder=" "
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Enter Email</label>
            </div>
            <div className="input-group">
              <input
                type="password"
                required
                placeholder=" "
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Enter Password</label>
            </div>

            <button className="signup-btn" type="submit">Login</button>

            <p className="switch">
              No Account? <Link to="/signup">Sign up</Link>
            </p>

            <button type="button" className="google-btn">
              <span className="google-icon"></span>
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
