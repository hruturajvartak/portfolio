import { profile } from '../data/content'

interface FooterProps {
  onContactClick: () => void
}

export default function Footer({ onContactClick }: FooterProps) {
  return (
    <footer
      style={{
        background: 'var(--graphite-950)',
        borderTop: '1px solid var(--graphite-800)',
        padding: 'var(--space-16) 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--space-6)',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'var(--text-lg)',
                fontWeight: 700,
                color: 'var(--white)',
                marginBottom: 'var(--space-1)',
              }}
            >
              {profile.name}
            </div>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--graphite-400)' }}>
              {profile.title} — 16+ years
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-6)',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href={`mailto:${profile.email}`}
              style={{ fontSize: 'var(--text-sm)', color: 'var(--graphite-300)' }}
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 'var(--text-sm)', color: 'var(--graphite-300)' }}
            >
              LinkedIn
            </a>
            <button
              onClick={onContactClick}
              style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--white)',
                background: 'var(--steel-blue)',
                padding: 'var(--space-2) var(--space-5)',
                borderRadius: 'var(--radius-md)',
                transition: 'background var(--transition-fast)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--steel-blue-bright)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--steel-blue)')}
            >
              Get in Touch
            </button>
          </div>
        </div>
        <div
          style={{
            marginTop: 'var(--space-8)',
            paddingTop: 'var(--space-6)',
            borderTop: '1px solid var(--graphite-800)',
          }}
        >
          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--graphite-500)' }}>
            © {new Date().getFullYear()} {profile.fullName}. All content reflects completed professional work.
          </p>
        </div>
      </div>
    </footer>
  )
}
