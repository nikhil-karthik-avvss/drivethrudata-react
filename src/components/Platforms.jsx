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
    border: 'rgba(255,153,0,0.22)',
    logo: '/logos/aws.png',
  },
  {
    name: 'Google Cloud',
    short: 'GCP',
    desc: 'Unified data analytics and AI infrastructure with BigQuery, Vertex AI, and Looker enabling real-time insights at any scale.',
    tags: ['BigQuery', 'Vertex AI', 'Looker', 'Dataflow'],
    color: '#4285F4',
    bg: 'rgba(66,133,244,0.08)',
    border: 'rgba(66,133,244,0.22)',
    logo: '/logos/google-cloud.png',
  },
  {
    name: 'Microsoft Azure',
    short: 'Azure',
    desc: 'Enterprise-grade cloud platform with seamless integration across data, AI, and business applications in the Microsoft ecosystem.',
    tags: ['Azure Data Factory', 'Synapse', 'Power BI', 'OpenAI'],
    color: '#0078D4',
    bg: 'rgba(0,120,212,0.08)',
    border: 'rgba(0,120,212,0.22)',
    logo: '/logos/azure.svg',
  },
  {
    name: 'Snowflake',
    short: 'Snowflake',
    desc: 'Cloud-native data platform delivering elastic performance, zero-copy data sharing, and a unified lakehouse for all workloads.',
    tags: ['Data Warehouse', 'Data Sharing', 'Snowpark', 'Cortex AI'],
    color: '#29B5E8',
    bg: 'rgba(41,181,232,0.08)',
    border: 'rgba(41,181,232,0.22)',
    logo: '/logos/snowflake.png',
  },
  {
    name: 'Databricks',
    short: 'Databricks',
    desc: 'Unified data intelligence platform combining data engineering, ML, and analytics on the open lakehouse architecture with Delta Lake.',
    tags: ['Delta Lake', 'MLflow', 'Apache Spark', 'Unity Catalog'],
    color: '#FF3621',
    bg: 'rgba(255,54,33,0.08)',
    border: 'rgba(255,54,33,0.22)',
    logo: '/logos/databricks.png',
  },
  {
    name: 'Microsoft Fabric',
    short: 'MS Fabric',
    desc: 'End-to-end analytics SaaS platform unifying data engineering, warehousing, science, and BI in a single integrated Microsoft experience.',
    tags: ['OneLake', 'Real-Time Analytics', 'Data Activator', 'Copilot'],
    color: '#742774',
    bg: 'rgba(116,39,116,0.08)',
    border: 'rgba(116,39,116,0.22)',
    logo: '/logos/msfabric.png',
  },
];

function useInView(ref) {
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return v;
}

export default function Platforms() {
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <section className="platforms" id="platforms" ref={ref}>
      <div className="container">
        <div className={`platforms__header fade-in ${visible ? 'visible' : ''}`}>
          <div className="section-eyebrow">Platform Services</div>
          <h2 className="section-title">Platforms We <span>Work With</span></h2>
          <p className="section-subtitle">
            We build and deliver solutions across the leading cloud and data platforms — meeting you wherever your infrastructure lives.
          </p>
        </div>

        <div className="platforms__grid">
          {platforms.map((p, i) => (
            <div
              key={p.name}
              className={`plat-card fade-in ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.07}s`, '--plat-color': p.color, '--plat-bg': p.bg, '--plat-border': p.border }}
            >
              <div className="plat-card__header">
                <div className="plat-card__logo-wrap">
                  <img src={p.logo} alt={p.name} className="plat-card__logo-img" />
                </div>
              </div>
              <div className="plat-card__body">
                <div className="plat-card__identity">
                  <span className="plat-card__short">{p.short}</span>
                  <h3 className="plat-card__name">{p.name}</h3>
                </div>
                <p className="plat-card__desc">{p.desc}</p>
                <div className="plat-card__tags">
                  {p.tags.map(t => (
                    <span key={t} className="plat-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
