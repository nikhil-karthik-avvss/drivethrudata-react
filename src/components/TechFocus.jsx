import { useRef, useEffect, useState } from 'react';
import './TechFocus.css';

const techs = [
  {
    title: 'Data Engineering, Migration & Modernization',
    desc: 'Build robust data infrastructure with modern lakehouse architectures, ETL/ELT pipelines, and cloud migration strategies at scale.',
    tags: ['Apache Spark', 'dbt', 'Databricks', 'Snowflake', 'Kafka'],
    color: 'blue',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v4c0 1.657 4.03 3 9 3s9-1.343 9-3V5"/><path d="M3 9v4c0 1.657 4.03 3 9 3s9-1.343 9-3V9"/><path d="M3 13v4c0 1.657 4.03 3 9 3s9-1.343 9-3v-4"/></svg>,
  },
  {
    title: 'Data Analytics — AI/ML/DL',
    desc: 'Advanced analytics, machine learning, and deep learning solutions to derive predictive insights and automate data-driven decisions.',
    tags: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Power BI', 'Tableau'],
    color: 'orange',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3v18h18"/><path d="M7 16l4-4 4 4 5-5"/></svg>,
  },
  {
    title: 'Data Operations',
    desc: 'Implement DataOps practices for continuous delivery, observability, and governance of your data products and pipelines at scale.',
    tags: ['Airflow', 'Great Expectations', 'DataHub', 'Monte Carlo'],
    color: 'green',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>,
  },
  {
    title: 'Generative AI',
    desc: 'Build production-grade GenAI applications with LLMs, RAG pipelines, fine-tuning, prompt engineering, and enterprise AI platforms.',
    tags: ['OpenAI', 'LangChain', 'RAG', 'Fine-tuning', 'LLMOps'],
    color: 'purple',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>,
  },
  {
    title: 'Agent AI',
    desc: 'Design and deploy autonomous AI agents and multi-agent systems that reason, plan, and act to achieve complex business goals.',
    tags: ['LangGraph', 'CrewAI', 'AutoGPT', 'Multi-Agent', 'Tool Use'],
    color: 'teal',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2"/><path d="M19 8a2 2 0 100-4 2 2 0 000 4M5 8a2 2 0 100-4 2 2 0 000 4"/></svg>,
  },
];

const colorMap = {
  blue:   { bg: 'var(--primary-light)',       text: 'var(--primary)',       border: 'rgba(19,82,204,0.2)' },
  orange: { bg: 'rgba(249,115,22,0.08)',       text: 'var(--accent-orange)', border: 'rgba(249,115,22,0.2)' },
  green:  { bg: 'rgba(22,163,74,0.08)',        text: 'var(--accent-green)',  border: 'rgba(22,163,74,0.2)' },
  purple: { bg: 'rgba(124,58,237,0.08)',       text: 'var(--accent-purple)', border: 'rgba(124,58,237,0.2)' },
  teal:   { bg: 'rgba(8,145,178,0.08)',        text: 'var(--accent-teal)',   border: 'rgba(8,145,178,0.2)' },
};

function useInView(ref) {
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 });
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
        <div className="tech-focus__layout">
          <div className={`tech-focus__header fade-in ${visible ? 'visible' : ''}`}>
            <div className="section-eyebrow">Expertise</div>
            <h2 className="section-title">Technology <span>Focus</span></h2>
            <p className="section-subtitle">
              Deep technical expertise across the full AI and data stack — from ingestion to intelligent applications.
            </p>
          </div>

          <div className="tech-focus__list">
            {techs.map((t, i) => {
              const c = colorMap[t.color];
              return (
                <div
                  key={t.title}
                  className={`tech-row fade-in ${visible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${i * 0.09}s` }}
                >
                  <div className="tech-row__icon" style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}>
                    {t.icon}
                  </div>
                  <div className="tech-row__content">
                    <div className="tech-row__top">
                      <h3 className="tech-row__title">{t.title}</h3>
                      <div className="tech-row__tags">
                        {t.tags.map(tag => (
                          <span key={tag} className="tech-pill" style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <p className="tech-row__desc">{t.desc}</p>
                  </div>
                  <span className="tech-row__num">{String(i + 1).padStart(2, '0')}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
