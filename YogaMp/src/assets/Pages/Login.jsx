// src/assets/pages/login/Login.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Nav3 from './assets/Components/loginnav.jsx'; // Adjust path according to your structure
import './Login.css';
<<<<<<< Updated upstream
import Nav3 from '../Components/LoginNav'; 
=======
>>>>>>> Stashed changes

function Login() {
  return (
    <div className="login-wrapper">
      <div className="bg-image"></div>
      <Nav3/>

      <div className="login-container">
        <h1>Step Into Wellness</h1>
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="input-group">
              <input type="email" required placeholder=" " id="email" />
              <label htmlFor="email">Enter Email</label>
            </div>
            <div className="input-group">
              <input type="password" required placeholder=" " id="password" />
              <label htmlFor="password">Enter Password</label>
            </div>
            {/* Corrected Button Text */}
            <button className="signup-btn" type="submit">Login</button>

            {/* React Router Link for Sign up */}
            <p className="switch">
<<<<<<< Updated upstream
              No Account? <a href="/signup">Sign up</a>
=======
              No Account? <Link to="/signup">Sign up</Link>
>>>>>>> Stashed changes
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
