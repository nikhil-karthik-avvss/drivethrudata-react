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
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
  },
  {
    title: 'Multiple Project Delivery',
    desc: 'Over 100+ project experience in delivering solutions to fortune 500 companies, globally',
    color: 'orange',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3v18h18"/><path d="M7 16l4-4 4 4 5-5"/></svg>,
  },
  {
    title: 'Personalized Services',
    desc: 'Our Experts work closely with leaders & have personalized assistence to build & deliver AI driven business Solutions',
    color: 'green',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
  },
  {
    title: 'Rapid Value Creation',
    desc: 'We bring Agility, Innovation into execution to build solution in quick time to Go-To-Market ahead of competition',
    color: 'purple',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
  },
];

const colorMap = {
  blue:   { bg: 'var(--primary-light)',     text: 'var(--primary)',       border: 'rgba(19,82,204,0.2)' },
  orange: { bg: 'rgba(249,115,22,0.08)',     text: 'var(--accent-orange)', border: 'rgba(249,115,22,0.2)' },
  green:  { bg: 'rgba(22,163,74,0.08)',      text: 'var(--accent-green)',  border: 'rgba(22,163,74,0.2)' },
  purple: { bg: 'rgba(124,58,237,0.08)',     text: 'var(--accent-purple)', border: 'rgba(124,58,237,0.2)' },
};

const education = [
  { degree: 'Ph.D',   field: 'MultiCloud Management' },
  { degree: 'M.Tech', field: 'Data Science & Engineering' },
  { degree: 'M.Sc',   field: 'Physics & Electronics' },
];

const certifications = ['Azure Cloud Certified', 'Gen AI Certified'];

const expertise = [
  'Advanced AI & Model Training', 'Data Engineering', 'Cloud Platforms (AWS, Azure, GCP)',
  'Application & Infrastructure Modernization', 'DevOps / MLOps / DataOps', 'Global Delivery Leadership',
];

const companies = ['TCS', 'Tech Mahindra', 'Cognizant', 'Wipro'];

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
          <div className={`about-intro__header fade-in ${visible ? 'visible' : ''}`}>
            <div className="section-eyebrow">Who We Are</div>
            <h2 className="section-title">About <span>Us</span></h2>
          </div>
          <div className="about-intro__body">
            <p className={`about-intro__lead fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
              {paragraphs[0]}
            </p>
            <div className="about-intro__cols">
              {paragraphs.slice(1).map((p, i) => (
                <p key={i} className={`about-intro__para fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${0.15 + i * 0.08}s` }}>
                  {p}
                </p>
              ))}
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
                <div key={r.title} className={`why-card fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${0.25 + i * 0.09}s` }}>
                  <div className="why-card__icon" style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}>{r.icon}</div>
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

      {/* ── Founder / Contact ── */}
      <section className="founder-section">
        <div className="container">
          <div className={`founder-section__header fade-in ${visible ? 'visible' : ''}`}>
            <div className="section-eyebrow">Leadership</div>
            <h2 className="section-title">Meet Our <span>Founder</span></h2>
          </div>

          <div className={`founder-profile fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>

            {/* Photo + identity */}
            <div className="founder-profile__hero">
              <div className="founder-profile__photo-wrap">
                <img
                  src="https://drivethrudata.com/images/contact1.jpg"
                  alt="Dr. Baskaran Jambunathan"
                  className="founder-profile__photo"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                />
                <div className="founder-profile__photo-fallback">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
              </div>
              <div className="founder-profile__identity">
                <h3 className="founder-profile__name">Dr. Baskaran Jambunathan</h3>
                <p className="founder-profile__creds">M.Sc &nbsp;·&nbsp; M.Tech &nbsp;·&nbsp; Ph.D</p>
                <p className="founder-profile__role">Founder — DriveThruData</p>
                <div className="founder-profile__companies">
                  {companies.map(c => <span key={c} className="founder-chip">{c}</span>)}
                </div>
              </div>
            </div>

            {/* Details grid */}
            <div className="founder-profile__details">

              <div className="founder-detail-card">
                <h4 className="founder-detail-card__title">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                  Education
                </h4>
                <div className="founder-edu-list">
                  {education.map(e => (
                    <div key={e.degree} className="founder-edu-row">
                      <span className="founder-edu-row__degree">{e.degree}</span>
                      <span className="founder-edu-row__field">{e.field}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="founder-detail-card">
                <h4 className="founder-detail-card__title">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                  Certifications
                </h4>
                <div className="founder-cert-list">
                  {certifications.map(c => <span key={c} className="founder-cert-tag">{c}</span>)}
                </div>
              </div>

              <div className="founder-detail-card">
                <h4 className="founder-detail-card__title">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
                  Core Expertise
                </h4>
                <div className="founder-expertise-list">
                  {expertise.map(e => (
                    <div key={e} className="founder-expertise-item">
                      <span className="founder-expertise-dot" />
                      {e}
                    </div>
                  ))}
                </div>
              </div>

              <div className="founder-detail-card">
                <h4 className="founder-detail-card__title">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 12 19.79 19.79 0 01.88 3.4 2 2 0 012.86 1.21h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  Contact
                </h4>
                <div className="founder-contact-list">
                  {[
                    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, value: 'drivethrudata99@gmail.com', href: 'mailto:drivethrudata99@gmail.com' },
                    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, value: 'info@drivethrudata.com', href: 'mailto:info@drivethrudata.com' },
                    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>, value: '43 B, Velachery Main Road, Chennai-42', href: null },
                  ].map((item, i) => (
                    item.href
                      ? <a key={i} href={item.href} className="founder-contact-row">{item.icon}{item.value}</a>
                      : <div key={i} className="founder-contact-row">{item.icon}{item.value}</div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
