import React from 'react';
import './Login.css';
import Nav3 from '../Components/LoginNav'; 

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
            <button className="signup-btn" type="submit">SignUp</button>
            <p className="switch">
              No Account? <a href="/signup">Sign up</a>
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