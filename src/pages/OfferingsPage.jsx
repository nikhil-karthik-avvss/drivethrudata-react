import { useState, useEffect, useRef, useCallback } from 'react';
import Layout from '../components/Layout';
import './OfferingsPage.css';

const slides = [
  { src: '/offerings/01-agent-integration.png',   label: 'Agent Integration Services',         num: '01' },
  { src: '/offerings/02-business-consulting.jpg',  label: 'Business Consulting Services',        num: '02' },
  { src: '/offerings/03-data-ai-governance.png',   label: 'Data & AI Governance',               num: '03' },
  { src: '/offerings/04-data-ai-consulting.png',   label: 'Data & AI Consulting',               num: '04' },
  { src: '/offerings/05-data-analytics.png',       label: 'Data Analytics Services',            num: '05' },
  { src: '/offerings/06-data-intelligence.png',    label: 'Data Intelligence Platform',         num: '06' },
  { src: '/offerings/07-realtime-analytics.png',   label: 'Realtime Data Analytics Services',   num: '07' },
  { src: '/offerings/08-data-strategy.png',        label: 'Data Strategy Consulting',           num: '08' },
  { src: '/offerings/09-knowledge-management.png', label: 'Knowledge Management',               num: '09' },
  { src: '/offerings/10-report-migration.png',     label: 'Report Migration Services',          num: '10' },
];

export default function OfferingsPage() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef(null);
  const thumbsRef = useRef(null);

  const goTo = useCallback((i) => {
    if (i === current) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(i);
      setFading(false);
    }, 280);
  }, [current]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length);
    }, 5000);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (!thumbsRef.current) return;
    const active = thumbsRef.current.querySelector('.off-thumb--active');
    if (active) active.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [current]);

  const handleNav = (fn) => { resetTimer(); fn(); };

  const progress = ((current + 1) / slides.length) * 100;

  return (
    <Layout>
      <section className="offerings">
        <div className="container">

          {/* Header */}
          <div className="offerings__header">
            <div className="section-eyebrow">What We Offer</div>
            <h1 className="section-title">Our <span>Offerings</span></h1>
            <p className="section-subtitle">
              A comprehensive suite of AI and data services to accelerate your enterprise transformation.
            </p>
          </div>

          {/* Main layout */}
          <div className="offerings__layout">

            {/* Sidebar thumbnails */}
            <div className="offerings__sidebar" ref={thumbsRef}>
              {slides.map((s, i) => (
                <button
                  key={i}
                  className={`off-thumb ${i === current ? 'off-thumb--active' : ''}`}
                  onClick={() => { handleNav(() => goTo(i)); }}
                >
                  <div className="off-thumb__img-wrap">
                    <img src={s.src} alt={s.label} />
                  </div>
                  <div className="off-thumb__info">
                    <span className="off-thumb__num">{s.num}</span>
                    <span className="off-thumb__label">{s.label}</span>
                  </div>
                  {i === current && <div className="off-thumb__bar" />}
                </button>
              ))}
            </div>

            {/* Main display */}
            <div className="offerings__display">
              {/* Progress bar */}
              <div className="offerings__progress">
                <div className="offerings__progress-fill" style={{ width: `${progress}%` }} />
              </div>

              {/* Image frame */}
              <div className="offerings__frame">
                <img
                  key={current}
                  src={slides[current].src}
                  alt={slides[current].label}
                  className={`offerings__img ${fading ? 'offerings__img--fading' : ''}`}
                />

                {/* Prev / Next */}
                <button className="offerings__nav offerings__nav--prev" onClick={() => handleNav(prev)} aria-label="Previous">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <button className="offerings__nav offerings__nav--next" onClick={() => handleNav(next)} aria-label="Next">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                </button>

                {/* Counter badge */}
                <div className="offerings__counter">{current + 1} / {slides.length}</div>
              </div>

              {/* Caption bar */}
              <div className="offerings__caption">
                <span className="offerings__caption-num">{slides[current].num}</span>
                <span className="offerings__caption-label">{slides[current].label}</span>
                <div className="offerings__dots">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      className={`offerings__dot ${i === current ? 'offerings__dot--active' : ''}`}
                      onClick={() => handleNav(() => goTo(i))}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
