import { projects } from '../data/content'
import DiagramPlaceholder from './DiagramPlaceholder'

const diagramVariants = [
  'frame',
  'frame',
  'arm',
  'cabin',
  'topology',
  'digital-twin',
] as const

const diagramLabels = [
  'Frame Top View — FEA Load Cases',
  'Frame Geometry — Static & Modal Analysis',
  'Arm Stick — Pin Geometry & Contour',
  'Cabin Visibility — ISO 5006 Zones',
  'Topology Optimization — Material Distribution',
  'Digital Twin Architecture — Sensor to Cloud',
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Selected Work</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
          {projects.map((project, i) => (
            <article
              key={project.title}
              style={{
                background: 'var(--graphite-900)',
                border: '1px solid var(--graphite-800)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                transition: 'border-color var(--transition-normal)',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = 'var(--graphite-700)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = 'var(--graphite-800)')
              }
            >
              <div
                className="project-grid"
              style={{
                  display: 'grid',
                  gridTemplateColumns: '340px 1fr',
                  gap: 0,
                }}
              >
                {/* Diagram */}
                <div
                  style={{
                    padding: 'var(--space-8)',
                    background: 'var(--graphite-850)',
                    borderRight: '1px solid var(--graphite-800)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  className="project-diagram-col"
                >
                  <DiagramPlaceholder
                    variant={diagramVariants[i]}
                    label={diagramLabels[i]}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: 'var(--space-8)' }}>
                  <span
                    style={{
                      fontSize: 'var(--text-xs)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: 'var(--steel-blue)',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                    }}
                  >
                    {project.category}
                  </span>
                  <h3
                    style={{
                      fontSize: 'var(--text-2xl)',
                      color: 'var(--white)',
                      marginTop: 'var(--space-2)',
                      marginBottom: 'var(--space-5)',
                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: 'var(--text-base)',
                      color: 'var(--graphite-200)',
                      marginBottom: 'var(--space-6)',
                      lineHeight: 1.7,
                    }}
                  >
                    {project.goal}
                  </p>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 'var(--space-6)',
                      marginBottom: 'var(--space-6)',
                    }}
                    className="project-details-grid"
                  >
                    <div>
                      <h4
                        style={{
                          fontSize: 'var(--text-sm)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: 'var(--graphite-400)',
                          marginBottom: 'var(--space-3)',
                          fontFamily: 'var(--font-heading)',
                        }}
                      >
                        Contributions
                      </h4>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                        {project.contributions.map((c, j) => (
                          <li
                            key={j}
                            style={{
                              fontSize: 'var(--text-sm)',
                              color: 'var(--graphite-300)',
                              lineHeight: 1.6,
                              display: 'grid',
                              gridTemplateColumns: '16px 1fr',
                              gap: 'var(--space-2)',
                            }}
                          >
                            <span style={{ color: 'var(--steel-blue)' }}>▸</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: 'var(--text-sm)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: 'var(--graphite-400)',
                          marginBottom: 'var(--space-3)',
                          fontFamily: 'var(--font-heading)',
                        }}
                      >
                        Analysis & Validation
                      </h4>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                        {project.analysis.map((a, j) => (
                          <li
                            key={j}
                            style={{
                              fontSize: 'var(--text-sm)',
                              color: 'var(--graphite-300)',
                              lineHeight: 1.6,
                              display: 'grid',
                              gridTemplateColumns: '16px 1fr',
                              gap: 'var(--space-2)',
                            }}
                          >
                            <span style={{ color: 'var(--steel-blue)' }}>▸</span>
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Results */}
                  <div
                    style={{
                      background: 'var(--graphite-800)',
                      borderRadius: 'var(--radius-md)',
                      padding: 'var(--space-5)',
                      marginBottom: 'var(--space-5)',
                    }}
                  >
                    <h4
                      style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--steel-blue-bright)',
                        marginBottom: 'var(--space-3)',
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      Results
                    </h4>
                    <ul
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-2)',
                      }}
                    >
                      {project.results.map((r, j) => (
                        <li
                          key={j}
                          style={{
                            fontSize: 'var(--text-sm)',
                            color: 'var(--graphite-200)',
                            lineHeight: 1.6,
                            display: 'grid',
                            gridTemplateColumns: '16px 1fr',
                            gap: 'var(--space-2)',
                          }}
                        >
                          <span style={{ color: 'var(--steel-blue-bright)' }}>◆</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div
                    style={{
                      display: 'flex',
                      gap: 'var(--space-2)',
                      flexWrap: 'wrap',
                    }}
                  >
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          fontSize: 'var(--text-xs)',
                          color: 'var(--graphite-300)',
                          background: 'var(--graphite-850)',
                          border: '1px solid var(--graphite-700)',
                          padding: 'var(--space-1) var(--space-3)',
                          borderRadius: 'var(--radius-full)',
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 500,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
