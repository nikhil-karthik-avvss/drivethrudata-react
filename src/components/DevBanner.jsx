import { useState } from 'react';

export default function DevBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '16px',
      right: '16px',
      zIndex: 9999,
      backgroundColor: 'rgba(220, 38, 38, 0.15)',
      border: '1px solid rgba(220, 38, 38, 0.4)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderRadius: '10px',
      padding: '12px 14px',
      maxWidth: '260px',
      boxShadow: '0 4px 20px rgba(220, 38, 38, 0.15)',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px' }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '14px', flexShrink: 0, marginTop: '1px' }}>⚠️</span>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.92)', lineHeight: '1.5', fontFamily: 'sans-serif' }}>
            <strong style={{ display: 'block', color: '#fca5a5', marginBottom: '3px', fontSize: '12px' }}>
              Development Preview
            </strong>
            Official site at{' '}
            <a
              href="https://drivethrudata.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#fca5a5', textDecoration: 'underline' }}
            >
              drivethrudata.com
            </a>
          </div>
        </div>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Close"
          style={{
            background: 'none',
            border: 'none',
            color: 'rgba(255,255,255,0.6)',
            cursor: 'pointer',
            fontSize: '16px',
            lineHeight: 1,
            padding: '0',
            flexShrink: 0,
            marginTop: '-1px',
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}
