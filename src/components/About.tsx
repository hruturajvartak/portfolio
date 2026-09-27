import { profile } from '../data/content'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">About</p>
        <h2 className="section-title">About</h2>
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
              I'm {profile.fullName}, a mechanical engineering leader with 16+ years of experience
              in structural and fluid systems engineering. My career path spans Facade India Testing,
              CNH Industrial and AGCO, John Deere Harvester Works, and Zoomlion Heavy Industries —
              progressing from hands-on engineering to leading cross-functional teams.
            </p>
            <p style={{ lineHeight: 1.8 }}>
              My core focus is on welded and fabricated steel structures, load-sense hydraulic
              systems, FEA correlation in ANSYS and Abaqus, and durability validation through
              DFMEA and DVP&R rigor. At Zoomlion, I built and led a 12-engineer team across the
              US and China, delivering three product launches ahead of schedule while cutting the
              development cycle from 9 to 6 months.
            </p>
            <p style={{ lineHeight: 1.8 }}>
              I hold a B.E. and M.S. in Mechanical Engineering, an MBA, and two granted US patents.
              My FEA work consistently correlates within 92% of physical test results, and I've
              driven 40% reduction in subsystem failures through structured validation programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
