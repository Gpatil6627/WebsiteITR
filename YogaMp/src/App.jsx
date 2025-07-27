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
      </Routes>
    </Router>
    </div>
  );
}

export default App;