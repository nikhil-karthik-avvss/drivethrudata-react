import { useRef, useEffect, useState } from 'react';
import './Careers.css';

const roles = [
  {
    no: '01',
    title: 'AI Consultant',
    color: 'blue',
    emails: ['drivethrudata99@gmail.com'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    ),
    points: [
      'Strong AI & Data experience from industry with a minimum of 15 years of project experience.',
      'Hands-on work experience with AI/ML, GenAI & Agent AI.',
      'Good communication skills.',
    ],
  },
  {
    no: '02',
    title: 'Student Interns',
    color: 'orange',
    emails: ['drivethrudata99@gmail.com'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 14l9-5-9-5-9 5 9 5z"/>
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
      </svg>
    ),
    points: [
      'Engineering graduates with strong coding experience in Python and Java.',
      'Exposure to AI/ML and GenAI.',
      'Exposure to Data Science is preferred.',
    ],
  },
  {
    no: '03',
    title: 'Business Development Manager',
    color: 'green',
    emails: ['hemavenkat@drivethrudata.com', 'info@drivethrudata.com'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    points: [
      'Strong flair for selling products & services to customers.',
      'Influencing and convincing skills to sell AI products, services & solutions.',
      'Willing to work in a revenue-sharing model.',
    ],
  },
  {
    no: '04',
    title: 'AI Architect',
    color: 'purple',
    emails: ['hemavenkat@drivethrudata.com', 'info@drivethrudata.com'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
        <path d="M7 8h3m4 0h3M7 12h10"/>
      </svg>
    ),
    points: [
      '10+ years of experience required.',
      'Strong AI & Data engineering experience with hands-on architect design.',
      'Broad knowledge of AI tools, processes & techniques including Gen AI and Agent AI.',
      'Ability to translate business requirements into design and lead the project team.',
    ],
  },
  {
    no: '05',
    title: 'Data Architect',
    type: 'Part-Time Consultant',
    color: 'teal',
    emails: ['drivethrudata99@gmail.com', 'info@drivethrudata.com'],
    qualLabel: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    points: [
      'Overall 15+ years of experience with min 4–5 years in Data Engineering, Data Analytics, Databricks, Snowflake, data pipelines, Data Governance, etc.',
      'Strong experience in solution development for client-specific problems in Data Engineering & Analytics.',
    ],
  },
  {
    no: '06',
    title: 'AI Architect',
    type: 'Part-Time Consultant',
    color: 'indigo',
    emails: ['drivethrudata99@gmail.com', 'info@drivethrudata.com'],
    qualLabel: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    points: [
      'Overall 15+ years of experience with minimum 2–3 years in Data Analytics, AI/ML, Gen AI & Agent AI solution development and design for customer projects.',
      'Strong experience in building AI solution architecture & design for client-specific problems.',
    ],
  },
];

const colorMap = {
  blue:   { solid: '#1352CC', light: '#EEF3FF', border: 'rgba(19,82,204,0.18)',  glow: 'rgba(19,82,204,0.12)' },
  orange: { solid: '#F97316', light: '#FFF4ED', border: 'rgba(249,115,22,0.18)', glow: 'rgba(249,115,22,0.12)' },
  green:  { solid: '#16A34A', light: '#F0FDF4', border: 'rgba(22,163,74,0.18)',  glow: 'rgba(22,163,74,0.12)' },
  purple: { solid: '#7C3AED', light: '#F5F3FF', border: 'rgba(124,58,237,0.18)', glow: 'rgba(124,58,237,0.12)' },
  teal:   { solid: '#0891B2', light: '#ECFEFF', border: 'rgba(8,145,178,0.18)',  glow: 'rgba(8,145,178,0.12)' },
  indigo: { solid: '#4F46E5', light: '#EEF2FF', border: 'rgba(79,70,229,0.18)',  glow: 'rgba(79,70,229,0.12)' },
};

function useInView(ref) {
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.05 });
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
                style={{
                  transitionDelay: `${i * 0.08}s`,
                  '--c-solid': c.solid,
                  '--c-light': c.light,
                  '--c-border': c.border,
                  '--c-glow': c.glow,
                }}
              >
                {/* Colored top bar */}
                <div className="career-card__top-bar" />

                {/* Header */}
                <div className="career-card__header">
                  <div className="career-card__icon-wrap">
                    <div className="career-card__icon">{role.icon}</div>
                  </div>
                  <div className="career-card__meta">
                    <span className="career-card__no">Position {role.no}</span>
                    <h3 className="career-card__title">{role.title}</h3>
                    {role.type && (
                      <span className="career-card__type">{role.type}</span>
                    )}
                  </div>
                  <span className="career-card__ghost">{role.no}</span>
                </div>

                {/* Divider */}
                <div className="career-card__divider" />

                {/* Requirements */}
                <div className="career-card__body">
                  {role.qualLabel && (
                    <p className="career-card__qual-label">Qualifications</p>
                  )}
                  <ul className="career-card__list">
                    {role.points.map((pt, j) => (
                      <li key={j} className="career-card__point">
                        <svg className="career-card__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Apply footer */}
                <div className="career-card__footer">
                  <div className="career-card__footer-label">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    Send your CV to
                  </div>
                  <div className="career-card__emails">
                    {role.emails.map(email => (
                      <a key={email} href={`mailto:${email}`} className="career-card__email">
                        {email}
                      </a>
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
