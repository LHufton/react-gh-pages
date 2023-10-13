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
      <h1>Resume</h1>
      <a
        href="/images/Resumé.pdf"
        download="resume.pdf"
        className="download-resume"
      >
        Download Resumé
      </a>
      <p>
        Experienced Full Stack Software Developer with expertise in a wide range
        of technologies. Passionate about creating applications that enable
        people to live healthier lives with a focus on mental health.
      </p>

      <div className="experience">
        <h2>Work Experience</h2>
        <h3>Farmers Insurance</h3>
        <h5>
          <em>Insurance Producer</em>
        </h5>
        <p>
          Collierville, TN 09/21 - 03/23 <br />
          Obtained licensure to sell property, casualty, and health insurance.
          Worked independently and in small teams to solicit policies for
          qualified customers. Conducted data analysis to generate new leads and
          marketing materials.
        </p>
        <h3>Hufton Hybrid Roofing and Restoration</h3>

        <h5>
          <em>Owner</em>
        </h5>
        <p>Memphis, TN 06/2018-12/2020</p>
        <p>
          Owned and operated a roofing and restoration company responsible for
          all of the tasks required to operate smoothly. <br /> Project
          management, logistics, and quality control. Administrative duties,
          inventory, billing, payroll, customer service. Sales and new hire
          training. Met with insurance adjusters, created and compared
          replacement estimates using Xactimate.
        </p>
        <h3>Southern Roofing and Restoration</h3>

        <h5>
          <em>Project Manager</em>
        </h5>
        <p>Memphis, TN 01/2018-06/2018</p>
        <p>
          I worked as part of a small sales team that handled all of our own
          operations internally from start to finish. I was responsible for
          meeting with customers, creating estimates, inspecting roofs and
          interiors and I also worked with insurance adjusters to ensure that
          our customers were getting the best possible service.I continued to
          use my knowledge of building replacement estimates using software and
          physical measurements.
        </p>
        <h3>My Town Maintenance Roofing and Restoration</h3>

        <h5>
          <em>Project Manager</em>
        </h5>
        <p>Collierville, TN 05/2015-01/2018</p>
        <p>
          I worked alone and as a member of another small team for a medium
          sized insurance roofing and restoration company. I was responsible for
          meeting with customers, creating estimates, inspecting roofs and
          interiors and providing roofing repair estimates. I first learned how
          to use Xactimate and other estimating software such as eagle view.
        </p>
        <h3>State Farm Insurance </h3>

        <h5>
          <em>Insurance Producer</em>
        </h5>
        <p>Collierville, TN 03/2014-05/2015</p>
        <p>
          I was a fully licensed insurance producer licensed to sell property,
          casualty, life and health insurance. I solicited business through
          telecommunications and in person. I worked with small offices
          including interns to provide expert sales advice and exemplary
          customer service.
        </p>
      </div>
      <div className="education">
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
    </div>
  )
}

export default Resume
