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
// import { ReactComponent as DjangoIcon } from '../../assets/Django.svg'

const projectsData = [
  {
    img: Simon,
    title: 'Simon',
    technologies: [
      { icon: faHtml5, label: 'HTML', type: 'font-awesome' },
      { icon: faCss3Alt, label: 'CSS', type: 'font-awesome' },
      { icon: faJs, label: 'JavaScript', type: 'font-awesome' }
    ],
    link: '#'
  },
  {
    img: UnpopularOpinions,
    title: 'Unpopular Opinions',
    technologies: [
      { icon: faHtml5, label: 'HTML', type: 'font-awesome' },
      { icon: faCss3Alt, label: 'CSS', type: 'font-awesome' },
      { icon: faPython, label: 'Python', type: 'font-awesome' }
      // { icon: DjangoIcon, label: 'Django', type: 'svg' }
    ],
    link: '#'
  },
  {
    img: TicTacToe,
    title: 'Tic Tac Toe',
    technologies: [
      { icon: faHtml5, label: 'HTML', type: 'font-awesome' },
      { icon: faCss3Alt, label: 'CSS', type: 'font-awesome' },
      { icon: faJs, label: 'JavaScript', type: 'font-awesome' }
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
