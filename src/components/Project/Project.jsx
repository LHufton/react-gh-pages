import React from 'react'
import './Project.css'
import { faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons'

import Simon from '../../images/Simon.png'
import TicTacToe from '../../images/Tic Tac Toe.png'
import UnpopularOpinions from '../../images/UnpopularOpinions.png'

const projectsData = [
  {
    img: Simon,
    title: 'Simon',
    technologies: [
      { icon: faHtml5, label: 'HTML' },
      { icon: faCss3Alt, label: 'CSS' },
      { icon: faJs, label: 'JavaScript' }
    ]
  },
  {
    img: UnpopularOpinions,
    title: 'Unpopular Opinions',
    technologies: [
      { icon: faHtml5, label: 'HTML' },
      { icon: faCss3Alt, label: 'CSS' },
      { icon: faJs, label: 'JavaScript' }
    ]
  },
  {
    img: TicTacToe,
    title: 'Tic Tac Toe',
    technologies: [
      { icon: faHtml5, label: 'HTML' },
      { icon: faCss3Alt, label: 'CSS' },
      { icon: faJs, label: 'JavaScript' }
    ]
  }
]

const Project = () => {
  return (
    <div>
      <h2>My Work</h2>
      <div id="GA-projects-container grid">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`${project.title
              .toLowerCase()
              .replace(/\s+/g, '-')}-project`}
          >
            <img
              className={project.title.toLowerCase().replace(/\s+/g, '')}
              src={project.img}
              alt={project.title}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
