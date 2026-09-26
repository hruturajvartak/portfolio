import { useEffect, useState } from 'react'
import { profile } from '../data/content'

interface NavbarProps {
  onContactClick: () => void
}

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Patents', href: '#patents' },
  { label: 'Skills', href: '#skills' },
]

export default function Navbar({ onContactClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(12, 14, 18, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--graphite-800)' : '1px solid transparent',
        transition: 'all var(--transition-normal)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 'var(--space-4) var(--space-6)',
        }}
      >
        <a
          href="#top"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'var(--text-base)',
            fontWeight: 700,
            color: 'var(--white)',
            letterSpacing: '-0.01em',
          }}
        >
          {profile.name}
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
          <div
            className="nav-links"
            style={{ display: 'flex', gap: 'var(--space-5)' }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--graphite-300)',
                  fontWeight: 500,
                  transition: 'color var(--transition-fast)',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
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
    </nav>
  )
}
