import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero/Hero'
import Nav from './components/Navbar/Navbar'
import About from './components/About/About'
import Project from './components/Project/Project'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Resume from './components/Resume/Resume'
import ResumePage from './components/ResumePage/ResumePage'

const App = () => {
  return (
    <Router>
      <React.StrictMode>
        <Nav />
        <main style={{ padding: '0 3rem' }}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/About" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/resume-page" element={<ResumePage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </React.StrictMode>
    </Router>
  )
}

export default App
