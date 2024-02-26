import React from 'react'
import './About.css'
import Kimber from '../../images/Kimber.jpeg'
const About = () => {
  // Scroll to top function

  return (
    <div id="About">
      <div>
        <h2>About me</h2>

        <p>
          Hello! My name is Luke, born in England and living in America. When I
          am not creating new applications you can find me with my dog, Kimber,
          hiking a trail. I enjoy playing chess, listening to music, reading and
          playing video games. <br />
          <br />I would like to work for a company that believes in bettering
          our local communities and developing products to assist in people's
          lives. <br />
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
