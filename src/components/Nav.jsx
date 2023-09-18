import React from 'react'

function Navbar() {
  return (
    <div>
      <header>
        <ul id="Navbar" className="shadow">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#resume">Resume</a> {/* Add this Resume link */}
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Navbar
