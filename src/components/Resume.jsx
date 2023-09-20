import React, { useEffect } from 'react'

function Resume() {
  useEffect(() => {
    // Scroll to resume section when the "Resume" link is clicked in the navbar
    const scrollToResume = () => {
      const resumeSection = document.getElementById('Resume')
      if (resumeSection) {
        const scrollDistance = resumeSection.offsetTop
        console.log('Scrolling to resume:', scrollDistance) // Add this line
        window.scrollTo({
          top: scrollDistance,
          behavior: 'smooth'
        })
      }
    }

    const resumeLink = document.querySelector('a[href="#Resume"]')
    if (resumeLink) {
      resumeLink.addEventListener('click', scrollToResume)
    }
  }, [])

  return (
    <div id="Resume" className="intro">
      <h2>Luke Hufton</h2>
      <h6>Resume</h6>

      <div className="experience">
        <h6>Work Experience</h6>
        <p>General Assembly Fellow</p>
        <p>April 2023 - July 2023</p>
        <p>
          I spent twelve weeks at General Assembly's Software Engineering
          Immersive program. I learned the fundamentals of full-stack web
          development, including HTML, CSS, JavaScript, React, Node.js, Express,
          Python, Django, and PostgreSQL. I also learned how to work in an agile
          development environment, how to use Git and GitHub, and how to deploy
          my applications to the web using Heroku.
        </p>
      </div>

      <div className="skills">
        <h3>Skills</h3>
        <ul>
          <li>JavaScript</li>
        </ul>
      </div>
    </div>
  )
}

export default Resume
