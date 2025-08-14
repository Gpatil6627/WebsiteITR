import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./profile.css";
import { ExpandableAsanaCard } from "./Asan";
import { ExpandableMantraCard } from "./Mantra";

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

export default function ProfilePage({ allAsanas, setAll, allMantras, setAllMantras, allPranayamas, setAllPranayamas, allMeditations, setAllMeditations }) {
  const [inputGoal, setInputGoal] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
 const flattenedAsanas = allAsanas?.flat() || [];
 const flattenedMantras = allMantras?.flat() || [];
 const flattenedPranayamas = allPranayamas?.flat() || [];
 const flattenedMeditations = allMeditations?.flat() || [];



  // ✅ Log for debugging
  console.log("Flattened Asanas:", flattenedAsanas);
  console.log("Flattened Mantras:", flattenedMantras);
  console.log("Flattened Pranayamas:", flattenedPranayamas); 
  console.log("Flattened Meditations:", flattenedMeditations); 






  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:4201/profile", {
          withCredentials: true
        });

        if (response.data && response.data.name) {
          setName(response.data.name);
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.error("Session error:", error);
        navigate('/login');
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:4201/logout', {}, {
        withCredentials: true
      });
      navigate('/login');
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

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
const [showProfileDetails, setShowProfileDetails] = useState(false);
const [profileDetails, setProfileDetails] = useState(null);
const [loadingProfile, setLoadingProfile] = useState(false);
const handleViewProfile = async () => {
  if (showProfileDetails) {
    setShowProfileDetails(false); // collapse if already open
    return;
  }

  setLoadingProfile(true);
  try {
    const response = await axios.get("http://localhost:4201/profile/details", {
      withCredentials: true
    });

    if (response.data) {
      setProfileDetails(response.data);
      setShowProfileDetails(true);
    }
  } catch (error) {
    console.error("Failed to fetch profile details:", error);
  } finally {
    setLoadingProfile(false);
  }
};
const [activeIndex, setActiveIndex] = useState(null);
const toggleInfo = (index) => { 
  setActiveIndex(index === activeIndex ? null : index);
};
  return (
    <div className="profile-scroll-root">
      {/* Header */}
      <header className="profile-header">
        <div className="logo-area">
          <img src="/images/logo.jpg" className="logo" alt="Logo" />
        </div>
        <nav className="nav1-links">
          <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/help">Help</Link>
                    <Link to="/login">Login</Link>
          <Link to="/explore" state={{ fromProfile: true }}>Explore</Link>
          <button onClick={handleLogout} className="logout-link">Log out</button>
        </nav>
      </header>

      {/* Hero */}
        <section className="profile-hero">
        <div className="bg1-image"></div>
        <div className="profile-name-card">
          <div className="profile-name">Hello {name || "Loading..."}...!</div>
          <span className="view-profile-link" onClick={handleViewProfile}>
            {showProfileDetails ? "Hide profile" : "View profile"}
          </span>
        </div>

        {showProfileDetails && (
          <div className="profile-details-card">
            {loadingProfile ? (
              <div className="loading-profile">Loading profile details...</div>
            ) : (
              <ul className="profile-details-list">
                <li><strong>Name:</strong> {profileDetails?.name}</li>
                <li><strong>Email:</strong> {profileDetails?.email}</li>
                <li><strong>UserName:</strong> {profileDetails?.username}</li>
                <li><strong>Address:</strong> {profileDetails?.address}</li>
              </ul>
            )}
          </div>
        )}
      </section>


<section className="profile-favourites-section">
  <div className="favourites-title">My Favourites</div>
  <div className="favourites-desc">
    These are the poses and mantras your soul chose to remember
  </div>

  <div className="card-grid">
    {/* Favourite Asanas */}
    {flattenedAsanas.length > 0 &&
      flattenedAsanas.map((asana, index) => (
        <ExpandableAsanaCard
          key={`asana-${asana.id}-${index}`}
          asana={asana}
          wishlisted={true}
          toggleWishlist={() => {}}
          setSelectedId={() => {}}
        />
      ))}

    {/* Favourite Mantras */}
    {flattenedMantras.length > 0 &&
      flattenedMantras.map((mantra, index) => (
        <ExpandableMantraCard
          key={`mantra-${mantra.id}-${index}`}
          mantra={mantra}
          wishlisted={true}
          toggleWishlist={() => {}}
          setSelectedMantraId={() => {}}
        />
      ))}
      {flattenedPranayamas.length > 0 &&
      flattenedPranayamas.map((pranayama, index) => (   
        <div key={`pranayama-${pranayama.id}-${index}`} className="meditation-card">
          <img src={pranayama.image} alt={pranayama.title} />
          <h2>{pranayama.title}</h2>
          <div className="actions">
             <button className="info-btn" onClick={() => toggleInfo(index)}>Info</button>
            <button className="heart-btn" onClick={() => {}}>
              <span className={`heart-icon active`}>♥</span>
            </button>
          </div>
          {activeIndex === index && (
          <div className="info-panel show">
            {pranayama.description.map((step, idx) => (
              <p key={idx}>{step}</p>
            ))} 
          </div>
          )}
        </div>
      ))}
    {flattenedMeditations.length > 0 &&
      flattenedMeditations.map((meditation, index) => (
        <div key={`meditation-${meditation.id}-${index}`} className="meditation-card">
          <img src={meditation.image} alt={meditation.title} />
          <h2>{meditation.title}</h2>
          <audio controls>
            <source src={meditation.audio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <div className="actions">
            <button className="info-btn" onClick={() => toggleInfo(index)}>Info</button>
            <button className="heart-btn" onClick={() => {}}>
              <span className={`heart-icon active`}>♥</span>
            </button>
          </div>
          {activeIndex === index && (
            <div className="info-panel show">
              {meditation.description}
            </div>
          )}
        </div>
      ))}

    {/* Empty State */}
    {flattenedAsanas.length === 0 && flattenedMantras.length === 0 &&  flattenedPranayamas.length==0 && flattenedMeditations.length==0 &&(
      <div className="no-favourites">No favourites selected yet.</div>
    )}
  </div>
</section>


      {/* Yoga Tips Section */}
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