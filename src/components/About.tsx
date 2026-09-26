import { profile, skills } from '../data/content'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">About</p>
        <h2 className="section-title">Background</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '300px 1fr',
            gap: 'var(--space-12)',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Photo placeholder */}
          <div
            style={{
              width: '100%',
              aspectRatio: '1',
              borderRadius: 'var(--radius-xl)',
              background:
                'linear-gradient(135deg, var(--graphite-800) 0%, var(--graphite-850) 100%)',
              border: '1px solid var(--graphite-700)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--space-2)',
            }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              stroke="var(--graphite-500)"
              strokeWidth="1.5"
            >
              <circle cx="24" cy="18" r="8" />
              <path d="M 10 42 C 10 32 16 28 24 28 C 32 28 38 32 38 42" />
            </svg>
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--graphite-500)' }}>
              Photo Coming Soon
            </span>
          </div>

          {/* Bio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <p style={{ fontSize: 'var(--text-lg)', lineHeight: 1.8, color: 'var(--graphite-200)' }}>
              I'm {profile.fullName}, a mechanical engineering leader with 16+ years in structural
              and fluid systems design. My work spans welded steel structures, load-sense hydraulic
              systems, FEA correlation, and digital twin implementation across heavy equipment and
              agricultural machinery.
            </p>
            <p style={{ lineHeight: 1.8 }}>
              At Zoomlion, I built and led a 12-engineer team delivering three product launches
              ahead of schedule, cutting the development cycle from 9 to 6 months, and reducing
              subsystem failures by 40% through DFMEA rigor and durability validation. My FEA work
              in ANSYS and Abaqus consistently correlates within 92% of physical test results.
            </p>
            <p style={{ lineHeight: 1.8 }}>
              I hold two granted US patents, an MS in Mechanical Engineering, an MBA, and MIT xPRO
              certifications in AI Strategy and AI Product Design.
            </p>

            {/* Education & Certifications */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'var(--space-6)',
                marginTop: 'var(--space-4)',
                paddingTop: 'var(--space-6)',
                borderTop: '1px solid var(--graphite-800)',
              }}
              className="about-creds"
            >
              <div>
                <h4
                  style={{
                    fontSize: 'var(--text-sm)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--steel-blue)',
                    marginBottom: 'var(--space-3)',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  Education
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  {skills.education.map((edu) => (
                    <li key={edu.degree} style={{ fontSize: 'var(--text-sm)', color: 'var(--graphite-300)' }}>
                      <span style={{ color: 'var(--white)', fontWeight: 500 }}>{edu.degree}</span>
                      <br />
                      {edu.school}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4
                  style={{
                    fontSize: 'var(--text-sm)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--steel-blue)',
                    marginBottom: 'var(--space-3)',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  Certifications
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  {skills.certifications.map((cert) => (
                    <li key={cert} style={{ fontSize: 'var(--text-sm)', color: 'var(--graphite-300)' }}>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
