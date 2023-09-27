import React from 'react'

const About = () => {
  return (
    <div id="About">
      <h2 className="heading">Luke Hufton</h2>
      <h6>Fullstack Software Developer</h6>

      <h4>Finding simple solutions to complex problems.</h4>
      <img id="Profile" src="/images/Profile.jpeg" alt="Profile" />

      <div className="about-me-container"></div>
      <p>Memphis, TN</p>
      <a
        href="/images/Resume.pdf"
        download="resume.pdf"
        className="btn-rounded-white"
      >
        Download Resumé
      </a>
    </div>
  )
}

export default About
