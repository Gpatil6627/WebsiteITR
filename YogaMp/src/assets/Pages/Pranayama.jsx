// PranayamaGallery.jsx
import React, { useState } from 'react';
import './Pranayama.css';

const pranayamas = [
  {
    title: 'Nadi Shodhana',
    image: '/images/nadishodhana (2).png',
    description: 'Nadi Shodhana, or alternate nostril breathing, is a simple yogic technique for calming the mind and balancing energy. It helps reduce stress, enhances focus, and is safe for most people—making it perfect before meditation or whenever you need quick relaxation and clarity',
  },
  {
    title: 'Bhastrika',
    image: '/images/Bhastrika1.jpeg',
    description: 'Bellows Breath” uses strong inhales and exhales to increase oxygen, warmth, and overall vitality quickly.',
  },
  {
    title: 'Kapalbhati',
    image: '/images/Kapalabhati.jpeg',
    description: 'Expel air with sharp forceful exhales, purifying lung and abdominal systems while energizing body & mind',
  },
  {
    title: 'Bhramari',
    image: '/images/Bhramari (2).png',
    description: 'Gentle humming to soothe and center thoughts.',
  },
  {
    title: 'Ujjayi',
    image: '/images/Ujjayi-Pranayama.jpg',
    description: 'Oceanic breathing for warmth and focus.',
  },
  {
    title: 'Surya Bhedana',
    image: '/images/surya bhedna.jpg',
    description: 'Right-nostril inhale to boost alertness.',
  },
  {
    title: 'Sheetali',
    image: '/images/Sheetali Pranayama.jpeg',
    description: 'Tongue roll to cool body and mind.',
  },
  {
    title: 'Sheetkari',
    image: '/images/Sheetkari-Pranayama.jpg',
    description: 'Hissing breath to relax instantly.',
  },
];

const PG= () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [liked, setLiked] = useState(Array(pranayamas.length).fill(false));

  const toggleInfo = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const toggleLike = (index) => {
    const newLikes = [...liked];
    newLikes[index] = !newLikes[index];
    setLiked(newLikes);
  };

  return (
    <>
    <div className="bg-gradient"></div>
    <div className="container">
      <nav className="nav-back">
        <a href="/Explore">← Back to Explore</a>
      </nav>
      <header>
        <h1>Pranayam & Breathing Techniques</h1>
        <p>Explore 8 powerful pranayamas — breathe deep, feel renewed.</p>
      </header>
      <section className="meditation-types">
        {pranayamas.map((p, i) => (
          <div key={i} className="meditation-card">
            <img src={p.image} alt={p.title} />
            <h2>{p.title}</h2>
            <div className="actions">
              <button className="info-btn" onClick={() => toggleInfo(i)}>Info</button>
              <button className="heart-btn" onClick={() => toggleLike(i)}>
                <span className="wishlist-icon">{liked[i] ? '♥' : '♡'}</span>
              </button>
            </div>
            {activeIndex === i && (
              <div className="info-panel show">{p.description}</div>
            )}
          </div>
        ))}
      </section>
    </div>
  
    </>
  );
};

export default PG;