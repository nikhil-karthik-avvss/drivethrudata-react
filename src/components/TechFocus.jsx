import { useRef, useEffect, useState } from 'react';
import './TechFocus.css';

const techs = [
  {
    title: 'Data Engineering',
    color: 'blue',
    tags: ['Data Pipelines', 'Data Transformation', 'Data Ingestion', 'Data Integration'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v4c0 1.657 4.03 3 9 3s9-1.343 9-3V5"/><path d="M3 9v4c0 1.657 4.03 3 9 3s9-1.343 9-3V9"/><path d="M3 13v4c0 1.657 4.03 3 9 3s9-1.343 9-3v-4"/></svg>,
  },
  {
    title: 'Data Management',
    color: 'teal',
    tags: ['Data Quality', 'Data Lineage', 'Data Governance', 'Regulatory Compliance'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 12l2 2 4-4"/><path d="M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z"/></svg>,
  },
  {
    title: 'Data Operations',
    color: 'green',
    tags: ['DataOps', 'ITOps & AIOps', 'Operational Monitoring', 'Data Conversion'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>,
  },
  {
    title: 'Data Analytics',
    color: 'orange',
    tags: ['Predictive Analytics', 'Prescriptive Analytics', 'Deterministic Modeling', 'Probabilistic Modeling', 'Data Observability'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3v18h18"/><path d="M7 16l4-4 4 4 5-5"/></svg>,
  },
  {
    title: 'Data Intelligence',
    color: 'purple',
    tags: ['Semantic Layer', 'Metadata Management', 'Data Lakehouse', 'Data Lake', 'Data Orchestration'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
  },
  {
    title: 'Data Insights',
    color: 'indigo',
    tags: ['Dashboards & Reporting', 'Real-Time Metrics', 'Self-Service Analytics', 'Data Mart', 'Decision Intelligence'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 7h3v7H7zM14 10h3v4h-3z"/></svg>,
  },
  {
    title: 'LLMOps',
    color: 'rose',
    tags: ['Inference & Serving', 'Fine-Tuning', 'Model Training', 'LLM Integration', 'Prompt Engineering'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>,
  },
  {
    title: 'RAG Architectures',
    color: 'amber',
    tags: ['Hybrid RAG', 'Multi-Modal RAG', 'GraphRAG', 'Agentic RAG', 'Context Engineering'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M6.343 6.343a8 8 0 000 11.314M17.657 6.343a8 8 0 010 11.314M2 12h2m16 0h2M12 2v2m0 16v2"/></svg>,
  },
  {
    title: 'AI Agents',
    color: 'purple',
    tags: ['Agent Development', 'System Integration', 'Agent Security', 'Agent Deployment', 'Agent Monitoring'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2"/><path d="M19 8a2 2 0 100-4 2 2 0 000 4M5 8a2 2 0 100-4 2 2 0 000 4"/></svg>,
  },
  {
    title: 'Data & AI Governance',
    color: 'teal',
    tags: ['AI Maturity Assessment', 'Model Auditing', 'Regulatory Compliance', 'Data Privacy', 'AI Ethics'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
  {
    title: 'Real-Time Analytics',
    color: 'green',
    tags: ['Stream Processing', 'Contextual Intelligence', 'Time-Series Analysis', 'Alerts & Event Processing'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  },
  {
    title: 'AI Development Lifecycle',
    color: 'blue',
    tags: ['Solution Design', 'Development', 'Testing & Validation', 'Sprint Planning', 'Delivery & Execution'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>,
  },
  {
    title: 'Digital Marketing',
    color: 'rose',
    tags: ['AI Content Creation', 'SEO Optimization', 'Campaign Management', 'Social Media Analytics'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5"/><path d="M17.586 3.586a2 2 0 112.828 2.828L12 15l-4 1 1-4 8.586-8.414z"/></svg>,
  },
  {
    title: 'Agentic Commerce',
    color: 'amber',
    tags: ['Autonomous Product Research', 'Intelligent Comparison', 'Autonomous Negotiation', 'Transaction Execution'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>,
  },
  {
    title: 'Enterprise AI Platform',
    color: 'indigo',
    tags: ['Agentic Automation', 'Model Reuse & Sharing', 'AI Lifecycle Management', 'AI Governance'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
  },
];

const colorMap = {
  blue:   { solid: '#1352CC', light: '#EEF3FF', border: 'rgba(19,82,204,0.18)',  glow: 'rgba(19,82,204,0.14)' },
  orange: { solid: '#F97316', light: '#FFF4ED', border: 'rgba(249,115,22,0.18)', glow: 'rgba(249,115,22,0.14)' },
  green:  { solid: '#16A34A', light: '#F0FDF4', border: 'rgba(22,163,74,0.18)',  glow: 'rgba(22,163,74,0.14)' },
  purple: { solid: '#7C3AED', light: '#F5F3FF', border: 'rgba(124,58,237,0.18)', glow: 'rgba(124,58,237,0.14)' },
  teal:   { solid: '#0891B2', light: '#ECFEFF', border: 'rgba(8,145,178,0.18)',  glow: 'rgba(8,145,178,0.14)' },
  indigo: { solid: '#4F46E5', light: '#EEF2FF', border: 'rgba(79,70,229,0.18)',  glow: 'rgba(79,70,229,0.14)' },
  rose:   { solid: '#E11D48', light: '#FFF1F2', border: 'rgba(225,29,72,0.18)',  glow: 'rgba(225,29,72,0.14)' },
  amber:  { solid: '#D97706', light: '#FFFBEB', border: 'rgba(217,119,6,0.18)',  glow: 'rgba(217,119,6,0.14)' },
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

export default function TechFocus() {
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <section className="tech-focus" id="technology" ref={ref}>
      <div className="container">
        <div className={`tech-focus__header fade-in ${visible ? 'visible' : ''}`}>
          <div className="section-eyebrow">Expertise</div>
          <h2 className="section-title">Technology <span>Focus</span></h2>
          <p className="section-subtitle">
            Deep technical expertise across the full AI and data stack — from ingestion to intelligent enterprise applications.
          </p>
        </div>

        <div className="tech-grid">
          {techs.map((t, i) => {
            const c = colorMap[t.color];
            return (
              <div
                key={t.title}
                className={`tech-card fade-in ${visible ? 'visible' : ''}`}
                style={{
                  transitionDelay: `${i * 0.05}s`,
                  '--c-solid': c.solid,
                  '--c-light': c.light,
                  '--c-border': c.border,
                  '--c-glow': c.glow,
                }}
              >
                <div className="tech-card__top">
                  <div className="tech-card__icon">{t.icon}</div>
                  <span className="tech-card__num">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="tech-card__title">{t.title}</h3>
                <div className="tech-card__tags">
                  {t.tags.map(tag => (
                    <span key={tag} className="tech-card__tag">{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
