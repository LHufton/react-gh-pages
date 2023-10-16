import React, { useEffect } from 'react'
import Lead from './components/Lead/Lead'
import Nav from './components/Navbar/Navbar'
import About from './components/About/About'
import Project from './components/Project/Project'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Resume from './components/Resume/Resume'

const App = () => {
  useEffect(() => {
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
  }, [])

  return (
    <React.StrictMode>
      <Nav />
      <Lead />
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
