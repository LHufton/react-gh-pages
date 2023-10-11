import React from 'react'
import './Project.css'
import Simon from '../../images/Simon.png'
import TicTacToe from '../../images/Tic Tac Toe.png'

const Project = () => {
  return (
    <div id="Projects" className="background-alt">
      <h2>My Work</h2>
      <div className="GA-projects-container grid">
        <div className="simon-project">
          <img className="simon" src={Simon} alt="Simon " />
          <h3>Simon</h3>
          <p>
            I created a digital version of the classic memory game using HTML,
            CSS and Javascript after two weeks of instruction at General
            Assembly.
          </p>
        </div>
        <div className="TTT-project">
          <img className="TTT" src={TicTacToe} alt="Tic Tac Toe" />
          <h3>Tic Tac Toe</h3>
          <p>
            The classic game of tic-tac-toe crated using HTML, CSS and
            Javascript after one week's instruction at General Assembly.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Project
