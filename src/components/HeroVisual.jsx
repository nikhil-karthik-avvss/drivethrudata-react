import './HeroVisual.css';

const CX = 250, CY = 172, R = 98;

const nodes = [
  { label: 'Data',       angle: -90,  color: '#0891B2' },
  { label: 'Analytics',  angle: -30,  color: '#F97316' },
  { label: 'Insights',   angle:  30,  color: '#16A34A' },
  { label: 'Platform',   angle:  90,  color: '#7C3AED' },
  { label: 'Governance', angle:  150, color: '#E11D48' },
  { label: 'Strategy',   angle:  210, color: '#D97706' },
].map(n => ({
  ...n,
  x: Math.round(CX + R * Math.cos(n.angle * Math.PI / 180)),
  y: Math.round(CY + R * Math.sin(n.angle * Math.PI / 180)),
}));

const chips = [
  { label: 'End-to-End AI',      color: '#0891B2' },
  { label: 'Data Maturity',      color: '#16A34A' },
  { label: 'Enterprise Scale',   color: '#7C3AED' },
];

export default function HeroVisual() {
  return (
    <div className="hero-viz">
      <svg className="hero-viz__svg" viewBox="0 0 500 350" preserveAspectRatio="xMidYMid slice">
        <defs>
          {/* Background gradient */}
          <radialGradient id="hvBg" cx="50%" cy="48%" r="65%">
            <stop offset="0%"   stopColor="#1a3a6e"/>
            <stop offset="100%" stopColor="#060e1f"/>
          </radialGradient>

          {/* Glow filters */}
          <filter id="hvGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="hvCenterGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>

          {/* Per-node gradients for connection lines */}
          {nodes.map(n => (
            <linearGradient
              key={`lg-${n.label}`}
              id={`lg-${n.label}`}
              gradientUnits="userSpaceOnUse"
              x1={CX} y1={CY} x2={n.x} y2={n.y}
            >
              <stop offset="0%"   stopColor="#3B82F6" stopOpacity="0.7"/>
              <stop offset="100%" stopColor={n.color}  stopOpacity="0.5"/>
            </linearGradient>
          ))}
        </defs>

        {/* Background */}
        <rect width="500" height="350" fill="url(#hvBg)"/>

        {/* Subtle dot grid */}
        {Array.from({ length: 10 }).map((_, row) =>
          Array.from({ length: 13 }).map((_, col) => (
            <circle
              key={`dot-${row}-${col}`}
              cx={col * 42 + 8}
              cy={row * 38 + 8}
              r="0.8"
              fill="white"
              opacity="0.07"
            />
          ))
        )}

        {/* Outer pulsing rings on center */}
        <circle cx={CX} cy={CY} r="64" fill="none" stroke="#3B82F6" strokeWidth="1" className="hv-ring hv-ring--1"/>
        <circle cx={CX} cy={CY} r="50" fill="none" stroke="#3B82F6" strokeWidth="1" className="hv-ring hv-ring--2"/>

        {/* Connection lines */}
        {nodes.map(n => (
          <line
            key={`line-${n.label}`}
            x1={CX} y1={CY} x2={n.x} y2={n.y}
            stroke={`url(#lg-${n.label})`}
            strokeWidth="1.5"
            strokeDasharray="5 4"
            opacity="0.6"
          />
        ))}

        {/* Animated flow dots along each connection */}
        {nodes.map((n, i) => (
          <circle key={`flow-${n.label}`} r="3.5" fill={n.color} opacity="0.95" filter="url(#hvGlow)">
            <animateMotion
              dur={`${1.8 + i * 0.25}s`}
              repeatCount="indefinite"
              begin={`${i * 0.38}s`}
              path={`M${CX},${CY} L${n.x},${n.y}`}
            />
          </circle>
        ))}

        {/* Satellite nodes */}
        {nodes.map(n => (
          <g key={`node-${n.label}`}>
            {/* Outer glow ring */}
            <circle cx={n.x} cy={n.y} r="20" fill={n.color} opacity="0.12" filter="url(#hvGlow)"/>
            {/* Mid ring */}
            <circle cx={n.x} cy={n.y} r="15" fill={n.color} opacity="0.2"/>
            {/* Core */}
            <circle cx={n.x} cy={n.y} r="11" fill={n.color} filter="url(#hvGlow)"/>
            {/* Label */}
            <text
              x={n.x}
              y={n.y + 27}
              textAnchor="middle"
              fill="white"
              fontSize="8.5"
              fontWeight="600"
              fontFamily="system-ui, sans-serif"
              opacity="0.85"
              letterSpacing="0.5"
            >
              {n.label.toUpperCase()}
            </text>
          </g>
        ))}

        {/* Center hub */}
        <circle cx={CX} cy={CY} r="36" fill="#1352CC" opacity="0.18" filter="url(#hvCenterGlow)"/>
        <circle cx={CX} cy={CY} r="26" fill="#1352CC" opacity="0.35"/>
        <circle cx={CX} cy={CY} r="20" fill="#1352CC" filter="url(#hvCenterGlow)"/>

        {/* Center icon — AI circuit brain */}
        <g transform={`translate(${CX - 11}, ${CY - 11})`} stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round">
          <path d="M11,4 a7,7 0 1,1 0,14"/>
          <path d="M11,4 a7,7 0 0,0 0,14"/>
          <line x1="11" y1="11" x2="11" y2="19"/>
          <line x1="7"  y1="19" x2="15" y2="19"/>
          <circle cx="11" cy="11" r="2" fill="white" stroke="none"/>
          <line x1="5"  y1="8"  x2="3"  y2="6"/>
          <line x1="17" y1="8"  x2="19" y2="6"/>
          <circle cx="3"  cy="6"  r="1.5" fill="white" stroke="none"/>
          <circle cx="19" cy="6"  r="1.5" fill="white" stroke="none"/>
        </g>

        {/* Center label */}
        <text x={CX} y={CY + 44} textAnchor="middle" fill="white" fontSize="8" fontWeight="700"
          fontFamily="system-ui, sans-serif" opacity="0.55" letterSpacing="1.5">
          AI HUB
        </text>
      </svg>

      {/* Bottom chips */}
      <div className="hero-viz__chips">
        {chips.map(c => (
          <div key={c.label} className="hero-viz__chip" style={{ '--cc': c.color }}>
            <span className="hero-viz__chip-dot" />
            {c.label}
          </div>
        ))}
      </div>
    </div>
  );
}
