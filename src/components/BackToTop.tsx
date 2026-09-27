import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        bottom: 'var(--space-6)',
        right: 'var(--space-6)',
        zIndex: 90,
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: 'var(--graphite-850)',
        border: '1px solid var(--graphite-700)',
        color: 'var(--graphite-200)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all var(--transition-normal)',
        animation: 'fadeIn 0.2s ease forwards',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--steel-blue)'
        e.currentTarget.style.borderColor = 'var(--steel-blue-bright)'
        e.currentTarget.style.color = 'var(--white)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'var(--graphite-850)'
        e.currentTarget.style.borderColor = 'var(--graphite-700)'
        e.currentTarget.style.color = 'var(--graphite-200)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M 12 19 V 5" />
        <path d="M 5 12 L 12 5 L 19 12" />
      </svg>
    </button>
  )
}
