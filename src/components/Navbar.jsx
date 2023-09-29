import React from 'react'

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
            <a href="#Resume">Resume</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Navbar