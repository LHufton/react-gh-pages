import React from 'react'
import ProfilePic from '../../images/Profile.jpeg'
import './About.css'

const About = () => {
  return (
    <div id="About">
      <h2 className="heading">Luke Hufton</h2>

      <h3>Memphis, TN</h3>
      <h4>Fullstack Software Developer</h4>
      <h5>
        Finding simple solutions <br />
        to complex problems.
      </h5>
      <div className="about-me-container">
        <div className="about-text">
          {/* Insert your about me text/content here */}
        </div>
        <div className="profile-container">
          <img id="Profile" src={ProfilePic} alt="Luke Hufton" />
        </div>
      </div>
    </div>
  )
}

export default About
