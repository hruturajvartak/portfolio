import { experience } from '../data/content'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <SectionHead eyebrow="Experience" title={<>Sixteen years, <em>four OEMs</em></>} />
        <div className="timeline">
          {experience.map((job) => (
            <Reveal key={job.company} className="job">
              <div className="job__dates">{job.dates}</div>
              <div>
                <h3 className="job__title">{job.title}</h3>
                <p className="job__company">{job.company}</p>
                {job.bullets.length > 0 && (
                  <ul className="dash-list">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
