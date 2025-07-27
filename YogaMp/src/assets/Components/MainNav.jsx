import React from 'react';
import { Link } from 'react-router-dom';
import './MainNav.css';

function MainNav() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src="/images/logo.jpg" alt="Logo" />
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/help">Help</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup" className="signup">SignUp</Link>
      </nav>
    </header>
  );
}

export default MainNav;