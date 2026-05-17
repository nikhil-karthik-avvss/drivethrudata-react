import { useRef, useEffect, useState } from 'react';
import './Careers.css';

const roles = [
  {
    no: '01',
    title: 'AI Consultant',
    color: 'blue',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    ),
    points: [
      'Person with Strong AI & Data experience from Industry',
      'Hands on work experience with AIML, GenAI & Agent AI',
      'Minimum 15 years of Project experience',
      'Good Communication Skills',
    ],
  },
  {
    no: '02',
    title: 'Student Interns',
    color: 'orange',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 14l9-5-9-5-9 5 9 5z"/>
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
      </svg>
    ),
    points: [
      'Engineering Graduates with strong coding experience in Python and Java',
      'Exposure to AIML, GenAI',
      'Exposure to Data Science is preferred',
    ],
  },
];

const colorMap = {
  blue:   { bg: 'var(--primary-light)',       text: 'var(--primary)',       border: 'rgba(19,82,204,0.2)' },
  orange: { bg: 'rgba(249,115,22,0.08)',       text: 'var(--accent-orange)', border: 'rgba(249,115,22,0.2)' },
};

function useInView(ref) {
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return v;
}

export default function Careers() {
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <section className="careers" id="careers" ref={ref}>
      <div className="container">
        <div className={`careers__header fade-in ${visible ? 'visible' : ''}`}>
          <div className="section-eyebrow">Join Us</div>
          <h2 className="section-title">Open <span>Positions</span></h2>
          <p className="section-subtitle">
            We are looking for passionate people to join our growing team. Share your profile and let's build the future of AI together.
          </p>
        </div>

        <div className="careers__grid">
          {roles.map((role, i) => {
            const c = colorMap[role.color];
            return (
              <div
                key={role.no}
                className={`career-card fade-in ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="career-card__bar" style={{ background: c.text }} />

                <div className="career-card__top">
                  <div className="career-card__icon" style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}>
                    {role.icon}
                  </div>
                  <div>
                    <span className="career-card__no" style={{ color: c.text }}>{role.no}</span>
                    <h3 className="career-card__title">{role.title}</h3>
                  </div>
                </div>

                <ul className="career-card__list">
                  {role.points.map((pt, j) => (
                    <li key={j} className="career-card__point">
                      <span className="career-card__dot" style={{ background: c.text }} />
                      {pt}
                    </li>
                  ))}
                </ul>

                <a
                  href="mailto:drivethrudata99@gmail.com"
                  className="career-card__apply"
                  style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  Apply — drivethrudata99@gmail.com
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
