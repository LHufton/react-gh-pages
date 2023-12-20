import React from 'react'
import './Resume.css'
import LHuftonResume from '../../images/LHuftonResume.pdf'
// import fontawesome from '@fortawesome/fontawesome'

const Resume = () => {
  return (
    <div id="Resume" className="intro">
      <a
        href={LHuftonResume}
        download="LHuftonResume.pdf"
        className="download-resume"
      >
        <button className="Resume-btn">Download</button>
      </a>
      <h1>Luke Hufton</h1>
      <p>
        I am an ambitious software developer, always learning and growing. I am
        seeking a position that challenges me to become the best developer I can
        be.
      </p>

      <div className="experience">
        <h2>Work Experience</h2>
        <h3>Farmers Insurance</h3>
        <h5>
          <em>Insurance Producer</em>
        </h5>
        <div>
          <ul>
            <li>
              Obtained licensure to sell property, casualty, and health
              insurance.
            </li>
            <li>
              Worked independently and in small teams to solicit policies for
              qualified customers.
            </li>
            <li>
              Conducted data analysis to generate new leads and marketing
              materials.
            </li>
          </ul>
        </div>
        <h3>Hufton Hybrid Roofing and Restoration</h3>
        <h5>
          <em>Owner</em>
        </h5>
        <p>Memphis, TN 06/2018-12/2020</p>
        <p>
          I owned and operated an insurance roofing and restoration company
          <br /> Project management, logistics, and quality control.
          Administrative duties, inventory, billing, payroll, customer service.
          Sales and new hire training. Met with insurance adjusters, created and
          compared replacement estimates using Xactimate.
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
