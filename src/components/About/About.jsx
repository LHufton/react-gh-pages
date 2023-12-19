import React from 'react'
import './About.css'
import Kimber from '../../images/Kimber.jpg'
const About = () => {
  // Scroll to top function

  return (
    <div id="About">
      <h2>About me</h2>

      <p>
        I am a highly driven individual with a penchant for learning and solving
        problems. I enjoy using react.js and vanilla CSS to build functional and
        responsive web applications. <br />I spend my free time reading,
        listening to music, playing chess and hiking with my dog Kimber. She
        makes sure I take some time away from coding. <br /> I am currently
        looking for a role as an associate software engineer.
      </p>
      <div className="dog-container">
        <img id="Kimber" src={Kimber} alt="Kimber" />
      </div>
    </div>
  )
}

export default About
