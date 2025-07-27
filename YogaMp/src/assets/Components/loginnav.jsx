import React from 'react';
import './loginnav.css'; // create this if needed

const Nav3 = () => {
  return (
    <header className="navbar login-navbar">
      <div className="logo">YogaTattva</div>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/explore">Explore</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="#">SignUp</a></li>
      </ul>
    </header>
  );
};

export default Nav3;