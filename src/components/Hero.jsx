import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import HeroVisual from './HeroVisual';

const slides = [
  {
    eyebrow: 'Data & AI Transformation',
    title: ['The Future of', 'Data & AI', 'Starts Here'],
    accent: 1,
    body: 'We help organizations build data-mature enterprises powered by AI. From strategy to deployment — we turn your data into a competitive advantage.',
  },
  {
    eyebrow: 'AI Strategy',
    title: ['Intelligent Systems', 'Built for', 'Real-World Scale'],
    accent: 0,
    body: 'Our AI experts bring deep technical and domain expertise to accelerate your transformation journey — from ideation to enterprise-grade delivery.',
  },
  {
    eyebrow: 'Business Growth',
    title: ['AI-Driven', 'Business Models', 'for Tomorrow'],
    accent: 1,
    body: 'Our engagement models help companies scale through AI-powered transformation — modernizing platforms, monetizing data, and unlocking new growth.',
  },
];


export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);

  const goTo = (i) => {
    if (animating || i === current) return;
    setAnimating(true);
    setTimeout(() => { setCurrent(i); setAnimating(false); }, 350);
  };

  const next = () => goTo((current + 1) % slides.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 5500);
    return () => clearInterval(timerRef.current);
  }, [current, animating]);

  const slide = slides[current];

  return (
    <section className="hero" id="home">
      <div className="hero__bg-gradient" aria-hidden="true" />
      <div className="hero__bg-grid" aria-hidden="true" />

      <div className="container hero__inner">
        {/* Text side */}
        <div className={`hero__content ${animating ? 'hero__content--out' : 'hero__content--in'}`}>
          <div className="section-eyebrow">{slide.eyebrow}</div>

          <h1 className="hero__title">
            {slide.title.map((line, i) => (
              <span key={i} className={`hero__title-line ${i === slide.accent ? 'hero__title-line--accent' : ''}`}>
                {line}
              </span>
            ))}
          </h1>

          <p className="hero__body">{slide.body}</p>

          <div className="hero__actions">
            <Link to="/contact" className="btn-primary">
              Get a Consultation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link to="/solutions" className="btn-outline">
              Explore Solutions
            </Link>
          </div>

          <div className="hero__dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
                onClick={() => { clearInterval(timerRef.current); goTo(i); }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Visual side */}
        <div className="hero__visual">
          <div className="hero__img-frame">
            <HeroVisual />
            <div className="hero__chip hero__chip--top">
              <span>AI-Powered Solutions</span>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
