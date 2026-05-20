import { Link } from 'react-router-dom';
import './Footer.css';

const quickLinks = [
  { label: 'Home',        to: '/' },
  { label: 'About Us',   to: '/about' },
  { label: 'Solutions',  to: '/solutions' },
  { label: 'Industries', to: '/industries' },
  { label: 'Technology', to: '/technology' },
  { label: 'Platforms',  to: '/platforms' },
  { label: 'Careers',    to: '/careers' },
  { label: 'Contact Us', to: '/contact' },
];

const services = [
  'AI for Data',
  'AI for Business Transform',
  'AI for Digital Transform',
  'Corporate Services',
  'Startups to Scale',
  'Academic Services',
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <Link to="/" className="footer__logo">
                <img src="/logo-transparent.png" alt="DriveThruData" className="footer__logo-img" />
                <span className="footer__logo-text">DriveThru<span className="footer__logo-accent">Data</span></span>
              </Link>
              <p className="footer__desc">
                Pioneer in AI &amp; Data Management Consulting. Building data-mature organizations that scale through intelligence.
              </p>
              <div className="footer__socials">
                {[
                  { label: 'LinkedIn', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
                  { label: 'Twitter', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg> },
                  { label: 'YouTube', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02l.01-6.02L15.5 12l-5.75 3.02z"/></svg> },
                  { label: 'Email', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
                ].map(s => (
                  <a key={s.label} href="#" className="footer__social" aria-label={s.label}>{s.icon}</a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__col">
              <h4 className="footer__col-title">Quick Links</h4>
              <ul className="footer__list">
                {quickLinks.map(l => (
                  <li key={l.to}><Link to={l.to} className="footer__link">{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer__col">
              <h4 className="footer__col-title">Services</h4>
              <ul className="footer__list">
                {services.map(s => (
                  <li key={s}><a href="#services" className="footer__link">{s}</a></li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer__col">
              <h4 className="footer__col-title">Contact Info</h4>
              <div className="footer__contact-list">
                <a href="tel:+918148530499" className="footer__contact-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 12 19.79 19.79 0 01.88 3.4 2 2 0 012.86 1.21h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  +91 8148530499
                </a>
                <a href="mailto:drivethrudata99@gmail.com" className="footer__contact-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  drivethrudata99@gmail.com
                </a>
                <a href="mailto:info@drivethrudata.com" className="footer__contact-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  info@drivethrudata.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">© Copyright DriveThruData. All right reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <span>·</span>
            <a href="#">Terms of Service</a>
            <span>·</span>
            <a href="#careers">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
