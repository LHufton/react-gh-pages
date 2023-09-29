import React from 'react'
import Profile from '../images/Profile.jpeg'

const About = () => {
  return (
    <div id="About">
      <h2 className="heading">Luke Hufton</h2>
      <h6>Fullstack Software Developer</h6>
      <h4>Finding simple solutions to complex problems.</h4>
      <img id="Profile" src={Profile} alt="Profile" />
      <div className="about-me-container"></div>
      <p>Memphis, TN</p>
      <a
        href="/images/Resumé.pdf"
        download="resume.pdf"
        className="download-resume"
      >
        Download Resumé
      </a>
    </div>
  )
}

export default About
