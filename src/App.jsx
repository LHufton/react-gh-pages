import './App.css'
import React, { useEffect } from 'react'
import Nav from './components/Navbar/Navbar'
// import Lead from './components/Lead'
import About from './components/About/About'
import Project from './components/Project/Project'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Resume from './components/Resume/Resume'

const App = () => {
  useEffect(() => {
    // Current year
    const currentYear = new Date().getFullYear()
    document.getElementById('current-year').textContent = currentYear

    // Remove "no-js" class
    document.documentElement.classList.remove('no-js')

    // Scroll to section on link click
    const scrollToSection = (e) => {
      if (e.target.classList.contains('no-scroll')) return

      e.preventDefault()
      const heading = e.target.getAttribute('href').substring(1)
      const scrollDistance = document.getElementById(heading).offsetTop

      window.scrollTo({
        top: scrollDistance,
        behavior: 'smooth'
      })

      if (document.querySelector('header').classList.contains('active')) {
        document.querySelector('header').classList.remove('active')
        document.body.classList.remove('active')
      }
    }

    const headerLinks = document.querySelectorAll('header a')
    headerLinks.forEach((link) => {
      link.addEventListener('click', scrollToSection)
    })

    // Scroll to top button
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    const toTopButton = document.getElementById('to-top')
    if (toTopButton) {
      toTopButton.addEventListener('click', scrollToTop)
    }

    // Scroll from lead section to the next section
    const scrollFromLead = () => {
      const scrollDistance =
        document.getElementById('lead').nextElementSibling.offsetTop

      window.scrollTo({
        top: scrollDistance,
        behavior: 'smooth'
      })
    }

    const leadDownSpan = document.querySelector('#lead-down span')
    if (leadDownSpan) {
      leadDownSpan.addEventListener('click', scrollFromLead)
    }

    // Function to scroll to the Contact section
    const scrollToContact = () => {
      const scrollDistance = document.getElementById('Contact').offsetTop

      window.scrollTo({
        top: scrollDistance,
        behavior: 'smooth'
      })

      if (document.querySelector('header').classList.contains('active')) {
        document.querySelector('header').classList.remove('active')
        document.body.classList.remove('active')
      }
    }

    const ContactLink = document.querySelector('a[href="#Contact"]')
    if (ContactLink) {
      ContactLink.addEventListener('click', scrollToContact)
    }

    // Function to scroll to the Resume section
    const scrollToResume = () => {
      const scrollDistance = document.getElementById('Resume').offsetTop

      window.scrollTo({
        top: scrollDistance,
        behavior: 'smooth'
      })

      if (document.querySelector('header').classList.contains('active')) {
        document.querySelector('header').classList.remove('active')
        document.body.classList.remove('active')
      }
    }

    const resumeLink = document.querySelector('a[href="#Resume"]')
    if (resumeLink) {
      resumeLink.removeEventListener('click', scrollToResume)
    }

    // ... (rest of the existing code)
  }, [])

  return (
    <React.StrictMode>
      <Nav />
      <About />
      <Project />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </React.StrictMode>
  )
}

export default App
