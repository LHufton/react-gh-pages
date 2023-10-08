import React from 'react'
import './Navbar.css' // Make sure you've imported the CSS file in your JSX.

const Navbar = () => {
  return (
    <div>
      <header>
        <ul id="Navbar" className="shadow">
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="/Resume">Resume</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </header>{' '}
      <a href="/pages/Resume.jsx">Resume</a>
    </div>
  )
}

export default Navbar
