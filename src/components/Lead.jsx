import React from 'react'

const Lead = () => {
  return (
    <div id="lead">
      <div id="lead-content">
        <h1>
          Luke <br />
          Hufton
        </h1>
        <h2>Full Stack Developer</h2>
        <p>Memphis, TN</p>
        <a
          href="./images/Resume.pdf"
          download="resume.pdf"
          className="btn-rounded-white"
        >
          Download Resumé
        </a>
      </div>

      <div id="lead-overlay"></div>

      <div id="lead-down">
        <span>
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  )
}

export default Lead
