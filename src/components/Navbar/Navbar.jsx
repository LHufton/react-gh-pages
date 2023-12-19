import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <header>
        <ul id="Navbar" className="shadow">
          <li>
            <NavLink to="/home" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeclassname="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" activeclassname="active">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeclassname="active">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" activeclassname="active">
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeclassname="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Navbar
