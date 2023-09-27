import React from 'react'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faJs,
  faPython,
  faReact,
  faVuejs,
  faNode,
  faHtml5,
  faCss3Alt,
  faJava
} from '@fortawesome/free-brands-svg-icons'
import { faServer } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
  return (
    <div id="Skills">
      <h2 className="heading">Skills</h2>
      <ul>
        <div>
          <li>
            <FontAwesomeIcon icon={faJs} /> JavaScript
          </li>
          <li>
            <FontAwesomeIcon icon={faHtml5} /> HTML 5
          </li>
          <li>
            <FontAwesomeIcon icon={faCss3Alt} /> CSS
          </li>
          <li>
            <FontAwesomeIcon icon={faPython} /> Python
          </li>
        </div>
        <li>
          <FontAwesomeIcon icon={faReact} /> React
        </li>
        <li>
          <FontAwesomeIcon icon={faVuejs} /> Vue.js
        </li>
        <li>
          <FontAwesomeIcon icon={faNode} /> Node.js
        </li>
        <li>
          <FontAwesomeIcon icon={faJava} /> Java
        </li>
        <li>
          <FontAwesomeIcon icon={faServer} /> Django
        </li>
        <li>
          <FontAwesomeIcon icon={faDatabase} /> MongoDB
        </li>
        <li>
          <FontAwesomeIcon icon={faDatabase} /> PostgreSQL
        </li>
        <li>
          <FontAwesomeIcon icon={faDatabase} /> MySQL
        </li>
      </ul>
    </div>
  )
}

export default Skills
