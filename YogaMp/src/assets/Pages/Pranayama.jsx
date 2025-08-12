import React, { useState } from 'react';
import './Pranayama.css';
import { Link } from "react-router-dom";

const pranayamas = [
  {
    id: "21",
    title: 'Nadi Shodhana',
    image: '/images/nadishodhana (2).png',
    description: [
      "Steps:",
      "1. Close right nostril, inhale left.",
      "2. Close left nostril, exhale right.",
      "3. Repeat by alternating nostrils."
    ],
  },
  {
    id: "22",
    title: 'Bhastrika',
    image: '/images/Bhastrika1.jpeg',
    description: [
      "Steps:",
      "1. Inhale deeply through nose.",
      "2. Exhale forcefully through nose.",
      "3. Continue rapid breaths in succession."
    ],
  },
  {
    id: "23",
    title: 'Kapalbhati',
    image: '/images/Kapalabhati.jpeg',
    description: [
      "Steps:",
      "1. Take a deep breath in.",
      "2. Exhale forcefully via abdominal contraction.",
      "3. Let passive inhalation follow each exhale."
    ],
  },
  {
    id: "24",
    title: 'Bhramari',
    image: '/images/Bhramari (2).png',
    description: [
      "Steps:",
      "1. Inhale deeply.",
      "2. Exhale slowly with humming sound.",
      "3. Keep eyes closed and focus inward."
    ],
  },
  {
    id: "25",
    title: 'Ujjayi',
    image: '/images/Ujjayi-Pranayama.jpg',
    description: [
      "Steps:",
      "1. Slightly constrict throat.",
      "2. Inhale through nose with oceanic sound.",
      "3. Exhale slowly with same sound."
    ],
  },
  {
    id: "26",
    title: 'Surya Bhedana',
    image: '/images/surya bhedna.jpg',
    description: [
      "Steps:",
      "1. Inhale through right nostril.",
      "2. Exhale through left nostril.",
      "3. Repeat to build warmth and energy."
    ],
  },
  {
    id: "27",
    title: 'Sheetali',
    image: '/images/Sheetali Pranayama.jpeg',
    description: [
      "Steps:",
      "1. Roll tongue into a tube.",
      "2. Inhale through the tongue.",
      "3. Close mouth, exhale through nose."
    ],
  },
  {
    id: "28",
    title: 'Sheetkari',
    image: '/images/Sheetkari-Pranayama.jpg',
    description: [
      "Steps:",
      "1. Lightly clench teeth.",
      "2. Inhale through teeth with hissing sound.",
      "3. Exhale through the nose."
    ],
  },
];

const PG = ({ setSelectedPranayamId }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [wishlistedPG, setWishlistedPG] = useState([]);

  const toggleInfo = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const toggleWishlist = (id) => {
    setWishlistedPG((prev) =>
      prev.includes(id) ? prev.filter((wid) => wid !== id) : [...prev, id]
    );
  };

  const handleFav = (id) => {
    const selected = pranayamas.find((p) => p.id === id);
    const isWishlisted = wishlistedPG.includes(id);
    if (setSelectedPranayamId) {
      setSelectedPranayamId(id);
    }
    alert(`${selected.title} ${isWishlisted ? "removed from" : "added to"} wishlist!`);
  };

  return (
    <>
      <div className="bg-gradient"></div>
      <div className="container">
        <nav className="nav-back">
          <Link to="/profile" state={{ fromPranayama: true }}>
            ← Back to Profile
          </Link>
        </nav>
        <header>
          <h1>Pranayam & Breathing Techniques</h1>
          <p>Explore 8 powerful pranayamas — breathe deep, feel renewed.</p>
        </header>
        <section className="meditation-types">
          {pranayamas.map((p, i) => (
            <div key={p.id} className="meditation-card">
              <img src={p.image} alt={p.title} />
              <h2>{p.title}</h2>
              <div className="actions">
                <button className="info-btn" onClick={() => toggleInfo(i)}>Info</button>
                <button className="heart-btn" onClick={() => {
                  toggleWishlist(p.id);
                  handleFav(p.id);
                }}>
                  <span className={`heart-icon ${wishlistedPG.includes(p.id) ? "active" : ""}`}>
                    {wishlistedPG.includes(p.id) ? "♥" : "♡"}
                  </span>
                </button>
              </div>
              {activeIndex === i && (
                <div className="info-panel show">
                  {p.description.map((step, idx) => (
                    <p key={idx}>{step}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default PG;