import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faJs,
  faPython,
  faReact,
  faAngular,
  faVuejs,
  faJava,
  faBootstrap,
  faNode,
  faDocker,
  faGit,
  faAws
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
    <div id="Skills">
      <h2 className="heading">Skills</h2>
      <div className="skills-container">
        <div className="column">
          <h3>Languages/Frameworks</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faJs} /> JavaScript
            </li>
            <li>
              <FontAwesomeIcon icon={faPython} /> Python
            </li>
            <li>
              <FontAwesomeIcon icon={faJava} /> Java
            </li>
            <li>
              <FontAwesomeIcon icon={faReact} /> React.js
            </li>
            <li>
              <FontAwesomeIcon icon={faAngular} /> Angular
            </li>
            <li>
              <FontAwesomeIcon icon={faVuejs} /> Vue.js
            </li>
            <li>
              <FontAwesomeIcon icon={faNode} /> Node.js
            </li>
            <li>
              <FontAwesomeIcon icon={faTerminal} /> Shell Scripting
            </li>
            <li>
              <FontAwesomeIcon icon={faDatabase} /> SQL
            </li>
          </ul>
        </div>
        <div className="column">
          <h3>Technologies</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCode} /> jQuery
            </li>
            <li>
              <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
            </li>
            <li>
              <FontAwesomeIcon icon={faCode} /> Material-UI
            </li>
            <li>
              <FontAwesomeIcon icon={faWind} /> Tailwind CSS
            </li>
            <li>
              <FontAwesomeIcon icon={faServer} /> Django
            </li>
            <li>
              <FontAwesomeIcon icon={faServer} /> .NET Core
            </li>
            <li>
              <FontAwesomeIcon icon={faServer} /> Express.js
            </li>
            <li>
              <FontAwesomeIcon icon={faServer} /> FastAPI
            </li>
          </ul>
        </div>
        <div className="column">
          <h3>DevOps/Tools</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faDatabase} /> MySQL
            </li>
            <li>
              <FontAwesomeIcon icon={faDatabase} /> PostgreSQL
            </li>
            <li>
              <FontAwesomeIcon icon={faDatabase} /> MongoDB
            </li>
            <li>
              <FontAwesomeIcon icon={faDocker} /> Docker
            </li>
            <li>
              <FontAwesomeIcon icon={faGit} /> Git
            </li>
            <li>
              <FontAwesomeIcon icon={faAws} /> AWS
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
