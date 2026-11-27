import { skills, standards } from '../data/content'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHead eyebrow="Skills" title={<>Technical <em>expertise</em></>} />
        <Reveal className="skills">
          <div>
            <h3 className="skills__h">Core competencies</h3>
            <ul className="core-list">
              {skills.core.map((s, i) => (
                <li key={s}>
                  <span aria-hidden>{String(i + 1).padStart(2, '0')}</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="skills__group">
              <h3 className="skills__h">CAD &amp; PLM software</h3>
              <div className="chip-list">
                {skills.software.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="skills__group">
              <h3 className="skills__h">Standards &amp; compliance</h3>
              <div className="chip-list">
                {standards.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="skills__group">
              <h3 className="skills__h">Education</h3>
              <ul className="edu-list">
                {skills.education.map((e) => (
                  <li key={e.degree}>
                    <strong>{e.degree}</strong>
                    <span>{e.school}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="skills__group">
              <h3 className="skills__h">Certifications</h3>
              <ul className="edu-list">
                {skills.certifications.map((c) => {
                  const [org, name] = c.split(' — ')
                  return (
                    <li key={c}>
                      <strong>{name ?? c}</strong>
                      {name && <span>{org}</span>}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
