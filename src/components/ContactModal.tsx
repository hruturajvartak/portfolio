import { useEffect, useRef, useState } from 'react'
import { supabase } from '../lib/supabase'
import { profile } from '../data/content'
import { Check, Close } from './icons'

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

  const modalRef = useRef<HTMLDivElement>(null)
  const firstInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open && firstInputRef.current) {
      const timer = setTimeout(() => firstInputRef.current?.focus(), 50)
      return () => clearTimeout(timer)
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      const modal = modalRef.current
      if (!modal) return
      const focusable = modal.querySelectorAll<HTMLElement>(
        'button, a, input, textarea, [tabindex]:not([tabindex="-1"])',
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', handleTab)
    return () => window.removeEventListener('keydown', handleTab)
  }, [open])

  if (!open) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) return

    setStatus('submitting')
    setErrorMsg('')

    try {
      if (!supabase) {
        throw new Error('The contact form is not configured right now. Please reach out via email or LinkedIn instead.')
      }
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
    <div className="modal-backdrop" onClick={handleClose}>
      <div
        ref={modalRef}
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={handleClose} aria-label="Close">
          <Close />
        </button>

        {status === 'success' ? (
          <div className="modal__success">
            <div className="modal__success-icon">
              <Check />
            </div>
            <h3 id="contact-title" className="modal__title">
              Message sent
            </h3>
            <p className="modal__sub">Thanks for reaching out. I&rsquo;ll reply to the email you provided.</p>
            <button className="btn btn--primary" onClick={handleClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 id="contact-title" className="modal__title">
              Get in touch
            </h3>
            <p className="modal__sub">Send a message and I&rsquo;ll respond by email.</p>

            <form className="form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  ref={firstInputRef}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                />
              </div>

              {status === 'error' && (
                <p className="form__error" role="alert">
                  {errorMsg}
                </p>
              )}

              <button type="submit" className="btn btn--primary" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : 'Send message'}
              </button>
            </form>

            <div className="modal__alt">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
