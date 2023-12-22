import React from 'react'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import ProfilePic from '../../images/Profile.jpeg'

const Hero = () => {
  return (
    <div id="Hero" className="auto-grid-large">
      <div className="about-text">
        <h2 className="heading">Luke Hufton</h2>
        <br />
        <h4>Fullstack Software Developer</h4>
        <br />
        <h5>Located in: Memphis, TN</h5>
        <br />
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
      </div>
      <div className="profile-container">
        <img id="Profile" src={ProfilePic} alt="Luke Hufton" />
      </div>
    </div>
  )
}

export default Hero
