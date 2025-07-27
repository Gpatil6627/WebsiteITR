import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page Components
import Home from './assets/Pages/Home';
import About from './assets/Pages/About';
import Explore from './assets/Pages/Explore';

// Navbar Components
import MainNav from './assets/Components/MainNav';
import ExploreNav from './assets/Components/ExploreNav';

function App() {
  return (
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
      </Routes>
    </Router>
  );
}

export default App;