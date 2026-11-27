import SectionHead from './SectionHead'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead eyebrow="About" title={<>Engineering that holds up <em>in the field</em></>} />
        <Reveal className="about">
          <p className="about__lead">
            I design the steel structures and hydraulic systems that heavy machines depend on, and
            build the teams and validation rigor that get them to <em>launch on time</em>.
          </p>
          <div className="about__body">
            <p>
              My career spans Facade India Testing, CNH Industrial and AGCO, John Deere Harvester
              Works, and Zoomlion Heavy Industries, progressing from hands-on design and analysis to
              leading cross-functional engineering teams across continents.
            </p>
            <p>
              My focus is welded and fabricated steel structures, load-sense hydraulic systems, FEA
              in ANSYS and Abaqus, and durability validation through DFMEA and DVP&amp;R. At
              Zoomlion I built and led a 12-engineer team across the US and China, delivering three
              product launches ahead of schedule while cutting the development cycle from 9 to 6
              months.
            </p>
            <p>
              I hold a B.E. and M.S. in Mechanical Engineering, an MBA, and two granted US patents.
              My FEA work consistently correlates within 92% of physical test results, and
              structured validation programs I led cut subsystem failures by 40%.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
