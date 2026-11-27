import { useMemo, useState } from 'react'
import { projects } from '../data/content'
import DiagramPlaceholder from './DiagramPlaceholder'
import SectionHead from './SectionHead'
import { Check } from './icons'

export default function Projects() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.category)))],
    [],
  )
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Projects"
          title={<>Selected <em>work</em></>}
          lead="Frames, arms, cabins and connected systems for excavators, each taken from concept through analysis and validation."
        />

        <div className="filters" role="group" aria-label="Filter projects by category">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter ${filter === cat ? 'is-active' : ''}`}
              aria-pressed={filter === cat}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects">
          {filtered.map((project) => {
            const n = projects.indexOf(project) + 1
            return (
              <article key={project.title} className="project">
                <div className="project__media">
                  <span className="project__index" aria-hidden>
                    {String(n).padStart(2, '0')}
                  </span>
                  {project.images.length > 0 ? (
                    project.images.map((im) => (
                      <figure key={im.src}>
                        <img src={im.src} alt={im.alt} loading="lazy" />
                      </figure>
                    ))
                  ) : (
                    <figure>
                      <DiagramPlaceholder variant="topology" />
                    </figure>
                  )}
                </div>

                <div className="project__body">
                  <span className="project__category">{project.category}</span>
                  <h3 className="project__title">{project.title}</h3>
                  <p className="project__goal">{project.goal}</p>

                  <div className="project__results">
                    <h4 className="project__h">Results</h4>
                    <ul>
                      {project.results.map((r) => (
                        <li key={r}>
                          <Check size={16} />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="project__cols">
                    <div>
                      <h4 className="project__h">What I did</h4>
                      <ul className="dash-list">
                        {project.contributions.map((c) => (
                          <li key={c}>{c}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="project__h">Analysis &amp; validation</h4>
                      <ul className="dash-list">
                        {project.analysis.map((a) => (
                          <li key={a}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="chip-list">
                    {project.skills.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
