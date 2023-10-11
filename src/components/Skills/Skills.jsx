import React from 'react'
import './Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faJsSquare,
  faPython,
  faReact,
  faAngular,
  faVuejs,
  faJava,
  faBootstrap,
  faNodeJs,
  faDocker,
  faGit,
  faAws,
  faMicrosoft
} from '@fortawesome/free-brands-svg-icons'
import {
  faCode,
  faWind,
  faTerminal,
  faDatabase,
  faServer
} from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
  return (
    <div id="skills-grid">
      <div>
        <FontAwesomeIcon icon={faJsSquare} /> JavaScript
      </div>
      <div>
        <FontAwesomeIcon icon={faPython} /> Python
      </div>
      <div>
        <FontAwesomeIcon icon={faJava} /> Java
      </div>
      <div>
        <FontAwesomeIcon icon={faReact} /> React.js
      </div>
      <div>
        <FontAwesomeIcon icon={faAngular} /> Angular
      </div>
      <div>
        <FontAwesomeIcon icon={faVuejs} /> Vue.js
      </div>
      <div>
        <FontAwesomeIcon icon={faNodeJs} /> Node.js
      </div>
      <div>
        <FontAwesomeIcon icon={faTerminal} /> Shell Scripting
      </div>
      <div>
        <FontAwesomeIcon icon={faDatabase} /> SQL
      </div>

      <div>
        <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
      </div>
      <div>
        <FontAwesomeIcon icon={faCode} /> Material-UI
      </div>
      <div>
        <FontAwesomeIcon icon={faWind} /> Tailwind CSS
      </div>
      <div>
        <FontAwesomeIcon icon={faServer} /> Django
      </div>
      <div>
        <FontAwesomeIcon icon={faMicrosoft} /> .NET Core
      </div>
      <div>
        <FontAwesomeIcon icon={faNodeJs} /> Express.js
      </div>
      <div>
        <FontAwesomeIcon icon={faServer} /> FastAPI
      </div>

      <div>
        <FontAwesomeIcon icon={faDatabase} /> MySQL
      </div>
      <div>
        <FontAwesomeIcon icon={faDatabase} /> PostgreSQL
      </div>
      <div>
        <FontAwesomeIcon icon={faDatabase} /> MongoDB
      </div>
      <div>
        <FontAwesomeIcon icon={faDocker} /> Docker
      </div>
      <div>
        <FontAwesomeIcon icon={faGit} /> Git
      </div>
      <div>
        <FontAwesomeIcon icon={faAws} /> AWS
      </div>
    </div>
  )
}

export default Skills
