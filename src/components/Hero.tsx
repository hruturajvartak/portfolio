import { profile, stats } from '../data/content'

interface HeroProps {
  onContactClick: () => void
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <header
      id="top"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background:
          'radial-gradient(ellipse at 70% 30%, rgba(74, 144, 217, 0.08) 0%, transparent 50%), var(--graphite-950)',
        borderBottom: '1px solid var(--graphite-800)',
      }}
    >
      {/* Grid backdrop */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(var(--graphite-800) 1px, transparent 1px), linear-gradient(90deg, var(--graphite-800) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.15,
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 'var(--space-6)',
          paddingTop: 'var(--space-20)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'var(--text-sm)',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: 'var(--steel-blue)',
            animation: 'fadeIn 0.8s ease forwards',
          }}
        >
          Mechanical Engineering Leader
        </span>

        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            color: 'var(--white)',
            maxWidth: '760px',
            animation: 'fadeInUp 0.8s ease 0.1s forwards',
            opacity: 0,
          }}
        >
          {profile.name}
        </h1>

        <p
          style={{
            fontSize: 'var(--text-lg)',
            lineHeight: 1.7,
            color: 'var(--graphite-300)',
            maxWidth: '620px',
            animation: 'fadeInUp 0.8s ease 0.2s forwards',
            opacity: 0,
          }}
        >
          {profile.tagline}
        </p>

        <div
          style={{
            display: 'flex',
            gap: 'var(--space-4)',
            flexWrap: 'wrap',
            animation: 'fadeInUp 0.8s ease 0.3s forwards',
            opacity: 0,
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
            Get in Touch
          </button>
          <a
            href="#projects"
            style={{
              fontSize: 'var(--text-base)',
              fontWeight: 600,
              color: 'var(--graphite-200)',
              background: 'transparent',
              border: '1px solid var(--graphite-600)',
              padding: 'var(--space-3) var(--space-8)',
              borderRadius: 'var(--radius-md)',
              transition: 'all var(--transition-normal)',
              display: 'inline-flex',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--steel-blue)'
              e.currentTarget.style.color = 'var(--white)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--graphite-600)'
              e.currentTarget.style.color = 'var(--graphite-200)'
            }}
          >
            View Projects
          </a>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            gap: 'var(--space-12)',
            flexWrap: 'wrap',
            marginTop: 'var(--space-12)',
            paddingTop: 'var(--space-8)',
            borderTop: '1px solid var(--graphite-800)',
            width: '100%',
            maxWidth: '760px',
            animation: 'fadeInUp 0.8s ease 0.4s forwards',
            opacity: 0,
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  color: 'var(--steel-blue-bright)',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--graphite-400)',
                  marginTop: 'var(--space-1)',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
