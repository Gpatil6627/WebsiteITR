import React from 'react';
import './ExploreNav.css'; // Optional separate styling

function ExploreNav() {
  return (
    <header className="explore-navbar">
      <nav className="explore-nav-links">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="#">Help</a>
        <a href="/explore">Explore</a>
        <a href="#">Login</a>
        <a href="#" className="signup">Sign Up</a>
      </nav>
    </header>
  );
}

export default ExploreNav;