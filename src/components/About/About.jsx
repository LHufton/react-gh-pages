import React from 'react'

import './About.css'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const About = () => {
  return (
    <div id="About">
      <h2 className="who">Who I am.</h2>
      <p>
        I am an off the beaten path kinda guy who uses out of the box thinking
        to solve problems. I have an entrepreneurial background and have owned a
        successful roofing company and have found success as a contractor.
      </p>
      <h2 className="what">What I like to do</h2>
      <p>
        I enjoy a challenge and software engineering provides plenty of them. I
        am at my best when the problems I am solving have a positive impact on
        people and enrich their lives.
      </p>
      <span id="to-top" onClick={scrollToTop}>
        <i className="fa fa-chevron-up" aria-hidden="true"></i>
      </span>
    </div>
  )
}

export default About
