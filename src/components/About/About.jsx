import React from 'react'
import './About.css'
import Kimber from '../../images/Kimber.jpg'
const About = () => {
  // Scroll to top function

  return (
    <div id="About">
      <div>
        <h2>About me</h2>

        <p>
          Hello! My name is Luke and I am an entrepreneur <br />
          who found his way to software engineering. I would like to work for a
          philanthropic company with humanitarian goals. <br />
          <br /> I am currently seeking a position as an associate software
          developer.
        </p>
      </div>
      <div className="dog-container">
        <img id="Kimber" src={Kimber} alt="Kimber" />
      </div>
    </div>
  )
}

export default About
