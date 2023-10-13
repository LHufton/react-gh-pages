import React from 'react'
import ProfilePic from '../../images/Profile.jpeg'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <div id="About">
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/luke-hufton/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://www.github.com/LHufton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <h2 className="heading">Luke Hufton</h2>
      <h4>Fullstack Software Developer</h4>
      <h5>
        Finding simple solutions <br />
        to complex problems.
      </h5>
      <div className="about-text">
        <h5>Located in: Memphis, TN</h5>
      </div>
      <div className="about-me-container">
        <div></div>
        <div className="profile-container">
          <img id="Profile" src={ProfilePic} alt="Luke Hufton" />
        </div>
      </div>
    </div>
  )
}

export default About
