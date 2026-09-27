const accolades = [
  {
    title: 'MIT xPRO Certificate — AI Strategy',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="var(--steel-blue)" strokeWidth="1.5">
        <path d="M 16 4 L 26 10 L 26 22 L 16 28 L 6 22 L 6 10 Z" />
        <path d="M 16 4 L 16 28" opacity="0.4" />
        <path d="M 6 10 L 26 22" opacity="0.4" />
        <path d="M 26 10 L 6 22" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: 'MIT xPRO Certificate — AI Product Design',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="var(--steel-blue)" strokeWidth="1.5">
        <rect x="6" y="8" width="20" height="16" rx="2" />
        <path d="M 11 14 L 14 17 L 11 20" />
        <line x1="17" y1="20" x2="22" y2="20" />
      </svg>
    ),
  },
]

export default function Accolades() {
  return (
    <section id="accolades" className="section section--alt">
      <div className="container">
        <p className="section-label">Accolades</p>
        <h2 className="section-title">Certifications</h2>
        <div
          style={{
            display: 'flex',
            gap: 'var(--space-6)',
            flexWrap: 'wrap',
          }}
        >
          {accolades.map((item) => (
            <div
              key={item.title}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-4)',
                background: 'var(--graphite-850)',
                border: '1px solid var(--graphite-800)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-5) var(--space-6)',
                flex: '1 1 320px',
                transition: 'border-color var(--transition-normal)',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = 'var(--steel-blue-dark)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = 'var(--graphite-800)')
              }
            >
              <div style={{ flexShrink: 0 }}>{item.icon}</div>
              <span
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--white)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
