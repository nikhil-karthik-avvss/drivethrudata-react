import { useState, useEffect, useRef } from 'react';
import './Insight.css';

const quotes = [
  {
    heading: 'Building an Enterprise AI Platform is Like Climbing a Great Mountain.',
  },
  {
    heading: 'Every Great Climb Requires an Expert Guide — Someone Who Knows the Terrain and Leads You to the Summit.',
  },
  {
    heading: 'DriveThruData Partners With You to Build, Scale, and Conquer Enterprise AI — Every Step of the Way.',
  },
];

export default function Insight() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);

  const goTo = (i) => {
    if (animating || i === current) return;
    setAnimating(true);
    setTimeout(() => { setCurrent(i); setAnimating(false); }, 320);
  };

  const next = () => goTo((current + 1) % quotes.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [current, animating]);

  const q = quotes[current];

  return (
    <section className="insight">
      <div className="container insight__inner">
        {/* Image */}
        <div className="insight__img-wrap">
          <img src="/mountain-climb.png" alt="Climbing together" className="insight__img" />
          <div className="insight__img-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            <span>Enterprise AI Journey</span>
          </div>
        </div>

        {/* Quotes */}
        <div className="insight__content">
          <div className="section-eyebrow">Our Business Objective</div>

          <div className={`insight__quote ${animating ? 'insight__quote--out' : 'insight__quote--in'}`}>
            <h2 className="insight__heading">{q.heading}</h2>
          </div>

          <div className="insight__dots">
            {quotes.map((_, i) => (
              <button
                key={i}
                className={`insight__dot ${i === current ? 'insight__dot--active' : ''}`}
                onClick={() => { clearInterval(timerRef.current); goTo(i); }}
                aria-label={`Quote ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
