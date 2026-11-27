import { useState } from 'react'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsStrip from './components/StatsStrip'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Patents from './components/Patents'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ContactModal from './components/ContactModal'

export default function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const openContact = () => setContactOpen(true)
  const closeContact = () => setContactOpen(false)

  return (
    <>
      <ScrollProgress />
      <Navbar onContactClick={openContact} />
      <Hero onContactClick={openContact} />
      <main>
        <StatsStrip />
        <About />
        <Experience />
        <Projects />
        <Patents />
        <Skills />
        <Contact onContactClick={openContact} />
      </main>
      <Footer />
      <BackToTop />
      <ContactModal open={contactOpen} onClose={closeContact} />
    </>
  )
}
