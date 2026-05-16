import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Technology', href: '#technology' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (href) => {
    setMenuOpen(false);
    setActiveLink(href.replace('#', ''));
  };

  return (
    <>
      <div className={`top-bar ${scrolled ? 'top-bar--hidden' : ''}`}>
        <div className="container top-bar__inner">
          <div className="top-bar__contacts">
            <a href="tel:+918148530499" className="top-bar__item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 12 19.79 19.79 0 01.88 3.4 2 2 0 012.86 1.21h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              +91 8148530499
            </a>
            <a href="mailto:info@drivethrudata.com" className="top-bar__item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              info@drivethrudata.com
            </a>
          </div>
          <span className="top-bar__tag">Pioneer in AI &amp; Data Management Consulting</span>
        </div>
      </div>

      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          <a href="#home" className="navbar__logo" onClick={() => handleNav('#home')}>
            <img
              src="https://drivethrudata.com/images/logo.png"
              alt="DriveThruData"
              className="navbar__logo-img"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <span className="navbar__logo-text">
              DriveThru<span className="logo-accent">Data</span>
            </span>
          </a>

          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`navbar__link ${activeLink === link.href.replace('#', '') ? 'navbar__link--active' : ''}`}
                  onClick={() => handleNav(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="navbar__cta btn-primary" onClick={() => handleNav('#contact')}>
            Get Started
          </a>

          <button
            className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
          <ul className="mobile-menu__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="mobile-menu__link" onClick={() => handleNav(link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-primary mobile-menu__cta" onClick={() => handleNav('#contact')}>
            Get Started
          </a>
          <div className="mobile-menu__footer">
            <a href="tel:+918148530499" className="top-bar__item" style={{ color: 'var(--text-body)' }}>+91 8148530499</a>
            <a href="mailto:info@drivethrudata.com" className="top-bar__item" style={{ color: 'var(--text-body)' }}>info@drivethrudata.com</a>
          </div>
        </div>
      </nav>
    </>
  );
}
