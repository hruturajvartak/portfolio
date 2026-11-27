type IconProps = { size?: number }

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
})

export const ArrowRight = ({ size = 18 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const ArrowUpRight = ({ size = 18 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export const ArrowUp = ({ size = 20 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
)

export const Mail = ({ size = 20 }: IconProps) => (
  <svg {...base(size)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

export const LinkedIn = ({ size = 20 }: IconProps) => (
  <svg {...base(size)}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 10.5V16M8 7.5v.01M12 16v-5.5M12 13c0-1.7 1-2.5 2.2-2.5S16 11.3 16 13v3" />
  </svg>
)

export const Menu = ({ size = 20 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M4 8h16M4 16h16" />
  </svg>
)

export const Close = ({ size = 20 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const Check = ({ size = 28 }: IconProps) => (
  <svg {...base(size)} strokeWidth={2.25}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
)
