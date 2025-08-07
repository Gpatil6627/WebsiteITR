import React, { useState } from "react";
import "./Asan.css";
import { Link } from "react-router-dom";

const Asan = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [timeFilter, setTimeFilter] = useState("All");
  const [wishlistedAsanas, setWishlistedAsanas] = useState([]);

  const asanas = [
    {
      id: 1,
      title: "Tadasana",
      image: "/images/tadasan.png",
      time: "Morning",
      steps: ["Stand tall", "Arms at sides", "Engage thighs", "Hold 30s"],
      benefits: ["Improves posture", "Increases focus"]
    },
    {
      id: 2,
      title: "SuryaNamaskar",
      image: "/images/surya.png",
      time: "Morning",
      steps: ["Mountain Pose", "Forward Bend", "Plank", "Cobra", "Downward Dog"],
      benefits: ["Full-body warm-up", "Improves flexibility"]
    },
    {
      id: 3,
      title: "Bhujangasana",
      image: "/images/Bhujanga.png",
      time: "Morning",
      steps: ["Lie flat", "Hands under shoulders", "Lift chest", "Hold"],
      benefits: ["Strengthens spine", "Relieves stress"]
    },
    {
      id: 4,
      title: "Paschimottanasana",
      image: "/images/paschi.png",
      time: "Afternoon",
      steps: ["Sit tall", "Inhale and raise arms", "Exhale forward", "Hold"],
      benefits: ["Relieves anxiety", "Improves digestion"]
    },
    {
      id: 5,
      title: "Viparita Karani",
      image: "/images/viparita.png",
      time: "Afternoon",
      steps: ["Lie on back", "Raise legs", "Support hips", "Relax"],
      benefits: ["Improves blood flow", "Relieves tired legs"]
    },
    {
      id: 6,
      title: "Vrikasana",
      image: "/images/Vrikasan.png",
      time: "Afternoon",
      steps: ["Stand tall", "Foot on thigh", "Hands overhead", "Balance"],
      benefits: ["Improves balance", "Strengthens legs"]
    },
    {
      id: 7,
      title: "Balasana",
      image: "/images/balasan.png",
      time: "Evening",
      steps: ["Kneel on mat", "Fold forward", "Arms forward", "Rest"],
      benefits: ["Calms mind", "Relieves fatigue"]
    },
    {
      id: 8,
      title: "Baddha Konasana",
      image: "/images/Baddha.png",
      time: "Evening",
      steps: ["Sit down", "Join feet", "Hold ankles", "Straight spine"],
      benefits: ["Opens hips", "Improves flexibility"]
    },
    {
      id: 9,
      title: "Shavasana",
      image: "/images/shavasan.png",
      time: "Evening",
      steps: ["Lie flat", "Arms at sides", "Palms up", "Relax"],
      benefits: ["Reduces stress", "Improves concentration"]
    },
     {
      id: 10,
      title: "Utkatasana",
      image: "/images/Utkasan.png",
      time: "Morning",
      steps: ["Stand with feet together, arms at your sides.",
              "Inhale, raise arms overhead, palms face each other.",
               "Exhale, bend knees as if sitting in a chair.",
               "Keep chest lifted, thighs engaged.",
               "Hold for 30 seconds, breathe deeply."
          ],
      benefits: ["Reduces stress", " Strengthens legs, glutes, and core"]
    }
  ];

  const toggleWishlist = (id) => {
    setWishlistedAsanas((prev) =>
      prev.includes(id) ? prev.filter((wid) => wid !== id) : [...prev, id]
    );
  };

  const filteredAsanas = asanas.filter((asana) => {
    const matchesSearch = asana.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTime = timeFilter === "All" || asana.time === timeFilter;
    return matchesSearch && matchesTime;
  });

  return (
    <div className="container">
    <div className="asana-section">
      <div className="header">
      <div className="bg-gradient"></div>
        <div className='Nav'>
          <div className="nav-back">
       <Link to="/explore" state={{ fromAsanas: true }}> 
          ← Back to Explore</Link>
      </div>
        </div>
        <h1>Yoga Asana</h1>
        <div className="filter-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select value={timeFilter} onChange={(e) => setTimeFilter(e.target.value)}>
            <option value="All">All Time</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>
        </div>
      </div>
      </div>

      <div className="card-grid">
        {filteredAsanas.map((asana) => (
          <ExpandableAsanaCard
            key={asana.id}
            asana={asana}
            wishlisted={wishlistedAsanas.includes(asana.id)}
            toggleWishlist={() => toggleWishlist(asana.id)}
          />
        ))}
      </div>
    </div>
  );
};

const ExpandableAsanaCard = ({ asana, wishlisted, toggleWishlist }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="asana-card">
      <img src={asana.image} alt={`Image of ${asana.title}`} />
      <div className="asana-info">
        <p className="asana-time">{asana.time}</p>
        <h3 className="asana-title">{asana.title}</h3>
        <button className="view-btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Hide Details" : "View Details"}
        </button>
        <span
          className={`heart-icon ${wishlisted ? "active" : ""}`}
          onClick={toggleWishlist}
        >
         {wishlisted ? '♥' : '♡'}
        </span>

        {expanded && (
          <div className="asana-details">
            <h4>Steps</h4>
            <ul>{asana.steps.map((step, i) => <li key={i}>{step}</li>)}</ul>
            <h4>Benefits</h4>
            <ul>{asana.benefits.map((b, i) => <li key={i}>{b}</li>)}</ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Asan;
