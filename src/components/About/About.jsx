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
          Hello! My name is Luke and I am a former entrepreneur <br />
          who found his way to software development. I enjoy thinking outside of
          the box to find solutions that are simple to understand. <br /> When I
          am not creating and maintaining applications you can find me hiking
          with my dog Kimber, playing chess or reading.
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
