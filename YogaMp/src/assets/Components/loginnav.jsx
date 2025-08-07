import React from 'react';
import { Link } from 'react-router-dom';
import './LoginNav.css';

function Nav3() {
  return (
    <nav className="login-navbar">
      <div className="logo"></div>
      <ul className="login-nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/help">Help</Link></li>
         <li> <Link to="/login">Login</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
      </ul>
    </nav>
  );
}

export default Nav3;