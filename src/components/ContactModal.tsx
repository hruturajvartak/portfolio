import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { profile } from '../data/content'

interface ContactModalProps {
  open: boolean
  onClose: () => void
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [open, onClose])

  if (!open) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) return

    setStatus('submitting')
    setErrorMsg('')

    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      })

      if (error) throw error

      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  const handleClose = () => {
    setStatus('idle')
    setErrorMsg('')
    onClose()
  }

  return (
    <div
      onClick={handleClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(8, 10, 14, 0.8)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-4)',
        animation: 'fadeIn 0.2s ease forwards',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--graphite-900)',
          border: '1px solid var(--graphite-700)',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--space-8)',
          width: '100%',
          maxWidth: '480px',
          animation: 'scaleIn 0.25s ease forwards',
          position: 'relative',
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: 'var(--space-4)',
            right: 'var(--space-4)',
            color: 'var(--graphite-400)',
            fontSize: 'var(--text-xl)',
            lineHeight: 1,
            padding: 'var(--space-1)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--graphite-400)')}
        >
          ✕
        </button>

        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: 'var(--space-6) 0' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'rgba(76, 175, 118, 0.15)',
                border: '2px solid var(--success)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--space-5)',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-3)' }}>
              Message Sent
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--graphite-300)', marginBottom: 'var(--space-6)' }}>
              Thanks for reaching out. I'll get back to you at the email you provided.
            </p>
            <button
              onClick={handleClose}
              style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--white)',
                background: 'var(--steel-blue)',
                padding: 'var(--space-2) var(--space-6)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-2)' }}>
              Get in Touch
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--graphite-400)', marginBottom: 'var(--space-6)' }}>
              Send a message and I'll respond via email.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div>
                <label
                  htmlFor="contact-name"
                  style={{
                    display: 'block',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--graphite-300)',
                    marginBottom: 'var(--space-2)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 500,
                  }}
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    background: 'var(--graphite-850)',
                    border: '1px solid var(--graphite-700)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--space-3) var(--space-4)',
                    color: 'var(--white)',
                    fontSize: 'var(--text-sm)',
                    fontFamily: 'var(--font-body)',
                    transition: 'border-color var(--transition-fast)',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--steel-blue)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--graphite-700)')}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  style={{
                    display: 'block',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--graphite-300)',
                    marginBottom: 'var(--space-2)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 500,
                  }}
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    background: 'var(--graphite-850)',
                    border: '1px solid var(--graphite-700)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--space-3) var(--space-4)',
                    color: 'var(--white)',
                    fontSize: 'var(--text-sm)',
                    fontFamily: 'var(--font-body)',
                    transition: 'border-color var(--transition-fast)',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--steel-blue)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--graphite-700)')}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  style={{
                    display: 'block',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--graphite-300)',
                    marginBottom: 'var(--space-2)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 500,
                  }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  style={{
                    width: '100%',
                    background: 'var(--graphite-850)',
                    border: '1px solid var(--graphite-700)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--space-3) var(--space-4)',
                    color: 'var(--white)',
                    fontSize: 'var(--text-sm)',
                    fontFamily: 'var(--font-body)',
                    resize: 'vertical',
                    transition: 'border-color var(--transition-fast)',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--steel-blue)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--graphite-700)')}
                />
              </div>

              {status === 'error' && (
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--error)' }}>{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                style={{
                  fontSize: 'var(--text-base)',
                  fontWeight: 600,
                  color: 'var(--white)',
                  background: status === 'submitting' ? 'var(--steel-blue-dark)' : 'var(--steel-blue)',
                  padding: 'var(--space-3) var(--space-6)',
                  borderRadius: 'var(--radius-md)',
                  transition: 'background var(--transition-fast)',
                  cursor: status === 'submitting' ? 'wait' : 'pointer',
                  opacity: status === 'submitting' ? 0.7 : 1,
                }}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <div
              style={{
                marginTop: 'var(--space-6)',
                paddingTop: 'var(--space-5)',
                borderTop: '1px solid var(--graphite-800)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-2)',
              }}
            >
              <a
                href={`mailto:${profile.email}`}
                style={{ fontSize: 'var(--text-sm)', color: 'var(--graphite-400)' }}
              >
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 'var(--text-sm)', color: 'var(--graphite-400)' }}
              >
                LinkedIn
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
