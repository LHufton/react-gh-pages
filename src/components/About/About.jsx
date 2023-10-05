import React from 'react'
import ProfilePic from '../../images/Profile.jpeg'
import './About.css' // Ensure this import is here to apply styles from About.css

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
        <img id="Profile" src={ProfilePic} alt="Luke Hufton" />
      </div>
      <div className="about-me-container">
        {/* I assume content will go here later */}
      </div>
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
