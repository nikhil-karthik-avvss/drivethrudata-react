import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'Home',        to: '/' },
  { label: 'About Us',   to: '/about' },
  { label: 'Solutions',  to: '/solutions' },
  { label: 'Industries', to: '/industries' },
  { label: 'Technology', to: '/technology' },
  { label: 'Platforms',  to: '/platforms' },
  { label: 'Careers',    to: '/careers' },
  { label: 'Contact Us', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const linkClass = ({ isActive }) =>
    `navbar__link${isActive ? ' navbar__link--active' : ''}`;

  const mobileLinkClass = ({ isActive }) =>
    `mobile-menu__link${isActive ? ' mobile-menu__link--active' : ''}`;

  return (
    <>
      <div className={`top-bar ${scrolled ? 'top-bar--hidden' : ''}`}>
        <div className="container top-bar__inner">
          <div className="top-bar__contacts">
            <a href="tel:+918148530499" className="top-bar__item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 12 19.79 19.79 0 01.88 3.4 2 2 0 012.86 1.21h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              +91 8148530499
            </a>
            <span className="top-bar__sep">|</span>
            <a href="mailto:drivethrudata99@gmail.com" className="top-bar__item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              drivethrudata99@gmail.com
            </a>
            <span className="top-bar__sep">|</span>
            <a href="mailto:info@drivethrudata.com" className="top-bar__item">
              info@drivethrudata.com
            </a>
          </div>
        </div>
      </div>

      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          <Link to="/" className="navbar__logo">
            <img src="/logo-transparent.png" alt="DriveThruData" className="navbar__logo-img" />
            <div className="navbar__logo-info">
              <span className="navbar__logo-text">
                DriveThru<span className="logo-accent">Data</span>
              </span>
              <span className="navbar__logo-tagline">Pioneer in AI &amp; Data Management Consulting</span>
            </div>
          </Link>

          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === '/'} className={linkClass}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

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
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={mobileLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mobile-menu__footer">
            <a href="tel:+918148530499" className="top-bar__item" style={{ color: 'var(--text-body)' }}>+91 8148530499</a>
            <a href="mailto:info@drivethrudata.com" className="top-bar__item" style={{ color: 'var(--text-body)' }}>info@drivethrudata.com</a>
          </div>
        </div>
      </nav>
    </>
  );
}
