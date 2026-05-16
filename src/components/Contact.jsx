import { useState, useRef, useEffect } from 'react';
import './Contact.css';

function useInView(ref) {
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return v;
}

export default function Contact() {
  const ref = useRef(null);
  const visible = useInView(ref);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container">
        <div className="contact__layout">
          <div className={`contact__left fade-in ${visible ? 'visible' : ''}`}>
            <div className="section-eyebrow">Get in Touch</div>
            <h2 className="section-title">Let's Build Something <span>Together</span></h2>
            <p className="section-subtitle" style={{ marginBottom: '36px' }}>
              Ready to transform your organization with data and AI? Contact us and let's explore what's possible.
            </p>

            <div className="contact-info-list">
              {[
                { label: 'Phone', value: '+91 8148530499', href: 'tel:+918148530499', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 12 19.79 19.79 0 01.88 3.4 2 2 0 012.86 1.21h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg> },
                { label: 'Email', value: 'info@drivethrudata.com', href: 'mailto:info@drivethrudata.com', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
                { label: 'Alternate', value: 'drivethrudata99@gmail.com', href: 'mailto:drivethrudata99@gmail.com', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
              ].map(item => (
                <a key={item.label} href={item.href} className="contact-info-row">
                  <div className="contact-info-row__icon">{item.icon}</div>
                  <div>
                    <p className="contact-info-row__label">{item.label}</p>
                    <p className="contact-info-row__value">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className={`contact__right fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.18s' }}>
            <div className="contact-form-card">
              <h3 className="contact-form-card__title">Send Us a Message</h3>
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <p className="contact-success__msg">Message sent! We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Your Name *</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} className="form-input" placeholder="John Doe" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} className="form-input" placeholder="john@company.com" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company / Organization</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange} className="form-input" placeholder="Your company name" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">How can we help? *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} className="form-input form-textarea" placeholder="Tell us about your data and AI challenges..." rows={4} required />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Send Message
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
