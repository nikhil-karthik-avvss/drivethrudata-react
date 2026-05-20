import { useRef, useEffect, useState } from 'react';
import './Industry.css';

const industries = [
  {
    title: 'Healthcare',
    desc: 'Transforming patient outcomes and operational efficiency through AI-powered diagnostics, clinical data pipelines, and predictive health analytics.',
    tags: ['Clinical AI', 'EHR Analytics', 'Predictive Care'],
    color: 'blue',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  },
  {
    title: 'Education',
    desc: 'Enabling smarter learning ecosystems with data-driven personalization, institutional analytics, and AI tools for educators and students alike.',
    tags: ['Learning Analytics', 'EdTech AI', 'Personalization'],
    color: 'green',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>,
  },
  {
    title: 'Legal',
    desc: 'Accelerating legal workflows with contract intelligence, document analysis, compliance automation, and AI-assisted research capabilities.',
    tags: ['Contract AI', 'Compliance', 'Legal Research'],
    color: 'purple',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6"/></svg>,
  },
  {
    title: 'Real Estate',
    desc: 'Empowering property markets with predictive valuation models, market trend analysis, and data platforms for smarter investment decisions.',
    tags: ['Valuation AI', 'Market Analytics', 'PropTech'],
    color: 'orange',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  },
  {
    title: 'Textile',
    desc: 'Modernizing supply chains and manufacturing quality with AI-driven demand forecasting, defect detection, and inventory optimization.',
    tags: ['Supply Chain AI', 'Defect Detection', 'Demand Forecasting'],
    color: 'teal',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
  },
  {
    title: 'Accounting & Finance',
    desc: 'Modernizing financial operations with AI-powered forecasting, automated reporting, fraud detection, and real-time analytics that turn raw numbers into strategic intelligence.',
    tags: ['Financial Forecasting', 'Fraud Detection', 'Automated Reporting'],
    color: 'indigo',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 8h3m0 0v3m0-3l3 3"/></svg>,
  },
];

const colorMap = {
  blue:   { bg: 'var(--primary-light)',   text: 'var(--primary)',       border: 'rgba(19,82,204,0.2)' },
  green:  { bg: 'rgba(22,163,74,0.08)',   text: 'var(--accent-green)',  border: 'rgba(22,163,74,0.2)' },
  purple: { bg: 'rgba(124,58,237,0.08)',  text: 'var(--accent-purple)', border: 'rgba(124,58,237,0.2)' },
  orange: { bg: 'rgba(249,115,22,0.08)',  text: 'var(--accent-orange)', border: 'rgba(249,115,22,0.2)' },
  teal:   { bg: 'rgba(8,145,178,0.08)',   text: 'var(--accent-teal)',   border: 'rgba(8,145,178,0.2)' },
  indigo: { bg: 'rgba(79,70,229,0.08)',   text: '#4F46E5',              border: 'rgba(79,70,229,0.2)' },
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

export default function Industry() {
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <section className="industry" id="industry" ref={ref}>
      <div className="container">
        <div className={`industry__header fade-in ${visible ? 'visible' : ''}`}>
          <div className="section-eyebrow">Who We Serve</div>
          <h2 className="section-title">Industries We <span>Transform</span></h2>
          <p className="section-subtitle">
            Delivering tailored AI and data solutions across sectors — each with its own challenges, regulations, and opportunities.
          </p>
        </div>

        <div className="industry__grid">
          {industries.map((ind, i) => {
            const c = colorMap[ind.color];
            return (
              <div
                key={ind.title}
                className={`ind-card fade-in ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.09}s` }}
              >
                <div className="ind-card__icon" style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}>
                  {ind.icon}
                </div>
                <h3 className="ind-card__title">{ind.title}</h3>
                <p className="ind-card__desc">{ind.desc}</p>
                <div className="ind-card__tags">
                  {ind.tags.map(t => (
                    <span key={t} className="ind-tag" style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}>{t}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
