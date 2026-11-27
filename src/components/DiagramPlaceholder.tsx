interface DiagramPlaceholderProps {
  variant: 'topology'
}

/** Line drawing used for projects that have no photo or screenshot. */
export default function DiagramPlaceholder({ variant }: DiagramPlaceholderProps) {
  if (variant !== 'topology') return null
  return (
    <svg
      className="diagram"
      viewBox="40 50 320 140"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      role="img"
      aria-label="Topology optimization: optimized material distribution within the frame design space"
    >
      <rect x="60" y="60" width="280" height="120" rx="4" strokeDasharray="4 3" opacity="0.35" />
      <path
        d="M 80 70 L 120 70 L 140 90 L 180 90 L 200 70 L 260 70 L 280 90 L 320 90 L 320 150 L 280 150 L 260 170 L 200 170 L 180 150 L 140 150 L 120 170 L 80 170 Z"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.06"
      />
      <line x1="160" y1="90" x2="160" y2="150" opacity="0.45" />
      <line x1="240" y1="70" x2="240" y2="170" opacity="0.45" />
      <circle cx="100" cy="100" r="4" fill="currentColor" stroke="none" opacity="0.6" />
      <circle cx="300" cy="100" r="4" fill="currentColor" stroke="none" opacity="0.6" />
      <circle cx="200" cy="120" r="3" fill="currentColor" stroke="none" opacity="0.4" />
    </svg>
  )
}
