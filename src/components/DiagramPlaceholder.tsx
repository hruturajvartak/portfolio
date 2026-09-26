interface DiagramPlaceholderProps {
  variant: 'frame' | 'arm' | 'cabin' | 'topology' | 'digital-twin' | 'hydraulic'
  label: string
}

const diagrams: Record<DiagramPlaceholderProps['variant'], React.ReactNode> = {
  frame: (
    <svg viewBox="0 0 400 240" fill="none" stroke="currentColor" strokeWidth="1.2">
      {/* Excavator frame outline - top view */}
      <rect x="80" y="80" width="240" height="80" rx="6" />
      <rect x="100" y="95" width="200" height="50" rx="4" strokeDasharray="4 3" opacity="0.5" />
      <circle cx="120" cy="120" r="8" />
      <circle cx="280" cy="120" r="8" />
      <line x1="200" y1="80" x2="200" y2="160" />
      {/* Boom pivot */}
      <circle cx="200" cy="120" r="14" strokeWidth="2" />
      <line x1="200" y1="120" x2="340" y2="50" strokeWidth="2" />
      <line x1="340" y1="50" x2="370" y2="100" strokeWidth="2" />
      {/* Dimension lines */}
      <line x1="80" y1="185" x2="320" y2="185" strokeDasharray="2 2" opacity="0.4" />
      <line x1="80" y1="180" x2="80" y2="190" opacity="0.4" />
      <line x1="320" y1="180" x2="320" y2="190" opacity="0.4" />
    </svg>
  ),
  arm: (
    <svg viewBox="0 0 400 240" fill="none" stroke="currentColor" strokeWidth="1.2">
      {/* Excavator arm - stick geometry */}
      <path d="M 60 60 L 180 80 L 300 70 L 340 100 L 320 140 L 200 130 L 80 150 Z" />
      <path d="M 100 85 L 260 100" strokeDasharray="4 3" opacity="0.4" />
      {/* Pin holes */}
      <circle cx="80" cy="105" r="10" strokeWidth="2" />
      <circle cx="300" cy="100" r="10" strokeWidth="2" />
      <circle cx="200" cy="110" r="6" />
      {/* Gussets */}
      <line x1="150" y1="82" x2="150" y2="125" opacity="0.5" />
      <line x1="250" y1="78" x2="250" y2="128" opacity="0.5" />
      {/* Bucket outline */}
      <path d="M 330 95 L 370 90 L 375 130 L 340 135 Z" strokeWidth="2" />
    </svg>
  ),
  cabin: (
    <svg viewBox="0 0 400 240" fill="none" stroke="currentColor" strokeWidth="1.2">
      {/* Cabin visibility diagram - top view */}
      <rect x="140" y="80" width="120" height="80" rx="8" />
      {/* Operator position */}
      <circle cx="200" cy="120" r="8" />
      {/* Visibility arcs */}
      <path d="M 200 120 A 120 120 0 0 1 320 120" strokeDasharray="3 3" opacity="0.4" />
      <path d="M 200 120 A 120 120 0 0 0 80 120" strokeDasharray="3 3" opacity="0.4" />
      <path d="M 200 120 A 100 100 0 0 1 200 220" strokeDasharray="3 3" opacity="0.3" />
      {/* Blind spot shading */}
      <path d="M 80 120 L 60 80 L 100 60 L 140 80 Z" opacity="0.15" fill="currentColor" stroke="none" />
      {/* Mirror positions */}
      <rect x="130" y="75" width="12" height="6" rx="2" strokeWidth="1.5" />
      <rect x="258" y="75" width="12" height="6" rx="2" strokeWidth="1.5" />
    </svg>
  ),
  topology: (
    <svg viewBox="0 0 400 240" fill="none" stroke="currentColor" strokeWidth="1.2">
      {/* Topology optimization - material distribution */}
      <rect x="60" y="60" width="280" height="120" rx="4" strokeDasharray="4 3" opacity="0.3" />
      {/* Optimized shape */}
      <path d="M 80 70 L 120 70 L 140 90 L 180 90 L 200 70 L 260 70 L 280 90 L 320 90 L 320 150 L 280 150 L 260 170 L 200 170 L 180 150 L 140 150 L 120 170 L 80 170 Z" strokeWidth="2" />
      {/* Internal webs */}
      <line x1="160" y1="90" x2="160" y2="150" opacity="0.4" />
      <line x1="240" y1="70" x2="240" y2="170" opacity="0.4" />
      {/* Stress indicators */}
      <circle cx="100" cy="100" r="4" fill="currentColor" stroke="none" opacity="0.5" />
      <circle cx="300" cy="100" r="4" fill="currentColor" stroke="none" opacity="0.5" />
      <circle cx="200" cy="120" r="3" fill="currentColor" stroke="none" opacity="0.3" />
    </svg>
  ),
  'digital-twin': (
    <svg viewBox="0 0 400 240" fill="none" stroke="currentColor" strokeWidth="1.2">
      {/* Digital twin architecture */}
      {/* Physical system */}
      <rect x="40" y="60" width="80" height="50" rx="6" />
      <text x="80" y="90" textAnchor="middle" fontSize="9" fill="currentColor" stroke="none">Sensors</text>
      {/* Edge */}
      <rect x="160" y="60" width="80" height="50" rx="6" />
      <text x="200" y="90" textAnchor="middle" fontSize="9" fill="currentColor" stroke="none">Edge</text>
      {/* Cloud */}
      <ellipse cx="320" cy="85" rx="40" ry="25" />
      <text x="320" y="90" textAnchor="middle" fontSize="9" fill="currentColor" stroke="none">Cloud / ML</text>
      {/* Arrows */}
      <line x1="120" y1="85" x2="160" y2="85" strokeWidth="1.5" />
      <polygon points="155,82 160,85 155,88" fill="currentColor" stroke="none" />
      <line x1="240" y1="85" x2="280" y2="85" strokeWidth="1.5" />
      <polygon points="275,82 280,85 275,88" fill="currentColor" stroke="none" />
      {/* Feedback loop */}
      <path d="M 320 110 Q 200 160 80 110" strokeDasharray="3 3" opacity="0.4" />
      <polygon points="83,113 80,110 83,107" fill="currentColor" stroke="none" opacity="0.4" />
      {/* Twin model */}
      <rect x="140" y="160" width="120" height="40" rx="6" opacity="0.5" />
      <text x="200" y="185" textAnchor="middle" fontSize="9" fill="currentColor" stroke="none">Digital Twin Model</text>
    </svg>
  ),
  hydraulic: (
    <svg viewBox="0 0 400 240" fill="none" stroke="currentColor" strokeWidth="1.2">
      {/* Hydraulic circuit diagram */}
      <circle cx="80" cy="120" r="20" strokeWidth="2" />
      <text x="80" y="124" textAnchor="middle" fontSize="9" fill="currentColor" stroke="none">P</text>
      {/* Lines */}
      <line x1="100" y1="120" x2="160" y2="120" strokeWidth="2" />
      {/* Valve */}
      <rect x="160" y="105" width="50" height="30" rx="4" strokeWidth="2" />
      <line x1="185" y1="105" x2="185" y2="135" opacity="0.5" />
      {/* To cylinder */}
      <line x1="210" y1="115" x2="260" y2="115" strokeWidth="2" />
      <line x1="210" y1="135" x2="260" y2="135" strokeWidth="2" />
      {/* Cylinder */}
      <rect x="260" y="90" width="20" height="70" rx="3" strokeWidth="2" />
      <rect x="280" y="100" width="60" height="12" rx="2" strokeWidth="2" />
      {/* Return line */}
      <line x1="80" y1="140" x2="80" y2="190" strokeWidth="1.5" />
      <line x1="80" y1="190" x2="340" y2="190" strokeWidth="1.5" opacity="0.4" />
      <line x1="340" y1="160" x2="340" y2="190" strokeWidth="1.5" opacity="0.4" />
      {/* Tank */}
      <rect x="320" y="160" width="40" height="30" rx="4" opacity="0.3" />
    </svg>
  ),
}

export default function DiagramPlaceholder({ variant, label }: DiagramPlaceholderProps) {
  return (
    <div
      style={{
        background: 'var(--graphite-850)',
        border: '1px solid var(--graphite-700)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-6)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--space-3)',
      }}
    >
      <div style={{ width: '100%', maxWidth: '360px', color: 'var(--steel-blue)' }}>
        {diagrams[variant]}
      </div>
      <span
        style={{
          fontSize: 'var(--text-xs)',
          color: 'var(--graphite-400)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontFamily: 'var(--font-heading)',
        }}
      >
        {label}
      </span>
    </div>
  )
}
