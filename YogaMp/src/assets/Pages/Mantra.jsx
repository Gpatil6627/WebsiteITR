import React, { useState } from 'react';
import './Mantra.css';

const mantras = [
  {
    title: 'Om Mantra',
    image: '/images/om.png',
    description: 'ॐ',
  },
  {
    title: 'Shanti Mantra',
    image: '/images/shanti.png',
    description: `ॐ सह नाववतुः  
सह नौ भुनक्तु  
सह वीर्यं करवावहै  
तेजस्वि नावधीतमस्तु मा विद्विषावहै  
ॐ शान्तिः शान्तिः शान्तिः ॥`,
  },
  {
    title: 'Patanjali Mantra',
    image: '/images/patanjali.png',
    description: `योगेन चित्तस्य पदेन वाचां  
मलं शरीरस्य च वैद्यकेन  
योऽपाकरोत्तं प्रवरं मुनीनां  
पतञ्जलिं प्राञ्जलिरानतोऽस्मि ॥`,
  },
  {
    title: 'Gayatri Mantra',
    image: '/images/gayatri.png',
    description: `ॐ भूर्भुवः स्वः  
तत्सवितुर्वरेण्यं  
भर्गो देवस्य धीमहि  
धियो यो नः प्रचोदयात् ॥`,
  },
  {
    title: 'Mahamrityunjaya Mantra',
    image: '/images/shiv.png',
    description: `ॐ त्र्यम्बकं यजामहे  
सुगन्धिं पुष्टिवर्धनम्  
उर्वारुकमिव बन्धनान्  
मृत्योर्मुक्षीय माऽमृतात् ॥`,
  },
  {
    title: 'Guru Mantra',
    image: '/images/guru.png',
    description: `गुरुर्ब्रह्मा गुरुर्विष्णुः  
गुरुर्देवो महेश्वरः  
गुरुः साक्षात् परं ब्रह्म  
तस्मै श्रीगुरवे नमः ॥`,
  },
  {
    title: 'Ashtanga Yoga Opening Mantra',
    image: '/images/ashyogaopen.png',
    description: `ॐ  
वन्दे गुरूणां चरणारविन्दे  
सन्दर्शितस्वात्मसुखावबोधे ।  
निःश्रेयसे जाङ्गलिकायमाने  
संसारहालाहलमोहशान्त्यै ॥

आबाहु पुरुषाकारं  
शङ्खचक्रासिधारिणम् ।  
सहस्रशिरसं श्वेतं  
प्रणमामि पतञ्जलिम् ॥  
ॐ ॥`,
  },
  {
    title: 'Ashtanga Yoga Closing Mantra',
    image: '/images/ashyogaclose.png',
    description: `ॐ  
स्वस्ति प्रजाभ्यः परिपालयन्तां न्यायेन मार्गेण महीं महीशाः ।  
गोब्राह्मणेभ्यः शुभमस्तु नित्यं लोकाः समस्ताः सुखिनो भवन्तु ॥  
ॐ शान्तिः शान्तिः शान्तिः ।`,
  },
];

const MantraCard = ({ title, image, description }) => {
  const [showText, setShowText] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="mantra-card">
      <h3 className="mantra-title">{title}</h3>
      <img src={image} alt={title} className="mantra-image" />
      <button
        className="reveal-btn"
        onClick={() => setShowText(prev => !prev)}
      >
        {showText ? 'Hide Mantra' : 'Reveal Mantra'}
      </button>
      {showText && <p className="mantra-text">{description}</p>}
      <span
        className="wishlist-icon"
        onClick={() => setWishlisted(prev => !prev)}
      >
        {wishlisted ? '♥' : '♡'}
      </span>
    </div>
  );
};

const YogaMantras = () => {
  return (
    <section className="mantra-section">
        <div className='Nav'>
      <h2 className="section-heading">Yoga Mantras: Connect. Chant. Transform</h2>
       <a href="explore.html" className="Go-back">
        <b><i>Choose another Practice</i></b>
      </a>
      </div>
      <div className="mantra-grid">
        {mantras.map((mantra, index) => (
          <MantraCard key={index} {...mantra} />
        ))}
      </div>
    </section>
  );
};

export default YogaMantras;