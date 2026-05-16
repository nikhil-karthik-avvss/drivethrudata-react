import { useRef, useEffect, useState } from 'react';
import './Services.css';

const services = [
  {
    id: 1,
    title: 'AI for Data',
    subtitle: 'Intelligent Data Solutions',
    desc: 'Harness AI to automate data pipelines, improve data quality, and unlock hidden insights from your data assets.',
    img: 'https://drivethrudata.com/images/resource/services-1.jpg',
    tags: ['Data Pipeline', 'ML Models', 'Data Quality'],
    color: 'blue',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v4c0 1.657 4.03 3 9 3s9-1.343 9-3V5"/><path d="M3 9v4c0 1.657 4.03 3 9 3s9-1.343 9-3V9"/><path d="M3 13v4c0 1.657 4.03 3 9 3s9-1.343 9-3v-4"/></svg>,
  },
  {
    id: 2,
    title: 'AI for Business Transform',
    subtitle: 'Business Transformation',
    desc: 'Redesign business processes with AI to drive efficiency, reduce costs, and create intelligent customer experiences.',
    img: 'https://drivethrudata.com/images/resource/services-2.jpg',
    tags: ['Process AI', 'Automation', 'ROI Analytics'],
    color: 'orange',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>,
  },
  {
    id: 3,
    title: 'AI for Digital Transform',
    subtitle: 'Digital Transformation',
    desc: 'Lead digital transformation with AI-native strategies that modernize infrastructure and enable agile operations.',
    img: 'https://drivethrudata.com/images/resource/services-3.jpg',
    tags: ['Cloud Migration', 'Digital Strategy', 'AI Integration'],
    color: 'green',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>,
  },
  {
    id: 4,
    title: 'Corporate Services',
    subtitle: 'Enterprise Advisory',
    desc: 'End-to-end consulting for large enterprises — from data governance frameworks to AI strategy and organizational change.',
    img: null,
    tags: ['Governance', 'Strategy', 'Advisory'],
    color: 'purple',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
  },
  {
    id: 5,
    title: 'Startups to Scale',
    subtitle: 'Startup Growth Engine',
    desc: 'Purpose-built programs for startups — rapidly building AI capabilities, data foundations, and growth-ready architectures.',
    img: null,
    tags: ['STAIR Model', 'MVP to Scale', 'AI Runway'],
    color: 'teal',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
  },
  {
    id: 6,
    title: 'Academic Services',
    subtitle: 'Knowledge & Learning',
    desc: 'Specialized training, workshops, and academic partnerships to upskill teams and build lasting internal AI expertise.',
    img: null,
    tags: ['Workshops', 'UpSkilling', 'Certifications'],
    color: 'orange',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>,
  },
];

const colorMap = {
  blue:   { bg: 'var(--primary-light)',        text: 'var(--primary)',       border: 'rgba(19,82,204,0.2)' },
  orange: { bg: 'rgba(249,115,22,0.08)',        text: 'var(--accent-orange)', border: 'rgba(249,115,22,0.2)' },
  green:  { bg: 'rgba(22,163,74,0.08)',         text: 'var(--accent-green)',  border: 'rgba(22,163,74,0.2)' },
  purple: { bg: 'rgba(124,58,237,0.08)',        text: 'var(--accent-purple)', border: 'rgba(124,58,237,0.2)' },
  teal:   { bg: 'rgba(8,145,178,0.08)',         text: 'var(--accent-teal)',   border: 'rgba(8,145,178,0.2)' },
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

export default function Services() {
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        <div className={`services__header fade-in ${visible ? 'visible' : ''}`}>
          <div className="section-eyebrow">What We Do</div>
          <h2 className="section-title">Our Service <span>Offering</span></h2>
          <p className="section-subtitle">
            Comprehensive AI and data services tailored to accelerate every stage of your transformation journey.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => {
            const c = colorMap[s.color];
            return (
              <div
                key={s.id}
                className={`svc-card fade-in ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {s.img && (
                  <div className="svc-card__img-wrap">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="svc-card__img"
                      onError={(e) => { e.target.closest('.svc-card__img-wrap').style.display = 'none'; }}
                    />
                  </div>
                )}
                <div className="svc-card__body">
                  <div className="svc-card__top">
                    <div className="svc-card__icon" style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}>
                      {s.icon}
                    </div>
                    <span className="svc-card__id" style={{ color: c.text }}>{String(s.id).padStart(2,'0')}</span>
                  </div>
                  <h3 className="svc-card__title">{s.title}</h3>
                  <p className="svc-card__sub" style={{ color: c.text }}>{s.subtitle}</p>
                  <p className="svc-card__desc">{s.desc}</p>
                  <div className="svc-card__tags">
                    {s.tags.map(t => (
                      <span key={t} className="svc-tag" style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
