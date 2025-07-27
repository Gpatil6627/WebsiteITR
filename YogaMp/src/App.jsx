<<<<<<< Updated upstream
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page Components
import Home from './assets/Pages/Home';
import About from './assets/Pages/About';
import Explore from './assets/Pages/Explore';
import Login from './assets/Pages/Login';

// Navbar Components
import MainNav from './assets/Components/MainNav';
import ExploreNav from './assets/Components/ExploreNav';
import Nav3 from './assets/Components/LoginNav';
import YogaMantras from './assets/Pages/Mantra';

function App() {
  return (
    <div style={{ minHeight: '100vh', overflowY: 'auto' }}>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainNav />
              <Home />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <MainNav />
              <About />
            </>
          }
        />
        <Route
          path="/explore"
          element={
            <>
              <ExploreNav />
              <Explore />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Nav3 />
              <Login />
            </>
          }
        />
        <Route
  path="/mantras"
  element={
    <>
      <ExploreNav />
      <YogaMantras />
    </>
  }
/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
=======

import React from 'react';
import { Link } from 'react-router-dom';
import './loginnav.css';

const Nav3 = () => {
  return (
    <header className="navbar login-navbar">
      <div className="logo">YogaTattva</div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
      </ul>
    </header>
  );
};

export default Nav3;
>>>>>>> Stashed changes
