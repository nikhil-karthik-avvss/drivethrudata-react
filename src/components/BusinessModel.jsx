import { useState, useRef, useEffect } from 'react';
import './BusinessModel.css';

const models = [
  {
    acronym: 'DICE',
    name: 'Our Business Transformation Process',
    color: 'blue',
    steps: [
      { label: 'Data',       desc: 'Understand & Analyse Data Landscape' },
      { label: 'Insights',   desc: 'Generate Insights and Create Value / Information' },
      { label: 'Capitalize', desc: 'Convert Value created into drivers for decision making' },
      { label: 'Encash',     desc: 'Enable Avenues to monetize & encash revenues through AI Assets' },
    ],
  },
  {
    acronym: '4A',
    name: 'For Execution',
    color: 'orange',
    steps: [
      { label: 'Assess',      desc: 'Current Data & AI Landscape' },
      { label: 'Analyze',     desc: 'Perform feasibility Study' },
      { label: 'Automate',    desc: 'Through AI technologies & Do End to End Implementation' },
      { label: 'Accelerate',  desc: 'Business through Value adds and Innovations' },
    ],
  },
  {
    acronym: 'DETOUR',
    name: 'Our Engagement Model',
    color: 'green',
    steps: [
      { label: 'Discover',   desc: 'Understand the AS-IS & Identify Scope for AI' },
      { label: 'Evaluate',   desc: 'Perform Technical & Business feasibility Study' },
      { label: 'Transform',  desc: 'Implement AI Powered Solution to accelerate Business' },
      { label: 'Optimize',   desc: 'Monitor & Optimize Performance & stabilize Solutions' },
      { label: 'UpSkill',    desc: 'Enable, Train and Upskill team to adapt to changes' },
      { label: 'Realize',    desc: 'Generate business opportunities to create revenue streams' },
    ],
  },
  {
    acronym: 'DIVINE',
    name: 'Our Value Proposition',
    color: 'purple',
    steps: [
      { label: 'Data',        desc: 'Aggregate Data from heterogeneous Sources' },
      { label: 'Information', desc: 'Process Data into meaningful Information' },
      { label: 'Value',       desc: 'Convert Information into Value through technology' },
      { label: 'INnovation',  desc: 'Apply Innovation & Research to encash Value' },
      { label: 'Engineering', desc: 'Continuously enhance value through our Engineering Process' },
    ],
  },
  {
    acronym: 'STAIR',
    name: 'Startup Transformation — Agility, Innovation & Research',
    color: 'teal',
    steps: [
      { label: 'Startup',    desc: 'Enable Startup to focus on building enterprise grade AI solution' },
      { label: 'Transform',  desc: 'Work culture through personalized guidance on solution development' },
      { label: 'Agility',    desc: 'Bring Agility into their thinking and solution development to beat the market needs' },
      { label: 'Innovation', desc: 'Establish the culture of innovation into their thought Process' },
      { label: 'Research',   desc: 'Constantly guide stakeholders through Research & Development' },
    ],
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
                <p className="bm__full" style={{ color: c.text }}>
                  {m.steps.map(s => s.label).join(' · ')}
                </p>
                <h3 className="bm__model-name">{m.name}</h3>
              </div>
            </div>
            <div className="bm__panel-body">
              <div className="bm__steps">
                {m.steps.map((step, i) => (
                  <div key={step.label} className="bm__step" style={{ animationDelay: `${i * 0.07}s` }}>
                    <span className="bm__step-num" style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="bm__step-content">
                      <span className="bm__step-label" style={{ color: c.text }}>{step.label}</span>
                      <span className="bm__step-desc">{step.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
