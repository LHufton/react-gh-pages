import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
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
  faGitAlt
} from '@fortawesome/free-brands-svg-icons'

const categories = {
  'Languages, Libraries & Frameworks': [
    { label: 'JavaScript', icon: faJs },
    { label: 'Python', icon: faPython },
    { label: 'Java', icon: faJava },
    { label: 'React.js', icon: faReact },
    { label: 'Vue.js', icon: faVuejs },
    { label: 'Node.js', icon: faNode }
  ],
  'DevOps & Backend': [
    { label: 'SQL', icon: faDatabase },
    { label: 'Django', icon: faPython },
    { label: 'Express.js', icon: faNode },
    { label: 'FastAPI', icon: faPython },
    { label: 'MySQL', icon: faDatabase },
    { label: 'PostgreSQL', icon: faDatabase },
    { label: 'MongoDB', icon: faDatabase }
  ],
  'Development Tools & Technologies': [
    { label: 'Bootstrap', icon: faBootstrap },
    { label: 'Material-UI', icon: faYarn },
    { label: 'Tailwind CSS', icon: faNpm },
    { label: 'Git', icon: faGitAlt }
  ]
}

const Skills = () => {
  return (
    <div>
      <h3>Skills</h3>
      {Object.keys(categories).map((category) => (
        <div key={category} className="category">
          <h4>{category}</h4>
          <div className="skills-grid">
            {categories[category].map((skill) => (
              <div
                key={skill.label}
                className="skill-item"
                style={{ fontSize: '1.5rem' }}
              >
                <FontAwesomeIcon icon={skill.icon} size="3x" /> {skill.label}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skills
