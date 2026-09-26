import { patents } from '../data/content'

export default function Patents() {
  return (
    <section id="patents" className="section section--alt">
      <div className="container">
        <p className="section-label">Patents</p>
        <h2 className="section-title">Granted US Patents</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: 'var(--space-6)',
          }}
        >
          {patents.map((patent) => (
            <div
              key={patent.id}
              style={{
                background: 'var(--graphite-850)',
                border: '1px solid var(--graphite-800)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-8)',
                transition: 'border-color var(--transition-normal)',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = 'var(--steel-blue-dark)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = 'var(--graphite-800)')
              }
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  stroke="var(--steel-blue)"
                  strokeWidth="1.5"
                >
                  <rect x="5" y="4" width="18" height="20" rx="2" />
                  <line x1="9" y1="10" x2="19" y2="10" />
                  <line x1="9" y1="15" x2="19" y2="15" />
                  <line x1="9" y1="20" x2="15" y2="20" />
                </svg>
                <span
                  style={{
                    fontSize: 'var(--text-xs)',
                    color: 'var(--steel-blue)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  {patent.id}
                </span>
              </div>
              <h3
                style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--white)',
                  marginBottom: 'var(--space-4)',
                  lineHeight: 1.3,
                }}
              >
                {patent.title}
              </h3>
              <p
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--graphite-300)',
                  lineHeight: 1.7,
                }}
              >
                {patent.abstract}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
