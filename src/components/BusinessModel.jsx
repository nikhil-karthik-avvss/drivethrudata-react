import { useState, useRef, useEffect } from 'react';
import './BusinessModel.css';

const models = [
  {
    acronym: 'DICE',
    name: 'Our Business Transformation Process',
    full: 'Drive · Innovate · Change · Execute',
    desc: 'A structured framework to Drive, Innovate, Change, and Execute enterprise-wide data transformations with precision and measurable outcomes.',
    color: 'blue',
  },
  {
    acronym: '4A',
    name: 'For Execution',
    full: 'Align · Assess · Activate · Accelerate',
    desc: 'Four pillars of execution that ensure alignment across teams, assess current capabilities, activate new processes, and accelerate delivery.',
    color: 'orange',
  },
  {
    acronym: 'DETOUR',
    name: 'Our Engagement Model',
    full: 'Define · Explore · Test · Optimize · Unify · Realize',
    desc: 'Our signature engagement model that defines, explores, tests, optimizes, unifies, and realizes value from your data and AI investments.',
    color: 'green',
  },
  {
    acronym: 'DIVINE',
    name: 'Our Value Proposition',
    full: 'Deliver · Innovate · Vision · Integrate · Nurture · Execute',
    desc: 'The core value we bring to every engagement — delivering innovation with vision, integrating solutions, nurturing capabilities, and executing results.',
    color: 'purple',
  },
  {
    acronym: 'STAIR',
    name: 'Startup Transformation — Agility, Innovation & Research',
    full: 'Scale · Transform · Accelerate · Integrate · Realize',
    desc: 'A specialized model for startups to Scale, Transform, Accelerate, Integrate, and Realize AI-driven growth from MVP to market leader.',
    color: 'teal',
  },
];

const colorMap = {
  blue:   { bg: 'var(--primary-light)',         text: 'var(--primary)',        border: 'rgba(19,82,204,0.2)' },
  orange: { bg: 'rgba(249,115,22,0.08)',         text: 'var(--accent-orange)',  border: 'rgba(249,115,22,0.2)' },
  green:  { bg: 'rgba(22,163,74,0.08)',          text: 'var(--accent-green)',   border: 'rgba(22,163,74,0.2)' },
  purple: { bg: 'rgba(124,58,237,0.08)',         text: 'var(--accent-purple)',  border: 'rgba(124,58,237,0.2)' },
  teal:   { bg: 'rgba(8,145,178,0.08)',          text: 'var(--accent-teal)',    border: 'rgba(8,145,178,0.2)' },
};

function useInView(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

export default function BusinessModel() {
  const ref = useRef(null);
  const visible = useInView(ref);
  const [active, setActive] = useState(0);
  const m = models[active];
  const c = colorMap[m.color];

  return (
    <section className="business-model" ref={ref}>
      <div className="container">
        <div className={`bm__header fade-in ${visible ? 'visible' : ''}`}>
          <div className="section-eyebrow">Frameworks</div>
          <h2 className="section-title">Our <span>Business Model</span></h2>
          <p className="section-subtitle">
            Proven frameworks and engagement models that guide organizations through every stage of their data and AI transformation journey.
          </p>
        </div>

        <div className="bm__layout">
          {/* Sidebar tabs */}
          <div className={`bm__tabs fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            {models.map((model, i) => {
              const tc = colorMap[model.color];
              return (
                <button
                  key={model.acronym}
                  className={`bm-tab ${i === active ? 'bm-tab--active' : ''}`}
                  style={i === active ? { background: tc.bg, borderColor: tc.border, color: tc.text } : {}}
                  onClick={() => setActive(i)}
                >
                  <span className="bm-tab__acronym">{model.acronym}</span>
                  <span className="bm-tab__name">{model.name}</span>
                  {i === active && (
                    <svg className="bm-tab__arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  )}
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div
            className={`bm__panel fade-in ${visible ? 'visible' : ''}`}
            style={{ borderColor: c.border, transitionDelay: '0.2s' }}
            key={active}
          >
            <div className="bm__panel-top" style={{ background: c.bg }}>
              <div className="bm__acronym" style={{ color: c.text }}>{m.acronym}</div>
              <div>
                <p className="bm__full" style={{ color: c.text }}>{m.full}</p>
                <h3 className="bm__model-name">{m.name}</h3>
              </div>
            </div>
            <div className="bm__panel-body">
              <p className="bm__desc">{m.desc}</p>
              <div className="bm__steps">
                {m.full.split(' · ').map((step, i) => (
                  <div key={step} className="bm__step" style={{ animationDelay: `${i * 0.07}s` }}>
                    <span className="bm__step-num" style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="bm__step-label">{step}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" className="btn-primary" style={{ marginTop: '24px', display: 'inline-flex' }}>
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
