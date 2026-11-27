import { useEffect, useState } from 'react'
import { profile } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'
import { Close, Menu } from './icons'

interface NavbarProps {
  onContactClick: () => void
}

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Patents', id: 'patents' },
  { label: 'Skills', id: 'skills' },
]

const sectionIds = navLinks.map((l) => l.id)

export default function Navbar({ onContactClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const brand = (
    <a href="#top" className="nav__brand" onClick={closeMenu}>
      <span className="nav__mark" aria-hidden>
        RV
      </span>
      {profile.shortName}
    </a>
  )

  return (
    <>
      <nav className={`nav ${scrolled ? 'is-scrolled' : ''}`} aria-label="Main">
        <div className="container nav__inner">
          {brand}

          <div className="nav__links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav__link ${activeId === link.id ? 'is-active' : ''}`}
                aria-current={activeId === link.id ? 'true' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav__actions">
            <button className="btn btn--primary btn--sm nav__cta" onClick={onContactClick}>
              Get in touch
            </button>
            <button
              className="nav__menu-btn"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <Menu />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="mobile-menu__top">
            {brand}
            <button className="nav__menu-btn" onClick={closeMenu} aria-label="Close menu">
              <Close />
            </button>
          </div>
          <div className="mobile-menu__links">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </div>
          <button
            className="btn btn--primary"
            onClick={() => {
              closeMenu()
              onContactClick()
            }}
          >
            Get in touch
          </button>
        </div>
      )}
    </>
  )
}
