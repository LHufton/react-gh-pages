import './App.css'
import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Project from './components/Project/Project'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Resume from './components/Resume/Resume'

const App = () => {
  useEffect(() => {
    const currentYear = new Date().getFullYear()
    document.getElementById('current-year').textContent = currentYear
    document.documentElement.classList.remove('no-js')

    const scrollToSection = (e) => {
      e.preventDefault()
      const heading = e.target.getAttribute('href').substring(1)
      const scrollDistance = document.getElementById(heading).offsetTop

      window.scrollTo({
        top: scrollDistance,
        behavior: 'smooth'
      })
    }

    const headerLinks = document.querySelectorAll('header a')
    headerLinks.forEach((link) => {
      link.addEventListener('click', scrollToSection)
    })
  }, [])

  return (
    <React.StrictMode>
      <Navbar />
      <About />
      <Skills />
      <Project />
      <Resume />
      <Contact />
      <Footer />
    </React.StrictMode>
  )
}

export default App
