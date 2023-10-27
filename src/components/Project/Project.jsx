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
import GitHub from '../../assets/GitHub.svg'
import FlyIO from '../../assets/FlyIO.svg'
import SYT from '../../images/SYT.png'
import Mongodb from '../../assets/Mongodb.svg'
const projectsData = [
  {
    title: 'Simon',
    img: Simon,
    description: 'The classic Simon memory game',
    technologies: [
      { icon: Javascript, label: 'Javascript', type: 'svg' },
      { icon: HTML, label: 'HTML', type: 'svg' },
      { icon: CSS, label: 'CSS', type: 'svg' }
    ],
    link: 'https://lhufton.github.io/Simon/gamePage.html',
    gitHubLink: 'https://github.com/LHufton/Simon'
    // deployIcon: Surge
  },
  {
    title: 'Unpopular Opinions',
    img: UnpopularOpinions,
    description:
      'A social media app for sharing unpopular opinions about science fiction movies.',
    technologies: [
      { icon: Django, label: 'Django', type: 'svg' },
      { icon: Python, label: 'Python', type: 'svg' },
      { icon: HTML, label: 'HTML', type: 'svg' },
      { icon: CSS, label: 'CSS', type: 'svg' }
    ],
    link: 'https://lhufton.github.io/UnpopularOpinions',
    gitHubLink: 'https://github.com/LHufton/UnpopularOpinions',
    deployIcon: FlyIO
  },
  {
    title: 'Tic Tac Toe',
    img: TicTacToe,
    description: 'A Tic Tac Toe game',
    technologies: [
      { icon: Javascript, label: 'Javascript', type: 'svg' },
      { icon: HTML, label: 'HTML', type: 'svg' },
      { icon: CSS, label: 'CSS', type: 'svg' }
    ],
    link: 'https://unit1ttt-app.surge.sh/',
    gitHubLink: 'https://github.com/LHufton/TicTacToe',
    deployIcon: Surge
  },
  {
    title: 'Share Your Thoughts',
    img: SYT,
    description:
      'A MERN Stack social media app that encourages journaling and free-writing.',
    technologies: [
      { icon: Javascript, label: 'Javascript', type: 'svg' },
      { icon: HTML, label: 'HTML', type: 'svg' },
      { icon: CSS, label: 'CSS', type: 'svg' },
      { icon: Mongodb, label: 'MongoDB', type: 'svg' },
      { icon: CSS, label: 'CSS', type: 'svg' }
    ],
    link: 'https://unit1ttt-app.surge.sh/',
    gitHubLink: 'https://github.com/LHufton/TicTacToe',
    deployIcon: Surge
  }
]

const Project = () => {
  return (
    <div id="Projects">
      <h2>What I can do.</h2>
      <div className="auto-grid-medium">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`${project.title
              .toLowerCase()
              .replace(/\s+/g, '-')}-project`}
          >
            <div className="project-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.deployIcon}
                  alt="Launched Project"
                  className="svg-icon"
                />
              </a>
              {' | '}
              <a
                href={project.gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GitHub} alt="GitHub" className="svg-icon" />
              </a>
            </div>
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
              {project.technologies.map((tech, idx) => (
                <img
                  key={idx}
                  src={tech.icon}
                  alt={tech.label}
                  title={tech.label}
                  className="svg-icon"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
