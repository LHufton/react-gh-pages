import React from 'react'
import './Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faPython
} from '@fortawesome/free-brands-svg-icons'
import Simon from '../../images/Simon.png'
import TicTacToe from '../../images/Tic Tac Toe.png'
import UnpopularOpinions from '../../images/UnpopularOpinions.png'

const projectsData = [
  {
    img: Simon,
    title: 'Simon',
    description: 'A Simon game clone',
    technologies: [
      { icon: faHtml5, label: 'HTML', type: 'font-awesome' },
      { icon: faCss3Alt, label: 'CSS', type: 'font-awesome' },
      { icon: faJs, label: 'JavaScript', type: 'font-awesome' }
    ],
    link: '#'
  },
  {
    img: TicTacToe,
    title: 'Tic Tac Toe',
    description: 'A classic Tic Tac Toe game',
    technologies: [
      { icon: faHtml5, label: 'HTML', type: 'font-awesome' },
      { icon: faCss3Alt, label: 'CSS', type: 'font-awesome' },
      { icon: faJs, label: 'JavaScript', type: 'font-awesome' }
    ],
    link: 'https://unit1ttt-app.surge.sh/'
  },
  {
    img: UnpopularOpinions,
    title: 'Unpopular Opinions',
    description:
      'A social media app for sharing unpopular opinions with a sci-fi theme.',
    technologies: [
      { icon: faHtml5, label: 'HTML', type: 'font-awesome' },
      { icon: faCss3Alt, label: 'CSS', type: 'font-awesome' },
      { icon: faPython, label: 'Python', type: 'font-awesome' }
    ],
    link: '#'
  }
]

const Project = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div id="projects-grid">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`${project.title
              .toLowerCase()
              .replace(/\s+/g, '-')}-project`}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                className="project-img"
                src={project.img}
                alt={project.title}
              />
            </a>
            <h3>{project.title}</h3>
            <p>{project.description}</p>{' '}
            <div className="tech-icons">
              {project.technologies.map((tech, idx) =>
                tech.type === 'font-awesome' ? (
                  <FontAwesomeIcon
                    key={idx}
                    icon={tech.icon}
                    title={tech.label}
                  />
                ) : (
                  <tech.icon
                    key={idx}
                    title={tech.label}
                    className="svg-icon"
                  />
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
