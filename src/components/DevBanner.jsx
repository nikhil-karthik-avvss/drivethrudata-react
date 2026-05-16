import { useState } from 'react';

export default function DevBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div style={{
      position: 'sticky',
      top: 0,
      zIndex: 9999,
      backgroundColor: '#1a1a2e',
      borderBottom: '2px solid #e63946',
      color: '#f1f1f1',
      padding: '10px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      fontSize: '14px',
      fontFamily: 'sans-serif',
    }}>
      <span style={{ color: '#e63946', fontWeight: 700, fontSize: '16px' }}>⚠</span>
      <span>
        This is a <strong>development preview</strong> of the DriveThruData website.
        The official site is at{' '}
        <a
          href="https://drivethrudata.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#4fc3f7', textDecoration: 'underline' }}
        >
          drivethrudata.com
        </a>
        .
      </span>
      <button
        onClick={() => setDismissed(true)}
        style={{
          marginLeft: 'auto',
          background: 'none',
          border: '1px solid #555',
          color: '#aaa',
          borderRadius: '4px',
          padding: '2px 10px',
          cursor: 'pointer',
          fontSize: '13px',
          flexShrink: 0,
        }}
      >
        Dismiss
      </button>
    </div>
  );
}
