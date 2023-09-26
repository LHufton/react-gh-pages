import React, { useEffect } from 'react'

const Resume = () => {
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
      <h2>Resume</h2>
      <p>
        Experienced Full Stack Software Developer with expertise in a wide range
        of technologies. Passionate about creating applications that enable
        people to live healthier lives with a focus on mental health.
      </p>

      <div className="experience">
        <h4>Work Experience</h4>
        <h5>
          <strong>Farmers Insurance</strong> <br />
          <em>Insurance Producer</em>
        </h5>
        <p>
          Collierville, TN 09/21 - 03/23 <br />
          Obtained licensure to sell property, casualty, and health insurance.
          Worked independently and in small teams to solicit policies for
          qualified customers. Conducted data analysis to generate new leads and
          marketing materials.
        </p>
        <h5>Hufton Hybrid Roofing and Restoration</h5>
        <h4></h4>
        <p>Memphis, TN 06/2018-12/2020</p>
        <p>
          Owned and operated a roofing and restoration company responsible for
          all of the tasks required to operate smoothly. <br /> Project
          management, logistics, and quality control. Administrative duties,
          inventory, billing, payroll, customer service. Sales and new hire
          training. Met with insurance adjusters, created and compared
          replacement estimates using Xactimate.
        </p>
      </div>
      <div classname="education">
        <h4>Education</h4>
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
        <h4>Skills</h4>
        <ul>
          <li>JavaScript</li>
        </ul>
      </div>
    </div>
  )
}

export default Resume
