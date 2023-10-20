import React from 'react'
import './Project.css'
import Simon from '../../images/Simon.png'
import TicTacToe from '../../images/Tic Tac Toe.png'
import UnpopularOpinions from '../../images/UnpopularOpinions.png'
import Django from '../../assets/Django.svg'
import Javascript from '../../assets/Javascript.svg'
import Python from '../../assets/Python.svg'
import CSS from '../../assets/CSS.svg'
import HTML from '../../assets/HTML.svg'
import Surge from '../../assets/Surge.svg'

const projectsData = [
  {
    img: Simon,
    title: 'Simon',
    description: 'The classic Simon memory game',
    technologies: [
      { icon: Javascript, label: 'Javascript', type: 'svg' },
      { icon: HTML, label: 'HTML', type: 'svg' },
      { icon: CSS, label: 'CSS', type: 'svg' },
      { icon: Surge, label: 'Surge', type: 'svg' }
    ],
    link: 'https://lhufton.github.io/Simon/gamePage.html'
  },
  {
    img: UnpopularOpinions,
    title: 'Unpopular Opinions',
    description:
      'A social media app for sharing unpopular opinions related to science fiction movies.',
    technologies: [
      { icon: Django, label: 'Django', type: 'svg' },
      { icon: Python, label: 'Python', type: 'svg' }
      { icon: HTML, label: 'HTML', type: 'svg' }
      { icon: CSS, label: 'CSS', type: 'svg' }
    ],
    link: '#'
  },
  {
    img: TicTacToe,
    title: 'Tic Tac Toe',
    description: 'A Tic Tac Toe game',
    technologies: [{ icon: Javascript, label: 'Javascript', type: 'svg' }],
    link: '#'
  }
]

const Project = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div className="auto-grid-medium">
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
            <p>{project.description}</p>
            <div className="tech-icons">
              {project.technologies.map((tech, idx) =>
                tech.type === 'svg' ? (
                  <img
                    key={idx}
                    src={tech.icon}
                    alt={tech.label}
                    title={tech.label}
                    className="svg-icon"
                  />
                ) : null
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
