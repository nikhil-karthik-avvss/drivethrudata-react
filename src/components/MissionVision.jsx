import { useRef, useEffect, useState } from 'react';
import './MissionVision.css';

const items = [
  {
    num: '01',
    title: 'Technology Consulting for driving Data & AI',
    desc: 'Strategic advisory for enterprises adopting AI and modern data architecture to drive competitive advantage.',
    color: 'blue',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Build Data driven Organization',
    desc: 'Transform your business into a data-mature organization with actionable intelligence and governance frameworks.',
    color: 'orange',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 13.5l7.5-7.5 4 4L21 4M21 4h-6M21 4v6M3 21h18"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Scaling Business with AI',
    desc: 'Leverage AI to unlock growth, optimize operations, and create new revenue streams at enterprise scale.',
    color: 'green',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'AI accelerated Growth plan for Org Transformation',
    desc: 'Systematic programs that accelerate organizational transformation through AI adoption and change management.',
    color: 'purple',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Build AI Lab with State of Art facilities (CoE)',
    desc: 'Establish your internal Centre of Excellence to innovate, prototype, and deploy AI solutions with sustained impact.',
    color: 'teal',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
      </svg>
    ),
  },
];

function useInView(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

export default function MissionVision() {
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <section className="mission-vision" id="about" ref={ref}>
      <div className="container">

        {/* Two-column intro */}
        <div className={`mv__intro fade-in ${visible ? 'visible' : ''}`}>

          {/* Left: text */}
          <div className="mv__intro-text">
            <div className="section-eyebrow">Who We Are</div>
            <h2 className="section-title">Our Mission &amp; <span>Vision</span></h2>
            <p className="section-subtitle">
              DriveThruData, as a company, focuses on building a Data Mature organization — assessing the data landscape, creating insights from data, and using them to drive critical decisions by business leaders.
            </p>
          </div>

          {/* Right: image + banners */}
          <div className="mv__intro-visual">
            <div className="mv__statements">
              <div className="mv__statement">
                <div className="mv__statement-icon mv__statement-icon--vision">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <div className="mv__statement-body">
                  <h4 className="mv__statement-title">Vision</h4>
                  <p className="mv__statement-text">To transform raw data into meaningful insights and measurable business value — enabling organizations to make smarter, faster, and more confident decisions.</p>
                </div>
              </div>
              <div className="mv__statement">
                <div className="mv__statement-icon mv__statement-icon--mission">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/><path d="M12 2l1.5 3.5M19 5l-2.5 2.5"/></svg>
                </div>
                <div className="mv__statement-body">
                  <h4 className="mv__statement-title">Mission</h4>
                  <p className="mv__statement-text">To migrate, modernize, and monetize enterprise data systems — partnering with organizations at every step to build AI-ready, scalable data platforms that drive lasting growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="mv__grid">
          {items.map((item, i) => (
            <div
              key={item.num}
              className={`mv-card mv-card--${item.color} fade-in ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.15 + i * 0.09}s` }}
            >
              <div className={`mv-card__icon-wrap mv-icon--${item.color}`}>
                {item.icon}
              </div>
              <span className="mv-card__num">{item.num}</span>
              <h3 className="mv-card__title">{item.title}</h3>
              <p className="mv-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
