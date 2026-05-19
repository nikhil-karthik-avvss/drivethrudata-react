import { useRef, useEffect, useState } from 'react';
import './AboutUs.css';

const paragraphs = [
  'DriveThruData, As a company, focusing on building a Data Mature organization, assess data landscape, Create Insights from Data and use it for making Critical decisions by the Business Leaders.',
  'Our Vision is to transform company business through Data Insights and create value through their data value chain, periodically in real-time. Our Process & Business model, help organization to acheive thier goal over time with our expert guidance.',
  'Our experts will help aspiring companies to assess their Data Assets and work with them to transform their business through Advanced AI techniques. We enforce strong governance, engagement and maturity models into reality, help Organization to grow towards the goal, modernize and monetize their solutions with agility, innovation & research with personalized assistance through our consultancy.',
];

const reasons = [
  {
    title: 'Strong Industry Experience',
    desc: 'Strong Industry experts will provide solutions with Do-It-Right first time approach',
    color: 'blue',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
  {
    title: 'Multiple Project Delivery',
    desc: 'Over 100+ project experience in delivering solutions to fortune 500 companies, globally',
    color: 'orange',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 3v18h18"/><path d="M7 16l4-4 4 4 5-5"/>
      </svg>
    ),
  },
  {
    title: 'Personalized Services',
    desc: 'Our Experts work closely with leaders & have personalized assistence to build & deliver AI driven business Solutions',
    color: 'green',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Rapid Value Creation',
    desc: 'We bring Agility, Innovation into execution to build solution in quick time to Go-To-Market ahead of competition',
    color: 'purple',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
  },
];

const colorMap = {
  blue:   { bg: 'var(--primary-light)',      text: 'var(--primary)',       border: 'rgba(19,82,204,0.2)' },
  orange: { bg: 'rgba(249,115,22,0.08)',      text: 'var(--accent-orange)', border: 'rgba(249,115,22,0.2)' },
  green:  { bg: 'rgba(22,163,74,0.08)',       text: 'var(--accent-green)',  border: 'rgba(22,163,74,0.2)' },
  purple: { bg: 'rgba(124,58,237,0.08)',      text: 'var(--accent-purple)', border: 'rgba(124,58,237,0.2)' },
};

function useInView(ref) {
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return v;
}

export default function AboutUs() {
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <div ref={ref}>

      {/* ── About Us ── */}
      <section className="about-intro">
        <div className="container">
          <div className="about-intro__layout">

            <div className={`about-intro__left fade-in ${visible ? 'visible' : ''}`}>
              <div className="section-eyebrow">Who We Are</div>
              <h2 className="section-title">About <span>Us</span></h2>
              <div className="about-intro__paras">
                {paragraphs.map((p, i) => (
                  <p key={i} className={`about-intro__para ${i === 0 ? 'about-intro__para--lead' : ''}`}>
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className={`about-intro__right fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
              <div className="about-stat-stack">
                <div className="about-stat-card">
                  <span className="about-stat-card__num">100+</span>
                  <span className="about-stat-card__label">Projects Delivered</span>
                </div>
                <div className="about-stat-card">
                  <span className="about-stat-card__num">F500</span>
                  <span className="about-stat-card__label">Fortune 500 Clients</span>
                </div>
                <div className="about-stat-card">
                  <span className="about-stat-card__num">15+</span>
                  <span className="about-stat-card__label">Years of Expertise</span>
                </div>
                <div className="about-stat-card about-stat-card--accent">
                  <span className="about-stat-card__quote">
                    "Data Insights that drive decisions, not just reports."
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="why-us">
        <div className="container">
          <div className={`why-us__header fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className="section-eyebrow">Our Advantage</div>
            <h2 className="section-title">Why Choose <span>Us ....</span></h2>
          </div>

          <div className="why-us__grid">
            {reasons.map((r, i) => {
              const c = colorMap[r.color];
              return (
                <div
                  key={r.title}
                  className={`why-card fade-in ${visible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${0.25 + i * 0.09}s` }}
                >
                  <div className="why-card__icon" style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}>
                    {r.icon}
                  </div>
                  <div className="why-card__body">
                    <h3 className="why-card__title" style={{ color: c.text }}>{r.title}</h3>
                    <p className="why-card__desc">{r.desc}</p>
                  </div>
                  <div className="why-card__bar" style={{ background: c.text }} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
