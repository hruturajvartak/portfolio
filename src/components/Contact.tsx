import { profile } from '../data/content'
import { ArrowRight, LinkedIn, Mail } from './icons'

interface ContactProps {
  onContactClick: () => void
}

export default function Contact({ onContactClick }: ContactProps) {
  return (
    <section id="contact" className="contact">
      <div className="container contact__grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="contact__title">
            Let&rsquo;s build something <em>that lasts.</em>
          </h2>
        </div>
        <div>
          <p className="contact__text">
            Open to conversations about engineering leadership, structural and hydraulic design, and
            product development for heavy equipment.
          </p>
          <button className="btn btn--primary" onClick={onContactClick}>
            Send a message <ArrowRight />
          </button>
          <div className="contact__links">
            <a href={`mailto:${profile.email}`}>
              <Mail /> {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedIn /> linkedin.com/in/hruturajvartak
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
