import React from 'react'
import './Project.css'
import Simon from '../../images/Simon.png'
import TicTacToe from '../../images/Tic Tac Toe.png'
import UnpopularOpinions from '../../images/UnpopularOpinions.png'
import Django from '../../assets/Django.svg'
// import Git from '../../assets/Git.svg'
import Javascript from '../../assets/Javascript.svg'
// import MaterialUI from '../../assets/MaterialUI.svg'
// import Miro from '../../assets/Miro.svg'
// import Mongodb from '../../assets/Mongodb.svg'
// import Mysql from '../../assets/Mysql.svg'
// import NodeJs from '../../assets/NodeJs.svg'
// import Postgresql from '../../assets/Postgresql.svg'
import Python from '../../assets/Python.svg'
// import ReactSVG from '../../assets/React.svg'
// import Slack from '../../assets/Slack.svg'
// import SQL from '../../assets/SQL.svg'
// import Tailwind from '../../assets/Tailwind.svg'
// import Trello from '../../assets/Trello.svg'
// import Vue from '../../assets/Vue.svg'

const projectsData = [
  {
    img: Simon,
    title: 'Simon',
    description: 'A Simon game clone',
    technologies: [{ icon: Python, label: 'Python', type: 'svg' }],
    link: '#'
  },
  {
    img: UnpopularOpinions,
    title: 'Unpopular Opinions',
    description: 'A social media app',
    technologies: [{ icon: Django, label: 'Django', type: 'svg' }],
    link: '#'
  },
  {
    img: TicTacToe,
    title: 'Tic Tac Toe',
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
                    alt=" "
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
