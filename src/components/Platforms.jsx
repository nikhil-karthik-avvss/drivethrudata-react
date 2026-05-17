import { useRef, useEffect, useState } from 'react';
import './Platforms.css';

const platforms = [
  {
    name: 'Amazon Web Services',
    short: 'AWS',
    desc: 'Scalable cloud infrastructure, managed data services, and AI/ML tooling powering end-to-end data pipelines at enterprise scale.',
    tags: ['S3', 'Redshift', 'SageMaker', 'Glue'],
    color: '#FF9900',
    bg: 'rgba(255,153,0,0.08)',
    border: 'rgba(255,153,0,0.25)',
    icon: (
      <svg viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.9 19.7c0 .8.1 1.5.3 2 .2.5.5 1.1.9 1.7.1.2.2.4.2.6 0 .3-.2.6-.5.9l-1.7 1.1c-.2.2-.5.2-.7.2-.3 0-.6-.1-.8-.4-.4-.5-.7-1-.9-1.5-.3-.5-.5-1.1-.8-1.8-2 2.4-4.5 3.5-7.6 3.5-2.2 0-3.9-.6-5.2-1.8-1.3-1.2-1.9-2.8-1.9-4.8 0-2.1.7-3.8 2.2-5.1 1.5-1.3 3.5-1.9 6-1.9.8 0 1.7.1 2.6.2.9.1 1.8.3 2.8.6v-1.8c0-1.8-.4-3.1-1.1-3.8-.8-.8-2.1-1.1-3.9-1.1-.8 0-1.7.1-2.6.3-.9.2-1.8.5-2.6.9-.4.2-.7.3-.9.3-.5 0-.7-.4-.7-.8V7.8c0-.4.1-.7.2-.9.2-.2.5-.4.9-.6C9.3 5.8 10.5 5.4 12 5.2c1.5-.3 3-.4 4.6-.4 3.5 0 6.1.8 7.7 2.4 1.6 1.6 2.4 4 2.4 7.1v9.4h-2.8zm-10.5 3.9c.8 0 1.7-.1 2.6-.5.9-.3 1.7-.9 2.4-1.7.4-.5.7-1 .8-1.6.2-.6.3-1.3.3-2.1v-1c-.7-.2-1.5-.3-2.2-.4-.8-.1-1.5-.1-2.2-.1-1.6 0-2.7.3-3.5 1-.8.6-1.1 1.6-1.1 2.8 0 1.1.3 2 .9 2.5.5.7 1.3 1.1 2 1.1zm18.7 2.5c-.5 0-.8-.1-1-.2-.2-.1-.4-.5-.6-.9L23.7 5.8c-.2-.5-.3-.8-.3-1 0-.4.2-.6.6-.6h2.5c.5 0 .8.1 1 .2.2.2.4.5.5.9l6 23.7 5.6-23.7c.1-.5.3-.8.5-.9.2-.2.6-.2 1-.2h2c.5 0 .8.1 1.1.2.2.2.4.5.5.9l5.6 24 6.2-24c.1-.5.3-.8.5-.9.2-.2.6-.2 1-.2h2.4c.4 0 .7.2.7.6 0 .1 0 .3-.1.5L52.3 25.9c-.2.5-.4.8-.6.9-.2.1-.5.2-1 .2H48c-.5 0-.8-.1-1.1-.2-.2-.2-.4-.5-.5-.9l-5.5-23.3-5.5 23.3c-.1.5-.3.8-.5.9-.2.1-.6.2-1.1.2h-2.6zm33 .7c-1.5 0-3-.2-4.4-.5-1.4-.3-2.5-.7-3.2-1.1-.4-.2-.7-.5-.8-.8-.1-.2-.1-.5-.1-.7v-1.3c0-.5.2-.7.6-.7.2 0 .3 0 .5.1.2.1.4.2.6.3 1.5.7 3 1.1 4.8 1.1.7 0 1.3-.1 1.9-.2.6-.2 1-.4 1.3-.8.3-.4.5-.8.5-1.3 0-.5-.2-1-.5-1.3-.3-.4-.9-.7-1.8-1l-2.6-.8c-1.8-.5-3.1-1.3-3.9-2.4-.8-1-1.2-2.2-1.2-3.5 0-1 .2-1.9.7-2.7.5-.8 1.1-1.4 1.8-2 .8-.5 1.7-.9 2.7-1.2 1-.3 2.1-.4 3.2-.4.6 0 1.2 0 1.7.1.6.1 1.1.2 1.6.3.5.1 1 .3 1.4.5.4.2.7.4.9.5.3.2.5.4.6.6.1.2.2.5.2.9v1.2c0 .5-.2.8-.6.8-.2 0-.5-.1-.9-.3-.3-.2-.6-.3-.9-.4-.4-.1-.8-.3-1.2-.4-.4-.1-.9-.2-1.4-.2-.6 0-1.2.1-1.7.2-.5.2-.9.5-1.2.9-.3.4-.4.8-.4 1.3 0 .5.2.9.6 1.3.4.4 1.1.7 2 1l2.5.8c1.7.5 3 1.3 3.7 2.2.7.9 1.1 2.1 1.1 3.4 0 1-.2 2-.7 2.8-.4.8-1 1.5-1.8 2.1-.8.6-1.7 1-2.8 1.3-1.1.2-2.3.4-3.5.4z" fill="#FF9900"/>
      </svg>
    ),
  },
  {
    name: 'Google Cloud',
    short: 'GCP',
    desc: 'Unified data analytics and AI infrastructure with BigQuery, Vertex AI, and Looker enabling real-time insights at any scale.',
    tags: ['BigQuery', 'Vertex AI', 'Looker', 'Dataflow'],
    color: '#4285F4',
    bg: 'rgba(66,133,244,0.08)',
    border: 'rgba(66,133,244,0.25)',
    icon: (
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.6 8H24l-12 12 12 12h5.6L18 20z" fill="#EA4335"/>
        <path d="M18 8h12l8 12-8 12H18l8-12z" fill="#4285F4"/>
        <path d="M34 20l-8-12h6l8 12-8 12h-6z" fill="#FBBC05"/>
        <circle cx="34" cy="20" r="4" fill="#34A853"/>
        <circle cx="14" cy="20" r="4" fill="#EA4335"/>
        <circle cx="24" cy="8" r="4" fill="#4285F4"/>
        <circle cx="24" cy="32" r="4" fill="#FBBC05"/>
      </svg>
    ),
  },
  {
    name: 'Microsoft Azure',
    short: 'Azure',
    desc: 'Enterprise-grade cloud platform with seamless integration across data, AI, and business applications in the Microsoft ecosystem.',
    tags: ['Azure Data Factory', 'Synapse', 'Power BI', 'OpenAI'],
    color: '#0078D4',
    bg: 'rgba(0,120,212,0.08)',
    border: 'rgba(0,120,212,0.25)',
    icon: (
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 4L8 36h10l4-10h8l-6-14z" fill="#0078D4"/>
        <path d="M26 18l6 14 8-8-6-6z" fill="#0078D4" opacity=".7"/>
        <path d="M18 26l-10 10h32L26 18z" fill="#50E6FF" opacity=".8"/>
      </svg>
    ),
  },
  {
    name: 'Snowflake',
    short: 'Snowflake',
    desc: 'Cloud-native data platform delivering elastic performance, zero-copy data sharing, and a unified lakehouse for all workloads.',
    tags: ['Data Warehouse', 'Data Sharing', 'Snowpark', 'Cortex AI'],
    color: '#29B5E8',
    bg: 'rgba(41,181,232,0.08)',
    border: 'rgba(41,181,232,0.25)',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4v40M4 24h40M9.4 9.4l29.2 29.2M38.6 9.4L9.4 38.6" stroke="#29B5E8" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="5" fill="#29B5E8"/>
        <circle cx="24" cy="4" r="3" fill="#29B5E8"/>
        <circle cx="24" cy="44" r="3" fill="#29B5E8"/>
        <circle cx="4" cy="24" r="3" fill="#29B5E8"/>
        <circle cx="44" cy="24" r="3" fill="#29B5E8"/>
        <circle cx="9.4" cy="9.4" r="2.5" fill="#29B5E8"/>
        <circle cx="38.6" cy="38.6" r="2.5" fill="#29B5E8"/>
        <circle cx="38.6" cy="9.4" r="2.5" fill="#29B5E8"/>
        <circle cx="9.4" cy="38.6" r="2.5" fill="#29B5E8"/>
      </svg>
    ),
  },
  {
    name: 'Databricks',
    short: 'Databricks',
    desc: 'Unified data intelligence platform combining data engineering, ML, and analytics on the open lakehouse architecture with Delta Lake.',
    tags: ['Delta Lake', 'MLflow', 'Apache Spark', 'Unity Catalog'],
    color: '#FF3621',
    bg: 'rgba(255,54,33,0.08)',
    border: 'rgba(255,54,33,0.25)',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4L4 16v8l20 12 20-12v-8L24 4z" fill="#FF3621"/>
        <path d="M4 24v8l20 12 20-12v-8L24 36 4 24z" fill="#FF3621" opacity=".6"/>
        <path d="M24 4L4 16l20 12 20-12L24 4z" fill="#FF3621" opacity=".85"/>
        <path d="M24 16l-12 7 12 7 12-7-12-7z" fill="white" opacity=".9"/>
      </svg>
    ),
  },
  {
    name: 'Microsoft Fabric',
    short: 'MS Fabric',
    desc: 'End-to-end analytics SaaS platform unifying data engineering, warehousing, science, and BI in a single integrated Microsoft experience.',
    tags: ['OneLake', 'Real-Time Analytics', 'Data Activator', 'Copilot'],
    color: '#742774',
    bg: 'rgba(116,39,116,0.08)',
    border: 'rgba(116,39,116,0.25)',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="18" height="18" rx="2" fill="#F25022"/>
        <rect x="26" y="4" width="18" height="18" rx="2" fill="#7FBA00"/>
        <rect x="4" y="26" width="18" height="18" rx="2" fill="#00A4EF"/>
        <rect x="26" y="26" width="18" height="18" rx="2" fill="#742774"/>
      </svg>
    ),
  },
];

const CARD_WIDTH = 340;
const CARD_GAP = 18;
const STEP = CARD_WIDTH + CARD_GAP;
const SPEED = 0.7; // px per frame

function useInView(ref) {
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return v;
}

export default function Platforms() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const paused = useRef(false);
  const raf = useRef(null);
  const visible = useInView(sectionRef);

  // Duplicate items for seamless infinite loop
  const items = [...platforms, ...platforms];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const halfWidth = track.scrollWidth / 2;

    const tick = () => {
      if (!paused.current && track) {
        track.scrollLeft += SPEED;
        if (track.scrollLeft >= halfWidth) {
          track.scrollLeft -= halfWidth;
        }
      }
      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  const scroll = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    paused.current = true;
    track.scrollBy({ left: dir * STEP, behavior: 'smooth' });
    setTimeout(() => { paused.current = false; }, 600);
  };

  return (
    <section className="platforms" id="platforms" ref={sectionRef}>
      <div className="container">
        <div className={`platforms__header fade-in ${visible ? 'visible' : ''}`}>
          <div className="section-eyebrow">Platform Services</div>
          <h2 className="section-title">Platforms We <span>Work With</span></h2>
          <p className="section-subtitle">
            We build and deliver solutions across the leading cloud and data platforms — meeting you wherever your infrastructure lives.
          </p>
        </div>
      </div>

      <div className="platforms__carousel-wrap">
        <button className="plat-nav plat-nav--prev" onClick={() => scroll(-1)} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>

        <div
          className="platforms__track"
          ref={trackRef}
          onMouseEnter={() => { paused.current = true; }}
          onMouseLeave={() => { paused.current = false; }}
        >
          {items.map((p, i) => (
            <div
              key={i}
              className="plat-card"
              style={{ '--plat-color': p.color }}
            >
              <div className="plat-card__top">
                <div className="plat-card__logo" style={{ background: p.bg, border: `1px solid ${p.border}` }}>
                  {p.icon}
                </div>
                <div className="plat-card__name-wrap">
                  <span className="plat-card__short" style={{ color: p.color }}>{p.short}</span>
                  <h3 className="plat-card__name">{p.name}</h3>
                </div>
              </div>
              <p className="plat-card__desc">{p.desc}</p>
              <div className="plat-card__tags">
                {p.tags.map(t => (
                  <span key={t} className="plat-tag" style={{ background: p.bg, color: p.color, border: `1px solid ${p.border}` }}>{t}</span>
                ))}
              </div>
              <div className="plat-card__bar" style={{ background: p.color }} />
            </div>
          ))}
        </div>

        <button className="plat-nav plat-nav--next" onClick={() => scroll(1)} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </section>
  );
}
