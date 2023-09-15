import './App.css'
import Nav from './components/Nav'
import Lead from './components/Lead'
import React, { useEffect } from 'react'
import About from './components/About'
import Experience from './components/Experience'
import Project from './components/Project'
import Skill from './components/Skill'
import Contact from './components/Contact'
import Footer from './components/Footer'

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

    // Manipulate the experience timeline
    const experienceTimeline = document.getElementById('experience-timeline')
    if (experienceTimeline) {
      const userContents =
        experienceTimeline.querySelectorAll('.vtimeline-content')
      userContents.forEach((content) => {
        content.classList.add('vtimeline-content')
        const vtimelineBlock = document.createElement('div')
        vtimelineBlock.classList.add('vtimeline-block')
        content.parentElement.appendChild(vtimelineBlock)
      })

      const vtimelinePoints =
        experienceTimeline.querySelectorAll('.vtimeline-point')
      vtimelinePoints.forEach((point) => {
        const vtimelineIcon = document.createElement('div')
        vtimelineIcon.classList.add('vtimeline-icon')
        vtimelineIcon.innerHTML = '<i class="fa fa-map-marker"></i>'
        point.insertBefore(vtimelineIcon, point.firstChild)
      })

      const vtimelineContents =
        experienceTimeline.querySelectorAll('.vtimeline-content')
      vtimelineContents.forEach((content) => {
        const date = content.getAttribute('data-date')
        if (date) {
          const vtimelineDate = document.createElement('span')
          vtimelineDate.classList.add('vtimeline-date')
          vtimelineDate.textContent = date
          content.parentElement.insertBefore(
            vtimelineDate,
            content.parentElement.firstChild
          )
        }
      })
    }

    // Mobile menu open and close
    const mobileMenuOpen = document.getElementById('mobile-menu-open')
    const mobileMenuClose = document.getElementById('mobile-menu-close')
    if (mobileMenuOpen && mobileMenuClose) {
      mobileMenuOpen.addEventListener('click', () => {
        document.querySelector('header').classList.add('active')
        document.body.classList.add('active')
      })

      mobileMenuClose.addEventListener('click', () => {
        document.querySelector('header').classList.remove('active')
        document.body.classList.remove('active')
      })
    }

    // View more projects
    const viewMoreProjects = document.getElementById('view-more-projects')
    const moreProjects = document.getElementById('more-projects')
    if (viewMoreProjects && moreProjects) {
      viewMoreProjects.addEventListener('click', (e) => {
        e.preventDefault()
        viewMoreProjects.style.display = 'none'
        moreProjects.style.display = 'block'
      })
    }
  }, [])

  return (
    <React.StrictMode>
      <Nav />
      <Lead />
      <About />
      <Experience />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </React.StrictMode>
  )
}

export default App
