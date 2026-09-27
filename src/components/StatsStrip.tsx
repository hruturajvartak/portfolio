import { stats } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function StatsStrip() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()

  return (
    <section style={{ padding: 'var(--space-16) 0', background: 'var(--graphite-950)' }}>
      <div className="container">
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'var(--space-6)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
          className="stats-grid"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                textAlign: 'center',
                padding: 'var(--space-6) var(--space-4)',
                background: 'var(--graphite-900)',
                border: '1px solid var(--graphite-800)',
                borderRadius: 'var(--radius-lg)',
                transition: 'border-color var(--transition-normal)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 80}ms`,
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
                  fontSize: 'var(--text-4xl)',
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--steel-blue-bright)',
                  marginBottom: 'var(--space-2)',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--graphite-400)',
                  lineHeight: 1.4,
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
