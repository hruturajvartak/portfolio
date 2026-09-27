import { profile } from '../data/content'

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
          opacity: 0.12,
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
          gap: 'var(--space-8)',
        }}
      >
        {/* 1. Name */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            color: 'var(--white)',
            maxWidth: '800px',
            animation: 'fadeInUp 0.8s ease 0.1s forwards',
            opacity: 0,
          }}
        >
          {profile.name}
        </h1>

        {/* 2. One-line positioning */}
        <p
          style={{
            fontSize: 'var(--text-xl)',
            lineHeight: 1.6,
            color: 'var(--graphite-300)',
            maxWidth: '680px',
            animation: 'fadeInUp 0.8s ease 0.25s forwards',
            opacity: 0,
          }}
        >
          {profile.tagline}
        </p>

        {/* 3. Single CTA */}
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
            animation: 'fadeInUp 0.8s ease 0.4s forwards',
            opacity: 0,
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
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: 'var(--space-8)',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-2)',
          opacity: 0,
          animation: 'fadeIn 1s ease 1.2s forwards',
        }}
        className="scroll-indicator"
      >
        <span
          style={{
            fontSize: 'var(--text-xs)',
            color: 'var(--graphite-500)',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            fontFamily: 'var(--font-heading)',
            fontWeight: 500,
          }}
        >
          Scroll
        </span>
        <svg
          width="20"
          height="32"
          viewBox="0 0 20 32"
          fill="none"
          stroke="var(--graphite-500)"
          strokeWidth="1.5"
        >
          <rect x="3" y="2" width="14" height="22" rx="7" opacity="0.5" />
          <circle cx="10" cy="9" r="2.5" fill="var(--steel-blue)" stroke="none">
            <animate attributeName="cy" values="9;16;9" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </header>
  )
}
