import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Work History</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {experience.map((job, i) => (
            <div
              key={job.company}
              style={{
                display: 'grid',
                gridTemplateColumns: '180px 1fr',
                gap: 'var(--space-8)',
                paddingBottom: 'var(--space-12)',
                position: 'relative',
              }}
              className="exp-row"
            >
              {/* Dates + timeline line */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  paddingRight: 'var(--space-6)',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--graphite-400)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 500,
                    textAlign: 'right',
                  }}
                >
                  {job.dates}
                </span>
                {/* Timeline dot */}
                <div
                  style={{
                    position: 'absolute',
                    right: '-7px',
                    top: '6px',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    background: 'var(--steel-blue)',
                    border: '3px solid var(--graphite-900)',
                    zIndex: 2,
                  }}
                />
              </div>
              {/* Vertical line */}
              {i < experience.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    left: '173px',
                    top: '20px',
                    bottom: '0',
                    width: '2px',
                    background: 'var(--graphite-700)',
                  }}
                />
              )}
              {/* Content */}
              <div style={{ paddingBottom: i === experience.length - 1 ? '0' : '0' }}>
                <h3
                  style={{
                    fontSize: 'var(--text-xl)',
                    color: 'var(--white)',
                    marginBottom: 'var(--space-1)',
                  }}
                >
                  {job.title}
                </h3>
                <p
                  style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--steel-blue-bright)',
                    marginBottom: 'var(--space-4)',
                    fontWeight: 500,
                  }}
                >
                  {job.company}
                </p>
                {job.bullets.length > 0 && (
                  <ul
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'var(--space-3)',
                    }}
                  >
                    {job.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '20px 1fr',
                          gap: 'var(--space-3)',
                          fontSize: 'var(--text-sm)',
                          color: 'var(--graphite-300)',
                          lineHeight: 1.6,
                        }}
                      >
                        <span style={{ color: 'var(--steel-blue)', fontSize: 'var(--text-xs)' }}>
                          ▸
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
