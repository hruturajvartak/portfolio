import { experience, type Job } from '../data/content'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

/** Overall span for a company: earliest role start to latest role end. */
function span(job: Job) {
  const first = job.roles[0].dates.split(' – ')
  const last = job.roles[job.roles.length - 1].dates.split(' – ')
  return `${last[0]} – ${first[1] ?? first[0]}`
}

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <SectionHead eyebrow="Experience" title={<>Professional <em>experience</em></>} />
        <div className="timeline">
          {experience.map((job) => {
            const multi = job.roles.length > 1
            return (
              <Reveal key={job.company} className="job">
                <div className="job__meta">
                  <span className="job__dates">{span(job)}</span>
                  <span className="job__location">{job.location}</span>
                </div>
                <div>
                  <h3 className="job__company-name">{job.company}</h3>
                  {job.roles.map((role) => (
                    <div key={role.title} className="role">
                      <div className="role__head">
                        <h4 className="role__title">{role.title}</h4>
                        {multi && <span className="role__dates">{role.dates}</span>}
                      </div>
                      <ul className="dash-list">
                        {role.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
