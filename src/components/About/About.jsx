import React from 'react'
import ProfilePic from '../../images/Profile.jpeg'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <div id="About">
      <h2 className="heading">Luke Hufton</h2>

      <h5>Based in: Memphis, TN</h5>
      <h4>Fullstack Software Developer</h4>
      <h5>
        Finding simple solutions <br />
        to complex problems.
      </h5>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/luke-hufton/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://https://github.com/LHufton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <div className="about-me-container">
        <div className="about-text"></div>
        <div className="profile-container">
          <img id="Profile" src={ProfilePic} alt="Luke Hufton" />
        </div>
      </div>
    </div>
  )
}

export default About
