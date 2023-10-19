import React from 'react'
import './Skills.css'
import Javascript from '../../assets/Javascript.svg'
import Python from '../../assets/Python.svg'
import Java from '../../assets/Java.svg'
import ReactSVG from '../../assets/React.svg'
import Vue from '../../assets/Vue.svg'
import NodeJs from '../../assets/NodeJs.svg'
import SQL from '../../assets/SQL.svg'
import Django from '../../assets/Django.svg'
import Fastapi from '../../assets/Fastapi.svg'
import Mysql from '../../assets/Mysql.svg'
import Postgresql from '../../assets/Postgresql.svg'
import Mongodb from '../../assets/Mongodb.svg'
import Bootstrap from '../../assets/Bootstrap.svg'
import MaterialUI from '../../assets/MaterialUI.svg'
import Tailwind from '../../assets/Tailwind.svg'
import Git from '../../assets/Git.svg'

const categories = {
  'Languages, Libraries & Frameworks': [
    { label: 'JavaScript', icon: Javascript },
    { label: 'Python', icon: Python },
    { label: 'Java', icon: Java },
    { label: 'React.js', icon: ReactSVG },
    { label: 'Vue.js', icon: Vue },
    { label: 'Django', icon: Django },
    { label: 'Node.js', icon: NodeJs }
  ],
  'DevOps & Backend': [
    { label: 'FastAPI', icon: Fastapi },
    { label: 'SQL', icon: SQL },
    { label: 'MySQL', icon: Mysql },
    { label: 'PostgreSQL', icon: Postgresql },
    { label: 'MongoDB', icon: Mongodb }
  ],
  'Development Tools & Technologies': [
    { label: 'Bootstrap', icon: Bootstrap },
    { label: 'Material-UI', icon: MaterialUI },
    { label: 'Tailwind CSS', icon: Tailwind },
    { label: 'Git', icon: Git }
  ]
}

const Skills = () => {
  return (
    <div>
      <h3>Skills</h3>

      {Object.keys(categories).map((category) => (
        <div key={category} className="category">
          <h4>{category}</h4>
          <div className="auto-grid-small">
            {categories[category].map((skill) => (
              <div key={skill.label} className="skill-item">
                <img
                  src={skill.icon}
                  alt={skill.label}
                  width="50"
                  height="50"
                />{' '}
                <label>{skill.label}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skills
