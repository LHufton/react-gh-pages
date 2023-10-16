// Skills.jsx
import React from 'react'
import './Skills.css'

const categories = {
  'Languages/Frameworks': [
    'JavaScript',
    'Python',
    'Java',
    'React.js',
    'Vue.js',
    'Node.js'
  ],
  'DevOps & Backend': [
    'SQL',
    'Django',
    '.NET Core',
    'Express.js',
    'FastAPI',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Docker',
    'AWS'
  ],
  'Development Tools & Technologies': [
    'Bootstrap',
    'Material-UI',
    'Tailwind CSS',
    'Git'
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
              <div key={skill} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skills
