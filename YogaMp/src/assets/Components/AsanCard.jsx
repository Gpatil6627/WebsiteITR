import React, { useState } from "react";

const AsanaCard = ({ title, image, time, steps, benefits, wishlisted, toggleWishlist }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="asana-card">
      <img src={image} alt={`Image of ${title}`} />
      <div className="asana-info">
        <p className="asana-time">{time}</p>
        <h3 className="asana-title">{title}</h3>
        <button className="view-btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Hide Details" : "View Details"}
        </button>
        <span
          className={`heart-icon ${wishlisted ? "active" : ""}`}
          onClick={toggleWishlist}
        >
          {wishlisted ? "❤️" : "🤍"}
        </span>

        {expanded && (
          <div className="asana-details">
            <h4>Steps</h4>
            <ul>{steps.map((step, i) => <li key={i}>{step}</li>)}</ul>
            <h4>Benefits</h4>
            <ul>{benefits.map((b, i) => <li key={i}>{b}</li>)}</ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AsanaCard;
