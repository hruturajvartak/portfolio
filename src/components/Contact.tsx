import { profile } from '../data/content'

interface ContactProps {
  onContactClick: () => void
}

export default function Contact({ onContactClick }: ContactProps) {
  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Get in touch.</h2>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'var(--space-8)',
            textAlign: 'center',
          }}
        >
          <button
            onClick={onContactClick}
            style={{
              fontSize: 'var(--text-base)',
              fontWeight: 600,
              color: 'var(--white)',
              background: 'var(--steel-blue)',
              padding: 'var(--space-3) var(--space-8)',
              borderRadius: 'var(--radius-md)',
              transition: 'all var(--transition-normal)',
              boxShadow: '0 4px 16px rgba(74, 144, 217, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--steel-blue-bright)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--steel-blue)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Contact Me
          </button>

          <div
            style={{
              display: 'flex',
              gap: 'var(--space-8)',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {/* Email placeholder */}
            <a
              href={`mailto:${profile.email}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                fontSize: 'var(--text-sm)',
                color: 'var(--graphite-300)',
                transition: 'color var(--transition-fast)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--graphite-300)')}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M 3 7 L 12 13 L 21 7" />
              </svg>
              {profile.email}
            </a>

            {/* LinkedIn placeholder */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                fontSize: 'var(--text-sm)',
                color: 'var(--graphite-300)',
                transition: 'color var(--transition-fast)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--graphite-300)')}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="8" y1="11" x2="8" y2="17" />
                <circle cx="8" cy="7.5" r="0.8" fill="currentColor" stroke="none" />
                <path d="M 12 17 L 12 11" />
                <path d="M 12 14 C 12 12 14 12 15 13 L 15 17" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
