import { patents } from '../data/content'
import SectionHead from './SectionHead'
import Reveal from './Reveal'
import { ArrowUpRight } from './icons'

export default function Patents() {
  return (
    <section id="patents" className="section section--alt">
      <div className="container">
        <SectionHead eyebrow="Patents" title={<>Two granted <em>US patents</em></>} />
        <div className="patents">
          {patents.map((p) => (
            <Reveal key={p.id} className="patent">
              <span className="patent__id">{p.id}</span>
              <h3 className="patent__title">{p.title}</h3>
              <p className="patent__abstract">{p.abstract}</p>
              <a className="patent__link" href={p.url} target="_blank" rel="noopener noreferrer">
                Read on Google Patents <ArrowUpRight />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
