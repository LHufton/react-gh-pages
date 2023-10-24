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
        I am a divergent thinker with a passion for mental health and wellness
        applications. I enjoy solving problems that provide a positive impact.
      </p>
      <span id="to-top" onClick={scrollToTop}>
        <i className="fa fa-chevron-up" aria-hidden="true"></i>
      </span>
    </div>
  )
}

export default About
