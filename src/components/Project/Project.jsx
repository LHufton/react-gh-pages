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
import Git from '../../assets/Git.svg'
import FlyIO from '../../assets/FlyIO.svg'
import SYT from '../../images/SYT.png'
import Mongodb from '../../assets/Mongodb.svg'
import Trello from '../../assets/Trello.svg'
import Heroku from '../../assets/Heroku.svg'
import GH from '../../assets/GH.svg'
import Mind from '../../images/Mind-project.png'
import ReactIcon from '../../assets/React.svg'
import Express from '../../assets/Express.svg'
import LhWeather from '../../images/LhWeather-App.png'
import Flights from '../../images/Flights.png'
const projectsData = [
  {
    title: 'Simon',
    img: Simon,
    description:
      'The classic Simon memory game built with javascript, HTML and vanilla CSS deployed via Surge.',
    technologies: [
      { icon: Javascript, label: 'Javascript', type: 'svg' },
      { icon: HTML, label: 'HTML', type: 'svg' },
      { icon: CSS, label: 'CSS', type: 'svg' },
      { icon: Git, label: 'Git', type: 'svg' }
    ],
    link: 'https://lhufton.github.io/Simon/gamePage.html',
    gitHubLink: 'https://github.com/LHufton/Simon'
  },
  {
    title: 'Mongoose Flights',
    img: Flights,
    description:
      'Book a trip with Mongoose Flights! Developed as a lab during my General Assembly course. Deployed via Heroku.',
    technologies: [
      { icon: Javascript, label: 'Javascript', type: 'svg' },
      { icon: HTML, label: 'HTML', type: 'svg' },
      { icon: CSS, label: 'CSS', type: 'svg' },
      { icon: Express, label: 'Express', type: 'svg' },
      { icon: Git, label: 'Git', type: 'svg' },
      { icon: Heroku, label: 'Heroku', type: 'svg' }
    ],
    link: 'https://flights-express-app-74bd06344918.herokuapp.com/',
    gitHubLink: 'https://github.com/LHufton/u2_lab_mongoose_flights_part_1'
  },
  {
    title: 'Whatever the Weather',
    img: LhWeather,
    description:
      'Daily weather forecast for your location. Uses an API from OpenWeatherMap. Deployed via Heroku.',
    technologies: [
      { icon: Javascript, label: 'Javascript', type: 'svg' },
      { icon: HTML, label: 'HTML', type: 'svg' },
      { icon: CSS, label: 'CSS', type: 'svg' },
      { icon: ReactIcon, label: 'ReactIcon', type: 'svg' },
      { icon: Git, label: 'Git', type: 'svg' },
      { icon: Heroku, label: 'Heroku', type: 'svg' }
    ],
    link: 'https://lhweather-app-91a74b2446f3.herokuapp.com/',
    gitHubLink: 'https://github.com/LHufton/weather-app'
  },
  {
    title: 'Mind Project',
    img: Mind,
    description:
      'Habit tracker with a mindfulness twist. My goal was to develop an app that can benefit those with mental health issues. Deployed via Heroku.',
    technologies: [
      { icon: Javascript, label: 'Javascript', type: 'svg' },
      { icon: HTML, label: 'HTML', type: 'svg' },
      { icon: CSS, label: 'CSS', type: 'svg' },
      { icon: Git, label: 'Git', type: 'svg' },
      { icon: Express, label: 'Express', type: 'svg' },
      { icon: Heroku, label: 'Heroku', type: 'svg' }
    ],
    link: 'https://mind-project-24983a2b9795.herokuapp.com/',
    gitHubLink: 'https://github.com/LHufton/mind-project'
  },
  {
    title: 'Unpopular Opinions',
    img: UnpopularOpinions,
    description:
      'A social media app for sharing unpopular opinions about science fiction movies. Built with two other developers as a group project for General Assembly. Deployed via Fly.io.',
    technologies: [
      { icon: Django, label: 'Django', type: 'svg' },
      { icon: Python, label: 'Python', type: 'svg' },
      { icon: HTML, label: 'HTML', type: 'svg' },
      { icon: CSS, label: 'CSS', type: 'svg' },
      { icon: Git, label: 'Git', type: 'svg' },
      { icon: FlyIO, label: 'FlyIO', type: 'svg' }
    ],
    link: 'https://unpopular-opinions-scifi.fly.dev/',
    gitHubLink: 'https://github.com/LHufton/unpopular-opinion',
    TrelloLink: 'https://trello.com/b/9EruGEqe/sci-fi-page'
  },
  {
    title: 'Tic Tac Toe',
    img: TicTacToe,
    description:
      'A Tic Tac Toe game built with javascript, HTML and vanilla CSS deployed via Surge.',
    technologies: [
      { icon: Javascript, label: 'Javascript', type: 'svg' },
      { icon: HTML, label: 'HTML', type: 'svg' },
      { icon: CSS, label: 'CSS', type: 'svg' },
      { icon: Git, label: 'Git', type: 'svg' },
      { icon: Surge, label: 'Surge', type: 'svg' }
    ],
    link: 'https://unit1ttt-app.surge.sh/',
    gitHubLink: 'https://github.com/LHufton/u1_hw_tic_tac_toe'
  },
  {
    title: "Let's Talk",
    img: SYT,
    description:
      'A MERN social media clone that encourages keeping a journal and free-writing. Developed as my capstone project for General Assembly. Deployed via Heroku.',
    technologies: [
      { icon: Javascript, label: 'Javascript', type: 'svg' },
      { icon: HTML, label: 'HTML', type: 'svg' },
      { icon: CSS, label: 'CSS', type: 'svg' },
      { icon: Heroku, label: 'Heroku', type: 'svg' },
      { icon: Git, label: 'Git', type: 'svg' },
      { icon: Express, label: 'Express', type: 'svg' },
      { icon: ReactIcon, label: 'ReactIcon', type: 'svg' },
      { icon: Trello, label: 'Trello', type: 'svg' },
      { icon: Mongodb, label: 'MongoDB', type: 'svg' }
    ],
    link: 'https://lets-talk-app-05322937f1c4.herokuapp.com/',
    gitHubLink: 'https://github.com/LHufton/LetsTalk',
    linkIcon: Heroku,
    trelloLink: 'https://trello.com/b/OHxXIJJp/lets-talk'
  }
]

const Project = () => {
  return (
    <div id="Projects">
      <h2>Projects</h2>
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
                {' '}
              </a>
              {'  '}
              <a
                href={project.gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GH} alt="GitHub" className="github-icon" />
              </a>
              <a
                href={project.trelloLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Trello} alt="Trello" className="Trello-icon" />
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
