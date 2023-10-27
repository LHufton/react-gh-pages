import React from 'react'
import './HomePage.css'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Project from '../Project/Project'
import Contact from '../Contact/Contact'

const HomePage = () => {
  return (
    <div className="main-content">
      <About id="About" />
      <Skills id="Skills" />
      <Project id="Projects" />
      <Contact id="Contact" />
    </div>
  )
}

export default HomePage
