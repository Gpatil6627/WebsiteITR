import React from 'react';
import './Home.css'; 

function Home() {
  return (
 <div>

        <div className="page-content">
      <video autoPlay muted loop id="bgVideo">
        <source src="/images/video2.mp4" type="video/mp4" />
      </video>

      <section className="hero">
        <div className="hero-content">
          <h2 className="small-heading">Start a Happy Life</h2>
          <p className="Main-heading">
            Transform Your Mind,<br/>Body & Soul—One Breath at a Time
          </p>
          <a href="/explore" className="get-started-btn">Get Started</a>
        </div>
      </section>

      <section className="bottom">
        <div className="bottom-img">
          <img src='/images/hm.png' className="hm" alt="yogaWomen" />
        </div>
        <div className="right">
          <h2>
            Shape Your<br /><span>Perfect Body with YogaTattva</span>
          </h2>
          <p className="quote">
            Yoga is a light, which once lit will never dim.<br />
            The better your <em>practice</em>, the brighter your <em>flame</em> with YogaTattva
          </p>
          <div className="stats">
            <div className="stat-box">
              <img src="/images/client.png" alt="Client Icon" className="icon-img" />
              <h3>99+</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-box">
              <img src="/images/asan.png" alt="Asan Icon" className="icon-img" />
              <h3>25+</h3>
              <p>Unique Asanas</p>
            </div>
            <div className="stat-box">
              <img src="/images/video.png" alt="Video Icon" className="icon-img" />
              <h3>35+</h3>
              <p>Video Tutorials</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}

export default Home;