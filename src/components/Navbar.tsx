import { useEffect, useState } from 'react'
import { profile } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'

interface NavbarProps {
  onContactClick: () => void
}

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Patents', href: '#patents' },
  { label: 'Skills', href: '#skills' },
]

const sectionIds = ['experience', 'projects', 'about', 'patents', 'skills', 'contact']

export default function Navbar({ onContactClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
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
            <div className="nav-links" style={{ display: 'flex', gap: 'var(--space-5)' }}>
              {navLinks.map((link) => {
                const id = link.href.slice(1)
                const isActive = activeId === id
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: isActive ? 'var(--white)' : 'var(--graphite-300)',
                      fontWeight: isActive ? 600 : 500,
                      transition: 'color var(--transition-fast)',
                      position: 'relative',
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: '-6px',
                          left: 0,
                          right: 0,
                          height: '2px',
                          background: 'var(--steel-blue)',
                          borderRadius: '1px',
                        }}
                      />
                    )}
                  </a>
                )
              })}
            </div>

            <button
              onClick={onContactClick}
              className="nav-contact-btn"
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
              Contact Me
            </button>

            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              style={{
                display: 'none',
                color: 'var(--graphite-200)',
                padding: 'var(--space-1)',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 150,
            background: 'rgba(8, 10, 14, 0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-8)',
            animation: 'fadeIn 0.2s ease forwards',
          }}
        >
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            style={{
              position: 'absolute',
              top: 'var(--space-5)',
              right: 'var(--space-5)',
              color: 'var(--graphite-300)',
              fontSize: 'var(--text-xl)',
              padding: 'var(--space-2)',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
          {navLinks.map((link) => {
            const id = link.href.slice(1)
            const isActive = activeId === id
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 600,
                  fontFamily: 'var(--font-heading)',
                  color: isActive ? 'var(--white)' : 'var(--graphite-300)',
                  transition: 'color var(--transition-fast)',
                }}
              >
                {link.label}
              </a>
            )
          })}
          <button
            onClick={() => {
              closeMenu()
              onContactClick()
            }}
            style={{
              fontSize: 'var(--text-base)',
              fontWeight: 600,
              color: 'var(--white)',
              background: 'var(--steel-blue)',
              padding: 'var(--space-3) var(--space-8)',
              borderRadius: 'var(--radius-md)',
            }}
          >
            Contact Me
          </button>
        </div>
      )}
    </>
  )
}
