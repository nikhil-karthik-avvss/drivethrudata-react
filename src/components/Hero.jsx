import { useState, useEffect, useRef } from 'react';
import './Hero.css';

const slides = [
  {
    eyebrow: 'Data Transformation',
    title: 'The Future of Data & AI Starts Here…',
    body: 'Drivethrudata is here to build a smarter solution powered by AI. Our experts helps in amplify your growth by Transforming your Data Landscape into meaningful Information by modernizing the Data platforms. We use extensive Data Engineering & AI services to extract Data Insights from Information and help Organization to monetize through value created from our services.',
    img: 'https://drivethrudata.com/images/main-slider/image-1.jpg',
  },
  {
    eyebrow: 'AI Strategy',
    title: 'AI Scales Power.. Choose your Goal Carefully',
    body: 'We help in realizing your AI dreams into reality through our thought leadership. Our Services helps you in amplifying your growth, building smarter future through AI accelerated innovative solutions to achieve your goal.',
    img: 'https://drivethrudata.com/images/main-slider/image-1.jpg',
  },
  {
    eyebrow: 'Business Growth',
    title: 'AI Driven Business Model',
    body: 'Our business and Engagement models help companies in scaling business through AI powered transformation programs. Our Engineering and Technology Consulting powering companies to next generation.',
    img: 'https://drivethrudata.com/images/main-slider/image-1.jpg',
  },
];

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatItem({ value, suffix, label, start }) {
  const count = useCountUp(value, 1800, start);
  return (
    <div className="hero-stat">
      <div className="hero-stat__value">{count}<span>{suffix}</span></div>
      <div className="hero-stat__label">{label}</div>
    </div>
  );
}

const stats = [
  { value: 50, suffix: '+', label: 'Enterprise Clients' },
  { value: 100, suffix: '+', label: 'AI Projects' },
  { value: 5, suffix: '+', label: 'Years of Expertise' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [statsStarted, setStatsStarted] = useState(false);
  const statsRef = useRef(null);
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

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsStarted(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const slide = slides[current];

  return (
    <section className="hero" id="home">
      {/* Decorative background shape */}
      <div className="hero__bg-shape" />

      <div className="container hero__inner">
        {/* Text side */}
        <div className={`hero__content ${animating ? 'hero__content--out' : 'hero__content--in'}`}>
          <div className="section-eyebrow">{slide.eyebrow}</div>
          <h1 className="hero__title">{slide.title}</h1>
          <p className="hero__body">{slide.body}</p>
          <div className="hero__actions">
            <a href="#contact" className="btn-primary">
              Contact Us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#services" className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              Watch Video
            </a>
          </div>

          {/* Slide dots */}
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

        {/* Image side */}
        <div className={`hero__visual ${animating ? 'hero__visual--out' : 'hero__visual--in'}`}>
          <div className="hero__img-frame">
            <img
              src={slide.img}
              alt="DriveThruData"
              className="hero__img"
              onError={(e) => { e.target.parentElement.classList.add('hero__img-frame--fallback'); }}
            />
            {/* Floating info chip */}
            <div className="hero__chip hero__chip--top">
              <div className="hero__chip-dot" />
              <span>AI-Powered Solutions</span>
            </div>
            <div className="hero__chip hero__chip--bottom">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--accent-green)" stroke="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>Trusted by 50+ Enterprises</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="hero__stats-bar" ref={statsRef}>
        <div className="container">
          <div className="hero__stats">
            {stats.map((s) => (
              <StatItem key={s.label} {...s} start={statsStarted} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
