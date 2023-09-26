import React from 'react'

const Lead = () => {
  return (
    <div id="lead">
      <div id="lead-content">
        <img src="images/Profile.png" alt="Profile" />
        <h1>
          Luke <br />
          Hufton
        </h1>
        <h2>Full Stack Developer</h2>
        <p>Finding simple solutions to complex problems.</p>
        <p>Memphis, TN</p>
        <a
          href="/images/Resume.pdf"
          download="resume.pdf"
          className="btn-rounded-white"
        >
          Download Resumé
        </a>
      </div>

      <div id="lead-overlay"></div>
    </div>
  )
}

export default Lead
