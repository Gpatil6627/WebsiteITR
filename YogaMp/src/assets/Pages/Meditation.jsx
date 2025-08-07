import React, { useState } from "react";
import "./Meditation.css";
import { Link } from "react-router-dom";

const meditationData = [
  {
    title: "Mindfulness Meditation",
    image: "/images/mindfull.jpg",
    audio: "/images/mindfulness-meditation-195494.mp3",
    description:
      "Pay attention to your thoughts and sensations in the present moment, observing them non-judgmentally. Helps increase self-awareness and reduce stress; can be practiced anywhere, anytime.",
  },
  {
    title: "Mantra Meditation",
    image: "/images/Mantra1.jpg",
    audio: "/images/mantrameditation.mp3",
    description:
      'Involves the repetitive chanting of a word or phrase (like "Om") to clear the mind. The sound vibrations and repetition help cultivate a deep state of focus and awareness—suitable for those who like sound and repetition.',
  },
  {
    title: "Focused Meditation",
    image: "/images/focused.jpeg",
    audio: "/images/relaxingmeditation.mp3",
    description:
      "Concentrate on a single object, sound, or sensation (like a candle flame, mala beads, or breath). Sharpening focus and attention is the goal—ideal for those looking to improve concentration",
  },
  {
    title: "Movement Meditation",
    image: "/images/movement.jpeg",
    audio: "/images/movement.mp3",
    description:
      "A group or individual engaged in slow, mindful movement such as yoga, walking in nature, or practicing tai chi—body in gentle, flowing motion with full, present awareness",
  },
  {
    title: "Spiritual Meditation",
    image: "/images/spiritual1.jpeg", // Fixed spelling
    audio: "/images/meditationspiritual.mp3",
    description:
      "A person in meditative posture, often with hands in prayer or arms open, sometimes depicted with soft glowing light, suggesting a connection to a higher self or spiritual energy",
  },
  {
    title: "Transcendental Meditation",
    image: "/images/tran.jpeg",
    audio: "/images/tranmeditation.mp3",
    description:
      "A serene meditator, often with a soft smile and closed eyes, in a tranquil setting—sometimes depicted with abstract light or a sense of rising above ordinary awareness",
  },
  {
    title: "Prograssive Meditation",
    image: "/images/prograssive.jpeg",
    audio: "/images/prograssivemed.mp3",
    description:
      'A person lying comfortably, eyes closed, clearly at ease, pictured as "scanning" the body or systematically relaxing from head to toe.',
  },
  {
    title: "Love-Kindness Meditation",
    image: "/images/kindness.jpeg",
    audio: "/images/kindnessmed.mp3",
    description:
      "A meditator radiating kindness, sometimes surrounded by soft light or gentle imagery (e.g., hearts or peaceful expressions), visualizing or offering goodwill to self and others",
  },
];

function MG() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [liked, setLiked] = useState(Array(meditationData.length).fill(false));

  const toggleInfo = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const toggleLike = (index) => {
    const newLikes = [...liked];
    newLikes[index] = !newLikes[index];
    setLiked(newLikes);
  };

  return (
    <div>
      <div className="bg-gradient"></div>
      <div className="container">
        <nav style={{ marginBottom: "22px" ,
              fontSize: "1.05em",
              color: "#684ab0",
              textDecoration: "none",
              display: "inline-block",
              padding: "7px 18px",
              background: "#f3f0fc",
              borderRadius: "8px",
              boxShadow: "0 2px 8px #eee",
              fontWeight: "bold",
        }}>
          <Link to="/explore" state={{ fromMeditation: true }}> 
          ← Back to Explore</Link>
          </nav>
           

        <header>
          <h1>Meditation & Mindfulness</h1>
          <p>
            Explore 8 ways to calm your mind — listen, learn, and like your
            favorites!
          </p>
        </header>

        <section className="meditation-types">
          {meditationData.map((med, i) => (
            <div className="meditation-card" key={i}>
              <img src={med.image} alt={med.title} />
              <h2>{med.title}</h2>
              <audio controls>
                <source src={med.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <div className="actions">
                <button className="info-btn" onClick={() => toggleInfo(i)}>
                  Info
                </button>
                <button
                  className={`heart-btn${liked[i] ? " liked" : ""}`}
                  onClick={() => toggleLike(i)}
                  aria-label="Like"
                >
                  <span className="wishlist-icon">
                    {liked[i] ? "♥" : "♡"}
                  </span>
                </button>
              </div>
              <div
                className={`info-panel${activeIndex === i ? " show" : ""}`}
                style={{ position: "absolute" }}
              >
                {med.description}
              </div>
            </div>
          ))}
        </section>
      </div>
      
    </div>
  );
}

export default MG;
