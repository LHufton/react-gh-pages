import React from 'react'
import './Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faJs,
  faPython,
  faJava,
  faReact,
  faVuejs,
  faNode,
  faBootstrap,
  faYarn,
  faNpm,
  faMicrosoft,
  faGitAlt,
  faDocker,
  faAws
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

const skillsData = [
  { icon: faJs, label: 'JavaScript' },
  { icon: faPython, label: 'Python' },
  { icon: faJava, label: 'Java' },
  { icon: faReact, label: 'React.js' },
  { icon: faVuejs, label: 'Vue.js' },
  { icon: faNode, label: 'Node.js' },
  { icon: faDatabase, label: 'SQL' },
  { icon: faBootstrap, label: 'Bootstrap' },
  { icon: faYarn, label: 'Material-UI' },
  { icon: faNpm, label: 'Tailwind CSS' },
  { icon: faPython, label: 'Django' },
  { icon: faMicrosoft, label: '.NET Core' },
  { icon: faNode, label: 'Express.js' },
  { icon: faPython, label: 'FastAPI' },
  { icon: faDatabase, label: 'MySQL' },
  { icon: faDatabase, label: 'PostgreSQL' },
  { icon: faDatabase, label: 'MongoDB' },
  { icon: faDocker, label: 'Docker' },
  { icon: faGitAlt, label: 'Git' },
  { icon: faAws, label: 'AWS' }
]

const Skills = () => {
  return (
    <div id="skills-grid">
      {skillsData.map((skill) => (
        <div key={skill.label}>
          <FontAwesomeIcon icon={skill.icon} /> {skill.label}
        </div>
      ))}
    </div>
  )
}

export default Skills
