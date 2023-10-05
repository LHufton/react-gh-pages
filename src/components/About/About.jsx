import React from 'react'
import Profile from '../../images/Profile.jpeg'

const About = () => {
  return (
    <div id="About">
      <h2 className="heading">Luke Hufton</h2>
      <h3>Fullstack Software Developer</h3>
      <h4>
        Finding simple solutions <br />
        to complex problems.
      </h4>
      <div className="profile-container">
        <img id="Profile" src={Profile} alt="Profile" />
      </div>
      <div className="about-me-container"></div>
      <p>Memphis, TN</p>
      <a
        href="/images/Resumé.pdf"
        download="resume.pdf"
        className="btn-rounded-white"
      >
        Download Resumé
      </a>
    </div>
  )
}

export default About
