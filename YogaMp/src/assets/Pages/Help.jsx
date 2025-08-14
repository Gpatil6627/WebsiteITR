import React, { useState } from 'react';
import './Help.css';
// import LoginNav from '../Components/LoginNav'; // Uncomment if needed

const faqs = [
  {
    question: 'Do I need to sign up to use all features?',
    answer: 'Yes, you need to sign up to access all features, including personalized Meditation, Pranayama, Asana, and Mantra information.',
  },
  {
    question: "Why can't I access the Explore section without logging in?",
    answer: 'The Explore section provides personalized guidance on Meditation, Pranayama, Asana, and Mantra practices, which requires login to tailor content to your progress and preferences securely.',
  },
  {
    question: 'Can I follow YogaTattva content if I have health issues?',
    answer: 'Yes, YogaTattva provides clear instructions for each Asana, Meditation, and Pranayama practice, including which health issues they may benefit. Follow the guidance suited to your condition, and always consult your doctor if you have serious concerns.',
  },
  {
    question: 'How do I add or remove items from my wishlist?',
    answer: 'Click the heart (♡) below any Meditation, Mantra, Pranayama, or Asana to add it to your wishlist; click again to remove it.',
  },
];

const FAQItem = ({ question, answer, isActive, onToggle }) => (
  <div className="faq-item">
    <button
      className={`faq-question${isActive ? ' active' : ''}`}
      onClick={onToggle}
      aria-expanded={isActive}
      type="button"
    >
      <span className="faq-text">{question}</span>
      <span className={`arrow${isActive ? ' active' : ''}`}></span>
    </button>
    <div className={`faq-answer${isActive ? ' show' : ''}`}>{answer}</div>
  </div>
);

const HelpPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="help-page">
      <section className="hero-1">
        {/* <LoginNav /> */}
        <h1>Yogatattva Help Center</h1>
        <p>Your guide to a joyful and safe Yoga experience</p>
        <hr className="underline" />
      </section>

      <main>
        <section className="intro">
          <h2>Welcome to Your Yoga Journey</h2>
          <p>Find quick answers, helpful tips, and curated guidance for your mindful practice with Yogatattva.</p>
        </section>

        <section className="content-flex">
          <aside className="card contact-card">
            <div className="avatar-ring">
              <img src="images/logo.jpg" alt="Yogatattva Logo" className="contact-avatar" />
            </div>
            <h3>Quick Contact</h3>
            <div className="contact-details">
              <p><span className="icon">✉️</span> yogatattv@gmail.com</p>
            </div>
           <button
  className="contact-button"
  onClick={() =>
    window.open(
      'https://mail.google.com/mail/?view=cm&fs=1&to=yogatattv@gmail.com',
      '_blank'
    )
  }
>
  Email Us
</button>          
</aside>

          <section className="card faq-section">
            <h3>Frequently Asked Questions</h3>
            {faqs.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isActive={activeIndex === index}
                onToggle={() => setActiveIndex(activeIndex === index ? null : index)}
              />
            ))}
          </section>
        </section>

        <section className="blogs-section">
          <h3>Latest Blogs & Inspiration</h3>
          <div className="blogs-container">
            <article className="blog-card">
              <h4>Building Your Daily Yoga Ritual</h4>
              <p>Start a fulfilling, sustainable practice to find balance and energy.</p>
            </article>
            <article className="blog-card">
              <h4>Yoga & Peace of Mind</h4>
              <p>How mindfulness reduces anxiety and brings calm in your daily life.</p>
            </article>
            <article className="blog-card">
              <h4>Beginner’s Guide: First Yoga Steps</h4>
              <p>Learn to start your yoga journey safely and joyfully.</p>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 Yogatattva — Made with ♥ for your wellness</p>
      </footer>
    </div>
  );
};

export default HelpPage;
