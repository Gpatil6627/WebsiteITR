import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page Components
import Home from './assets/Pages/Home';
import About from './assets/Pages/About';
import Explore from './assets/Pages/Explore';
import Login from './assets/Pages/Login';
import PG from './assets/Pages/pranayama';
import MG from './assets/Pages/meditation';
import HelpPage from './assets/Pages/Help';
import ProfilePage from './assets/Pages/Profile';
import SignUp from './assets/Pages/Signup';
import Asan from "./assets/Pages/Asan";
import YogaMantras from './assets/Pages/Mantra';

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
            <Route
              path="/signup"
              element={
                <>
                  <MainNav />
                  <SignUp />
                </>
              }
            />
            <Route
              path="/profile"
              element={<ProfilePage />}
            />
            <Route
              path="/help"
              element={
                <>
                  <Nav3 />
                  <HelpPage />
                </>
              }
            />
            <Route
              path="/pranayama"
              element={
               
                  <>
                    <ExploreNav />
                    <PG />
                  </>
              }
            />
            <Route
              path="/meditation"
              element={
               
                  <>
                    <ExploreNav />
                    <MG />
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
            <Route
              path="/asan"
              element={
             
                  <>
                    <ExploreNav />
                    <Asan />
                  </>
               
              }
            />
          </Routes>
        </Router>
  
    </div>
  );
}

export default App;