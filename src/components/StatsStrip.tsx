import { stats } from '../data/content'
import Reveal from './Reveal'

export default function StatsStrip() {
  return (
    <section aria-label="Highlights">
      <div className="container">
        <Reveal className="stats">
          {stats.map((stat) => (
            <div key={stat.label} className="stat">
              <div className="stat__value">{stat.value}</div>
              <div className="stat__label">{stat.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
