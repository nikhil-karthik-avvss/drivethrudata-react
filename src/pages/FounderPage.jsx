import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FounderPage.css';

const credentials = [
  { label: 'Ph.D', detail: 'MultiCloud Management' },
  { label: 'M.Tech', detail: 'Data Science & Engineering' },
  { label: 'M.Sc', detail: 'Physics & Electronics' },
];

const certifications = [
  'Azure Cloud Certified',
  'Gen AI Certified',
];

const experiences = [
  'Head Data Analytics & AI',
  'Cloud Practice Head',
  'Chief Data Scientist',
  'Delivery Leadership — Retail, BFSI, Manufacturing, Healthcare & Life Sciences',
];

const contactDetails = [
  {
    label: 'Email',
    value: 'info@drivethrudata.com',
    href: 'mailto:info@drivethrudata.com',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
  {
    label: 'Alternate',
    value: 'drivethrudata99@gmail.com',
    href: 'mailto:drivethrudata99@gmail.com',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
  {
    label: 'Address',
    value: '43 B, Velachery Main Road, Chennai-42',
    href: null,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  },
];

export default function FounderPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="founder-page">
      {/* Minimal header */}
      <header className="founder-header">
        <div className="founder-header__inner">
          <a href="/" className="founder-header__logo">
            <img
              src="https://drivethrudata.com/images/logo.png"
              alt="DriveThruData"
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'inline'; }}
            />
            <span style={{ display: 'none' }}>DriveThru<span style={{ color: 'var(--primary)' }}>Data</span></span>
          </a>
          <button className="founder-back-btn" onClick={() => navigate(-1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Back
          </button>
        </div>
      </header>

      <main className="founder-main">
        <div className="founder-container">

          {/* Hero card */}
          <div className="founder-hero">
            <div className="founder-hero__photo-wrap">
              <img
                src="https://drivethrudata.com/images/contact1.jpg"
                alt="Dr. Baskaran Jambunathan"
                className="founder-hero__photo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="founder-hero__photo-fallback">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
            </div>
            <div className="founder-hero__info">
              <div className="founder-eyebrow">Founder & Chief AI Strategist</div>
              <h1 className="founder-name">Dr. Baskaran<br />Jambunathan</h1>
              <p className="founder-credentials-line">M.Sc &nbsp;·&nbsp; M.Tech &nbsp;·&nbsp; Ph.D</p>
              <p className="founder-tagline">
                Strong Technology delivery experience in AI, Data, and Digital Transformation — building industry solutions using AI Strategy, Consulting, and Solution delivery.
              </p>
            </div>
          </div>

          <div className="founder-body">
            {/* Education */}
            <div className="founder-section">
              <h2 className="founder-section__title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                Education
              </h2>
              <div className="founder-cards-row">
                {credentials.map((c) => (
                  <div key={c.label} className="founder-cred-card">
                    <span className="founder-cred-card__label">{c.label}</span>
                    <span className="founder-cred-card__detail">{c.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="founder-section">
              <h2 className="founder-section__title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                Certifications
              </h2>
              <div className="founder-tags-row">
                {certifications.map((cert) => (
                  <span key={cert} className="founder-cert-tag">{cert}</span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="founder-section">
              <h2 className="founder-section__title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
                Experience
              </h2>
              <ul className="founder-exp-list">
                {experiences.map((exp) => (
                  <li key={exp} className="founder-exp-item">
                    <span className="founder-exp-dot" />
                    {exp}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="founder-section">
              <h2 className="founder-section__title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 12 19.79 19.79 0 01.88 3.4 2 2 0 012.86 1.21h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                Contact
              </h2>
              <div className="founder-contact-list">
                {contactDetails.map((item) => (
                  item.href
                    ? <a key={item.label} href={item.href} className="founder-contact-row">
                        <div className="founder-contact-icon">{item.icon}</div>
                        <div>
                          <p className="founder-contact-label">{item.label}</p>
                          <p className="founder-contact-value">{item.value}</p>
                        </div>
                      </a>
                    : <div key={item.label} className="founder-contact-row">
                        <div className="founder-contact-icon">{item.icon}</div>
                        <div>
                          <p className="founder-contact-label">{item.label}</p>
                          <p className="founder-contact-value">{item.value}</p>
                        </div>
                      </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
