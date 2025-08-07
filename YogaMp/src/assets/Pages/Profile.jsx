import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./profile.css";

const goalsList = [
  "Stress Relief", "Build Strength", "Improve Flexibility", "Mindfulness & Meditation",
  "Boost Energy", "Sleep & Recovery", "Spiritual Growth", "Balance & Stability"
];

const yogaTipsData = {
  "Stress Relief": [
    { icon: "🧘‍♂", text: "Prioritize breathwork: Start with 5 minutes of deep diaphragmatic breathing before asanas." },
    { icon: "🕯", text: "Create a calming space: Use soft lighting, gentle music, or nature sounds." },
    { icon: "😌", text: "Choose restorative poses: Include Child’s Pose, Legs-up-the-wall, and Reclining Bound Angle." },
    { icon: "🔔", text: 'Incorporate mantra repetition: Simple chants like “Om Shanti” can soothe the nervous system.' },
    { icon: "🌿", text: "Practice consistently: Even 10 minutes daily can reset your stress response." }
  ],
  "Build Strength": [
    { icon: "🏋‍♂", text: "Incorporate poses like Plank, Warrior, and Chair for strength." },
    { icon: "🔁", text: "Hold each posture for up to 30 seconds." },
    { icon: "☀", text: "Include Sun Salutations to engage multiple muscle groups." },
    { icon: "⬆", text: "Gradually increase intensity and repetitions." }
  ],
  "Improve Flexibility": [
    { icon: "🦋", text: "Practice poses like Forward Fold, Downward Dog, and Pigeon daily." },
    { icon: "⏳", text: "Hold stretches longer, focusing on breath." },
    { icon: "🤸", text: "Add gentle dynamic stretches to your flow." }
  ],
  "Mindfulness & Meditation": [
    { icon: "🧘‍♀", text: "Begin each session with 5 minutes of seated meditation." },
    { icon: "🕉", text: "Focus on breath and bodily sensations during asanas." },
    { icon: "🔄", text: "Practice body scan relaxations in Savasana." }
  ],
  "Boost Energy": [
    { icon: "☀", text: "Do energizing flows like Sun Salutations in the morning." },
    { icon: "💨", text: "Practice Kapalabhati (Skull-Shining Breath) for an instant boost." },
    { icon: "📈", text: "Incorporate backbends like Cobra and Bridge." }
  ],
 "Sleep & Recovery": [
    { icon: "🛏", text: "End your day with Yoga Nidra or gentle supine twists." },
    { icon: "🌙", text: "Practice deep breathing (4-7-8 technique) before bed." },
    { icon: "🧸", text: "Use props for added comfort and support." }
  ],
  "Spiritual Growth": [
    { icon: "☸", text: "Include mantra chanting & intention-setting before your practice." },
    { icon: "🌼", text: "Journal after yoga to reflect on insights and gratitude." },
    { icon: "🙏", text: "Practice heart-opening poses like Camel and Bridge." }
  ],
  "Balance & Stability": [
    { icon: "⚖", text: "Work on poses like Tree, Warrior III, and Eagle." },
    { icon: "👣", text: "Focus on grounding through feet and core engagement." },
    { icon: "🔄", text: "Practice slowly and mindfully for both sides." }
  ]

};

export default function ProfilePage() {
  const [inputGoal, setInputGoal] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [age] = useState(18);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(`http://localhost:4201`);
        if (response.data && response.data.name) {
          setName(response.data.name);
          console.log(response.data.name);
        } else {
          setName("");
          console.log("No name found in response:", response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);

  const handleGo = () => {
    const normalized = inputGoal.trim().toLowerCase();
    const match = goalsList.find(g => g.toLowerCase() === normalized);
    if (match) {
      setShowCard(false);
      setTimeout(() => {
        setSelectedGoal(match);
        setShowCard(true);
      }, showCard ? 360 : 0);
    } else {
      setShowCard(false);
      setSelectedGoal("");
      alert("Please type a goal exactly as listed.");
    }
  };

  return (
    <div className="profile-scroll-root">
      <header className="profile-header">
        <div className="logo-area">
          <img src="/images/logo.jpg" className="logo" alt="Logo" />
        </div>
        <nav className="nav1-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#help">Help</a>
          <Link to="/explore" state={{ fromProfile: true }}>Explore</Link>
          <a href="/logout" className="logout-link">Log out</a>
        </nav>
      </header>

      <section className="profile-hero">
        <div className="bg1-image"></div>
        <div className="profile-avatar-outer">
          <div className="profile-avatar-inner">
            <svg height="74" width="74" viewBox="0 0 100 100">
              <circle cx="50" cy="40" r="30" fill="#e8d1bc" />
              <ellipse cx="50" cy="82" rx="27" ry="20" fill="#a7a2a8" />
            </svg>
          </div>
        </div>
        <div className="profile-name-card">
          <div className="profile-name">{name || "Loading..."}</div>
          <span className="view-profile-link">View profile</span>
        </div>
      </section>

      <section className="profile-favourites-section">
        <div className="favourites-title">My Favouriates</div>
        <div className="favourites-desc">
          Those are the poses your soul chose to remember
        </div>
      </section>

      <section className="yoga-center-section">
        <div className="yoga-center-title">Want personalized Yoga tips?</div>
        <div className="yoga-card-outer">
          <div className="yoga-goal-col">
            <div className="yoga-goal-label"><b>Goal</b></div>
            <ul className="goal-list">
              <li>⚡ Stress Relief</li>
              <li>💪 Build Strength</li>
              <li>🤸 Improve Flexibility</li>
              <li>🧘‍♀ Mindfulness & Meditation</li>
              <li>🔋 Boost Energy</li>
              <li>🛏 Sleep & Recovery</li>
              <li>🌱 Spiritual Growth</li>
              <li>⚖ Balance & Stability</li>
            </ul>
            <div className="goal-input-label">Enter your Goal</div>
            <input
              className="goal-input"
              value={inputGoal}
              onChange={e => setInputGoal(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleGo()}
              autoComplete="off"
            />
            <button className="letsgo-btn" onClick={handleGo}>Let's Go</button>
          </div>
        </div>
      </section>

      {selectedGoal && (
        <div className={`tips-popup ${showCard ? "show animated-card" : ""}`} key={selectedGoal}>
          <div className="tips-popup-hl">Hello {name || "Friend"}..!</div>
          <div className="tips-popup-head-row">
            <span className="tips-icon">🎯</span>
            <span><span className="tips-goal-label">Goal :</span> <span className="tips-goal-val">{selectedGoal}</span></span>
            <span className="tips-age-label">👥 Age: {age}</span>
          </div>
          <div className="tips-popup-mid-dot"></div>
          <div className="tips-popup-title">Your Personalized Yoga Lifestyle Tips</div>
          <div className="tips-popup-card">
            <ul>
              {yogaTipsData[selectedGoal].map((item, idx) => (
                <li key={idx}><span className="tipicon">{item.icon}</span> {item.text}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div style={{ height: 36 }}></div>
    </div>
  );
}