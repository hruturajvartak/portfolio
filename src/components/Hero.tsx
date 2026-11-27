import { companies, profile } from '../data/content'
import { ArrowRight, LinkedIn } from './icons'

interface HeroProps {
  onContactClick: () => void
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <header id="top" className="hero">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="hero__status">
              <span className="hero__status-dot" aria-hidden />
              {profile.focus}
            </p>
            <h1 className="hero__name">
              Hruturaj <em>(Raj)</em> Vartak
            </h1>
            <p className="hero__role">{profile.title}</p>
            <p className="hero__tagline">{profile.summary}</p>
            <div className="hero__ctas">
              <button className="btn btn--primary" onClick={onContactClick}>
                Get in touch <ArrowRight />
              </button>
              <a className="btn btn--ghost" href="#projects">
                View selected work
              </a>
              <a
                className="btn btn--ghost"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
              >
                <LinkedIn /> LinkedIn
              </a>
            </div>
          </div>

          <div className="hero__photo">
            <img src={profile.photo} alt={`Portrait of ${profile.fullName}`} width={860} height={1007} />
            <div className="hero__photo-card">
              <strong>16+</strong>
              <span>
                years in heavy
                <br />
                equipment engineering
              </span>
            </div>
          </div>
        </div>

        <div className="companies">
          <p className="companies__label">Engineering experience at</p>
          <ul className="companies__list">
            {companies.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
