import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">Technical Expertise</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-8)',
          }}
          className="skills-grid"
        >
          {/* Core expertise */}
          <div
            style={{
              background: 'var(--graphite-900)',
              border: '1px solid var(--graphite-800)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-8)',
            }}
          >
            <h3
              style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--white)',
                marginBottom: 'var(--space-5)',
              }}
            >
              Core Competencies
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {skills.core.map((skill) => (
                <li
                  key={skill}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '20px 1fr',
                    gap: 'var(--space-3)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--graphite-300)',
                    lineHeight: 1.6,
                    paddingBottom: 'var(--space-3)',
                    borderBottom: '1px solid var(--graphite-800)',
                  }}
                >
                  <span style={{ color: 'var(--steel-blue)', fontSize: 'var(--text-xs)' }}>▸</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Software + details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <div
              style={{
                background: 'var(--graphite-900)',
                border: '1px solid var(--graphite-800)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-8)',
              }}
            >
              <h3
                style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--white)',
                  marginBottom: 'var(--space-5)',
                }}
              >
                CAD & Engineering Software
              </h3>
              <div
                style={{
                  display: 'flex',
                  gap: 'var(--space-2)',
                  flexWrap: 'wrap',
                }}
              >
                {skills.software.map((tool) => (
                  <span
                    key={tool}
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--graphite-200)',
                      background: 'var(--graphite-850)',
                      border: '1px solid var(--graphite-700)',
                      padding: 'var(--space-2) var(--space-4)',
                      borderRadius: 'var(--radius-md)',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 500,
                      transition: 'all var(--transition-fast)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--steel-blue-dark)'
                      e.currentTarget.style.color = 'var(--white)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--graphite-700)'
                      e.currentTarget.style.color = 'var(--graphite-200)'
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div
              style={{
                background: 'var(--graphite-900)',
                border: '1px solid var(--graphite-800)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-8)',
              }}
            >
              <h3
                style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--white)',
                  marginBottom: 'var(--space-5)',
                }}
              >
                Standards & Compliance
              </h3>
              <div
                style={{
                  display: 'flex',
                  gap: 'var(--space-2)',
                  flexWrap: 'wrap',
                }}
              >
                {['CE Marking (EN 280)', 'ANSI', 'CSA', 'ISO 5006', 'ISO 3471', 'ISO 3449', 'ISO 10262', 'ISO 12117-2', 'APQP / PPAP'].map(
                  (std) => (
                    <span
                      key={std}
                      style={{
                        fontSize: 'var(--text-xs)',
                        color: 'var(--graphite-300)',
                        background: 'var(--graphite-850)',
                        border: '1px solid var(--graphite-700)',
                        padding: 'var(--space-1) var(--space-3)',
                        borderRadius: 'var(--radius-sm)',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 500,
                      }}
                    >
                      {std}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
