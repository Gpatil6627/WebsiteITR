import React, { useState, useEffect } from "react";
import "./Mantra.css";
import { Link } from "react-router-dom";

const YogaMantras = ({ sendMantrasToParent, setSelectedMantraId }) => {
  const [wishlistedMantras, setWishlistedMantras] = useState([]);

  const mantras = [
    {
      id: "11",
      title: "Om Mantra",
      image: "/images/om.png",
      description: "ॐ",
    },
    {
      id: "12",
      title: "Shanti Mantra",
      image: "/images/shanti.png",
      description: `ॐ सह नाववतुः\nसह नौ भुनक्तु\nसह वीर्यं करवावहै\nतेजस्वि नावधीतमस्तु मा विद्विषावहै\nॐ शान्तिः शान्तिः शान्तिः ॥`,
    },
    {
      id: "13",
      title: "Patanjali Mantra",
      image: "/images/patanjali.png",
      description: `योगेन चित्तस्य पदेन वाचां\nमलं शरीरस्य च वैद्यकेन\nयोऽपाकरोत्तं प्रवरं मुनीनां\nपतञ्जलिं प्राञ्जलिरानतोऽस्मि ॥`,
    },
    {
      id: "14",
      title: "Gayatri Mantra",
      image: "/images/gayatri.png",
      description: `ॐ भूर्भुवः स्वः\nतत्सवितुर्वरेण्यं\nभर्गो देवस्य धीमहि\nधियो यो नः प्रचोदयात् ॥`,
    },
    {
      id: "15",
      title: "Mahamrityunjaya Mantra",
      image: "/images/shiv.png",
      description: `ॐ त्र्यम्बकं यजामहे\nसुगन्धिं पुष्टिवर्धनम्\nउर्वारुकमिव बन्धनान्\nमृत्योर्मुक्षीय माऽमृतात् ॥`,
    },
    {
      id: "16",
      title: "Guru Mantra",
      image: "/images/guru.png",
      description: `गुरुर्ब्रह्मा गुरुर्विष्णुः\nगुरुर्देवो महेश्वरः\nगुरुः साक्षात् परं ब्रह्म\nतस्मै श्रीगुरवे नमः ॥`,
    },
    {
      id: "17",
      title: "Ashtanga Yoga Opening Mantra",
      image: "/images/ashyogaopen.png",
      description: `ॐ\nवन्दे गुरूणां चरणारविन्दे\nसन्दर्शितस्वात्मसुखावबोधे\nनिःश्रेयसे जाङ्गलिकायमाने\nसंसारहालाहलमोहशान्त्यै ॥\n\nआबाहु पुरुषाकारं\nशङ्खचक्रासिधारिणम्\nसहस्रशिरसं श्वेतं\nप्रणमामि पतञ्जलिम् ॥\nॐ ॥`,
    },
    {
      id: "18",
      title: "Ashtanga Yoga Closing Mantra",
      image: "/images/ashyogaclose.png",
      description: `ॐ\nस्वस्ति प्रजाभ्यः परिपालयन्तां न्यायेन मार्गेण महीं महीशाः\nगोब्राह्मणेभ्यः शुभमस्तु नित्यं लोकाः समस्ताः सुखिनो भवन्तु ॥\nॐ शान्तिः शान्तिः शान्तिः ।`,
    },
  ];


  const toggleWishlist = (id) => {
    setWishlistedMantras((prev) =>
      prev.includes(id) ? prev.filter((wid) => wid !== id) : [...prev, id]
    );
  };

  return (
    <div className="container">
      <section className="mantra-section">
        <div className="bg-gradient"></div>
        <div className="Nav">
          <nav className="nav-back">
            <Link to="/profile" state={{ fromMantra: true }}>
              ← Back to Profile
            </Link>
          </nav>
          <h2 className="section-heading">Yoga Mantras: Connect. Chant. Transform</h2>
        </div>

        <div className="mantra-grid">
          {mantras.map((mantra) => (
            <ExpandableMantraCard
              key={mantra.id}
              mantra={mantra}
              wishlisted={wishlistedMantras.includes(mantra.id)}
              toggleWishlist={() => toggleWishlist(mantra.id)}
              setSelectedMantraId={setSelectedMantraId}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export const ExpandableMantraCard = ({ mantra, wishlisted, toggleWishlist, setSelectedMantraId }) => {
  const [expanded, setExpanded] = useState(false);

  const handleFav = (id) => {
    if (setSelectedMantraId) {
      setSelectedMantraId(id);
    }
    alert(`${mantra.title} ${wishlisted ? "removed from" : "added to"} wishlist!`);
  };

  return (
    <div className="mantra-card">
      <img src={mantra.image} alt={`Image of ${mantra.title}`} className="mantra-image" />
      <div className="mantra-info">
        <h3 className="mantra-title">{mantra.title}</h3>
        <button className="view-btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Hide Mantra" : "Reveal Mantra"}
        </button>
        <span
          className={`heart-icon ${wishlisted ? "active" : ""}`}
          onClick={() => {
            handleFav(mantra.id);
            toggleWishlist();
          }}
        >
          {wishlisted ? "♥" : "♡"}
        </span>

        {expanded && (
          <div className="mantra-details">
            <p className="mantra-text">{mantra.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default YogaMantras;