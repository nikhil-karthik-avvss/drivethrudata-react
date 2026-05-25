import Layout from '../components/Layout';
import { useRef, useEffect, useState } from 'react';
import './SolutionsPage.css';

function useInView(ref) {
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return v;
}

const categories = [
  {
    id: 'ai',
    num: '01',
    title: 'IT Services',
    tagline: 'Harness the power of artificial intelligence to automate operations, optimize infrastructure, and build intelligent enterprise systems at scale.',
    color: 'blue',
    tabIcon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>,
    items: [
      { name: 'Cloud Operations Optimization',    desc: 'Maximize cloud efficiency with AI-driven resource management, automated scaling, and continuous cost optimization across multi-cloud environments.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg> },
      { name: 'DevOps / ITOps / AIOps',           desc: 'Unify development, IT operations, and AI observability into a single pipeline for faster delivery cycles and proactive incident resolution.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="3"/></svg> },
      { name: 'AI-Driven Application Development', desc: 'Accelerate the full application development lifecycle with AI-assisted design, coding, testing, and automated deployment pipelines.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
      { name: 'Intelligent Document Processing',  desc: 'Extract, classify, and process structured and unstructured documents at enterprise scale using advanced NLP and computer vision models.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 13h6M9 17h4"/></svg> },
      { name: 'Knowledge Base Management',        desc: 'Build intelligent, searchable enterprise knowledge repositories that power AI assistants, recommendations, and contextual decision support.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg> },
      { name: 'HR & Recruitment Automation',      desc: 'Transform talent acquisition and workforce management with AI-powered screening, candidate matching, and people analytics solutions.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg> },
    ],
  },
  {
    id: 'data',
    num: '02',
    title: 'Data Engineering & Management',
    tagline: 'Transform raw, fragmented data into a trusted, governed, and insight-ready asset that drives every business decision with confidence.',
    color: 'teal',
    tabIcon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    items: [
      { name: 'Data Strategy Consulting',     desc: 'Define a clear, actionable roadmap for data maturity — from governance frameworks and architecture blueprints to long-term capability building.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg> },
      { name: 'Business Consulting Services', desc: 'Bridge the gap between technology investment and business outcomes with expert consulting tailored to your industry, scale, and objectives.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg> },
      { name: 'Data Platform Modernization',  desc: 'Migrate legacy data infrastructure to scalable, cloud-native platforms — enabling faster analytics, lower costs, and greater organizational agility.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
      { name: 'Real-Time Analytics',          desc: 'Enable live, in-the-moment decision-making with streaming data pipelines, real-time dashboards, and low-latency event processing at scale.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
      { name: 'Data Intelligence Platform',   desc: 'A unified platform for data discovery, lineage tracking, quality management, and AI-powered insights across your entire data estate.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg> },
      { name: 'Data & AI Governance',         desc: 'Establish robust policies, standards, and controls to ensure data quality, regulatory compliance, privacy, and responsible AI practices across the enterprise.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
      { name: 'Report Modernization',         desc: 'Replace static, legacy reports with dynamic self-service dashboards and embedded analytics that deliver faster, richer business insights.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
      { name: 'Data Services & Products',     desc: 'Productize your data assets into reusable APIs, data marketplaces, and monetizable data products designed for internal and external consumption.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg> },
      { name: 'Data Migration & Validation',  desc: 'Ensure seamless, zero-loss migration across systems with automated validation, reconciliation, and comprehensive data quality assurance frameworks.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M12 5l7 7-7 7"/></svg> },
    ],
  },
  {
    id: 'genai',
    num: '03',
    title: 'Advanced Analytics Services',
    tagline: 'Build AI systems that reason, create, and act autonomously — moving beyond automation to genuine, context-aware enterprise intelligence.',
    color: 'purple',
    tabIcon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/></svg>,
    items: [
      { name: 'Prompt & Context Engineering',      desc: 'Design precision prompts and context-aware frameworks that maximize output quality, consistency, and reliability from large language models.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg> },
      { name: 'Retrieval-Augmented Generation',    desc: 'Ground AI responses in your enterprise data through intelligent retrieval pipelines — delivering accurate, context-rich, hallucination-free outputs.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg> },
      { name: 'AI Content Creation & Management',  desc: 'Automate high-quality content generation, curation, and lifecycle management across marketing, knowledge bases, and business operations.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg> },
      { name: 'Autonomous Agent Build & Deploy',   desc: 'Design, train, and deploy autonomous AI agents capable of executing complex, multi-step tasks across enterprise systems with minimal human supervision.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/><circle cx="12" cy="16" r="1" fill="currentColor"/></svg> },
      { name: 'Model Training & Fine-Tuning',      desc: 'Customize foundation models on your proprietary data to deliver domain-specific intelligence with superior accuracy, relevance, and performance.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg> },
      { name: 'LLMOps & AgentOps',                 desc: 'Manage the complete lifecycle of language models and AI agents — from versioning and monitoring to drift detection and continuous performance improvement.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/></svg> },
    ],
  },
  {
    id: 'academic',
    num: '04',
    title: 'Academic Services',
    tagline: 'Empowering institutions and the next generation of AI practitioners with hands-on innovation labs and enterprise-grade management tools.',
    color: 'orange',
    tabIcon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>,
    items: [
      { name: 'AI Centre of Excellence Lab',   desc: 'A dedicated research and innovation lab to prototype cutting-edge AI solutions, upskill technical teams, and accelerate enterprise-wide AI adoption through structured experimentation.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18"/></svg> },
      { name: 'ERP for Academic Management',   desc: 'Purpose-built enterprise resource planning that streamlines academic operations, administration, reporting, and institutional data management from end to end.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 8h10M7 12h6"/></svg> },
      { name: 'AI Training & Enablement',       desc: 'Structured training programs and hands-on workshops that upskill teams across all levels — from foundational AI literacy to advanced model development and deployment practices.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> },
    ],
  },
];

const colorMap = {
  blue:   { solid: 'var(--primary)',       light: 'var(--primary-light)',    border: 'rgba(19,82,204,0.15)',  glow: 'rgba(19,82,204,0.2)' },
  teal:   { solid: 'var(--accent-teal)',   light: 'rgba(13,148,136,0.07)',   border: 'rgba(13,148,136,0.15)', glow: 'rgba(13,148,136,0.2)' },
  purple: { solid: 'var(--accent-purple)', light: 'rgba(124,58,237,0.07)',   border: 'rgba(124,58,237,0.15)', glow: 'rgba(124,58,237,0.2)' },
  orange: { solid: 'var(--accent-orange)', light: 'rgba(249,115,22,0.07)',   border: 'rgba(249,115,22,0.15)', glow: 'rgba(249,115,22,0.2)' },
};


function CategorySection({ cat }) {
  const ref = useRef(null);
  const visible = useInView(ref);
  const c = colorMap[cat.color];
  const isFeatured = cat.items.length <= 2;

  return (
    <section
      ref={ref}
      id={cat.id}
      className={`sol-section sol-section--${cat.color}`}
      style={{ '--c-solid': c.solid, '--c-light': c.light, '--c-border': c.border, '--c-glow': c.glow }}
    >
      <div className="container">

        {/* Section header */}
        <div className={`sol-section__header fade-in ${visible ? 'visible' : ''}`}>
          <span className="sol-section__num">{cat.num}</span>
          <div className="sol-section__titles">
            <h2 className="sol-section__title">{cat.title}</h2>
            <p className="sol-section__tagline">{cat.tagline}</p>
          </div>
          <div className="sol-section__count">{cat.items.length} services</div>
        </div>

        {/* Cards */}
        <div className={`sol-grid ${isFeatured ? 'sol-grid--featured' : 'sol-grid--standard'}`}>
          {cat.items.map((item, i) => (
            <div
              key={item.name}
              className={`sol-card fade-in ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.06 + i * 0.05}s` }}
            >
              <div className="sol-card__top">
                <div className="sol-card__icon">{item.icon}</div>

              </div>
              <p className="sol-card__name">{item.name}</p>
              <p className="sol-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default function SolutionsPage() {
  const [active, setActive] = useState('ai');

  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const sections = categories.map(c => document.getElementById(c.id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }); },
      { threshold: 0.2 }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const totalServices = categories.reduce((sum, c) => sum + c.items.length, 0);

  return (
    <Layout>

      {/* ── Hero ── */}
      <section className="sol-hero">
        <div className="sol-hero__bg" aria-hidden="true" />
        <div className="container sol-hero__inner">
          <div className="sol-hero__text">
            <div className="section-eyebrow">What We Offer</div>
            <h1 className="sol-hero__title">Our <span>AI Powered Solutions</span></h1>
            <p className="sol-hero__sub">
              End-to-end AI, data, and cloud solutions designed to help organizations modernize, innovate, and grow — from strategic consulting to full-scale deployment.
            </p>
          </div>
          <div className="sol-hero__stats">
            <div className="sol-stat">
              <span className="sol-stat__num">{categories.length}</span>
              <span className="sol-stat__label">Practice Areas</span>
            </div>
            <div className="sol-stat__divider" />
            <div className="sol-stat">
              <span className="sol-stat__num">{totalServices}</span>
              <span className="sol-stat__label">Solutions Offered</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky tab nav ── */}
      <nav className="sol-tabs">
        <div className="container sol-tabs__inner">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`sol-tab ${active === cat.id ? `sol-tab--active sol-tab--${cat.color}` : ''}`}
              onClick={() => scrollTo(cat.id)}
            >
              <span className="sol-tab__icon">{cat.tabIcon}</span>
              {cat.title}
            </button>
          ))}
        </div>
      </nav>

      {/* ── Sections ── */}
      {categories.map(cat => (
        <CategorySection key={cat.id} cat={cat} />
      ))}

    </Layout>
  );
}
