import React, { useState, useContext } from 'react'; 
import ExploreNav from '../Components/ExploreNav';
import { useLocation, useNavigate } from "react-router-dom";
import './Explore.css';



function Explore() {
const location = useLocation();
const navigate = useNavigate();
const validSources = ['fromProfile', 'fromAsanas', 'fromMeditation', 'fromPranayama', 'fromMantra'];
const cameFrom = validSources.some(source => location.state?.[source] === true);
  return (
    <div>
      {/* Explore Header */}
      <section className="explore-header">
        <ExploreNav />
        <div className="explore-logo">
          <img src="/images/logo.jpg" alt="Yoga Logo" />
        </div>
        <h1 className="main-heading">Explore Your Yoga Journey</h1>
        <p className="subheading">
          <i><b>Discover ancient practices for modern living. Find peace, strength and balance</b></i>
        </p>
      </section>

      {cameFrom ? (
        <section className="yoga-cards-container">
          <div className="yoga-card" >
            <img src="/images/yoga1.png" alt="Yoga Asanas" />
            <h2>Yoga Asanas</h2>
            <p>Explore over 50 traditional yoga poses with detailed instructions, benefits, and variations.</p>
           <a href="/asan">Explore <span>→</span></a>
          </div>

          <div className="yoga-card" >
            <img src="/images/meditation.png" alt="Meditation and Mindfulness" />
            <h2>Meditation & Mindfulness</h2>
            <p>Guided sessions from 3 to 60 minutes to cultivate presence and inner calm.</p>
             <a href="/meditation">Explore <span>→</span></a>
            
          </div>

          <div className="yoga-card">
            <img src="/images/pranayam.png" alt="Pranayama" />
            <h2>Pranayama</h2>
            <p>Master the ancient art of yogic breathing techniques for vitality and focus.</p>
           <a href="/pranayama">Explore <span>→</span></a>
          </div>

          <div className="yoga-card">
            <img src="/images/mantra.png" alt="Mantra Library" />
            <h2>Mantra Library</h2>
            <p>Collection of powerful mantras with meanings, pronunciations, and audio recordings.</p>
            <a href="/mantras">Explore <span>→</span></a>
          </div>


        </section>
      ) : (
        <section className="explore-lock-msg">
          <div className="modal-box">
            <p className="modal-text">🚫 Access denied.<br />Please Login to unlock content.</p>
            <button className="modal-button" onClick={() => navigate("/login")}>Get Logged in</button>
          </div>
        </section>
      )}
    </div>
  );
}
export default Explore;