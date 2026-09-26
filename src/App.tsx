import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Patents from './components/Patents'
import Skills from './components/Skills'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

export default function App() {
  const [contactOpen, setContactOpen] = useState(false)

  const openContact = () => setContactOpen(true)
  const closeContact = () => setContactOpen(false)

  return (
    <>
      <Navbar onContactClick={openContact} />
      <main>
        <Hero onContactClick={openContact} />
        <SocialProof />
        <About />
        <Experience />
        <Projects />
        <Patents />
        <Skills />
      </main>
      <Footer onContactClick={openContact} />
      <ContactModal open={contactOpen} onClose={closeContact} />
    </>
  )
}
