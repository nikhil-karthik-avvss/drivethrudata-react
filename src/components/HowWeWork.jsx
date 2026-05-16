import { useRef, useEffect, useState } from 'react';
import './HowWeWork.css';

const steps = [
  {
    phase: '01',
    title: 'Leadership',
    subtitle: 'Strategic Direction',
    desc: 'We engage with your C-suite and decision-makers to align on AI strategy, define success metrics, and secure organizational buy-in for the transformation.',
    benefits: ['Executive alignment', 'Vision roadmapping', 'KPI definition', 'Risk assessment'],
    color: 'blue',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>,
  },
  {
    phase: '02',
    title: 'Team UpSkill',
    subtitle: 'Capability Building',
    desc: 'We transfer knowledge, run targeted training programs, and mentor your teams to build lasting AI and data capabilities within your organization.',
    benefits: ['Hands-on workshops', 'AI literacy training', 'Tool certification', 'Mentorship programs'],
    color: 'orange',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>,
  },
  {
    phase: '03',
    title: 'Org Benefits',
    subtitle: 'Measurable Outcomes',
    desc: 'Your organization emerges with a data-mature culture, AI-powered processes, and a competitive edge — with customer relations built on transparent communication.',
    benefits: ['Higher efficiency', 'Faster decisions', 'AI-native culture', 'Sustained growth'],
    color: 'green',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>,
  },
];

const colorMap = {
  blue:   { bg: 'var(--primary-light)',       text: 'var(--primary)',       border: 'rgba(19,82,204,0.25)', check: 'var(--primary)' },
  orange: { bg: 'rgba(249,115,22,0.08)',       text: 'var(--accent-orange)', border: 'rgba(249,115,22,0.25)', check: 'var(--accent-orange)' },
  green:  { bg: 'rgba(22,163,74,0.08)',        text: 'var(--accent-green)',  border: 'rgba(22,163,74,0.25)', check: 'var(--accent-green)' },
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

export default function HowWeWork() {
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <section className="how-we-work" ref={ref}>
      <div className="container">
        <div className={`hww__header fade-in ${visible ? 'visible' : ''}`}>
          <div className="section-eyebrow">Process</div>
          <h2 className="section-title">How We Work &amp; <span>What You Get</span></h2>
          <p className="section-subtitle">
            Customer relations with transparent communication. A three-phase engagement that builds lasting capability, not just deliverables.
          </p>
        </div>

        <div className="hww__steps">
          {steps.map((step, i) => {
            const c = colorMap[step.color];
            return (
              <div
                key={step.phase}
                className={`hww-step fade-in ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                {/* Phase number + connector */}
                <div className="hww-step__aside">
                  <div className="hww-step__phase" style={{ background: c.bg, color: c.text, border: `2px solid ${c.border}` }}>
                    {step.phase}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hww-step__line" style={{ background: `linear-gradient(180deg, ${c.border}, rgba(0,0,0,0.05))` }} />
                  )}
                </div>

                {/* Card */}
                <div className="hww-step__card">
                  <div className="hww-step__card-top">
                    <div className="hww-step__icon" style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}>
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="hww-step__title">{step.title}</h3>
                      <span className="hww-step__sub" style={{ color: c.text }}>{step.subtitle}</span>
                    </div>
                  </div>
                  <p className="hww-step__desc">{step.desc}</p>
                  <div className="hww-step__benefits">
                    {step.benefits.map(b => (
                      <div key={b} className="hww-benefit">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: c.check }}><polyline points="20 6 9 17 4 12"/></svg>
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* About section / CTA strip */}
        <div className={`hww__about fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
          <div className="hww__about-text">
            <h3 className="hww__about-title">DriveThruData can help you get there.</h3>
            <p className="hww__about-body">
              DriveThruData, as a company, focusing on building a Data Mature organization, assess data landscape, Create Insights from Data and use it for making Critical decisions by the Business Leaders.
            </p>
          </div>
          <div className="hww__about-actions">
            <a href="#contact" className="btn-primary">
              Contact Us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#services" className="btn-outline">Our Services</a>
          </div>
        </div>
      </div>
    </section>
  );
}
