import React from 'react'
import Simon from '../../images/Simon.png'
import TicTacToe from '../../images/Tic Tac Toe.png'

const Project = () => {
  return (
    <div id="Projects" className="background-alt">
      <h2>Completed ps</h2>
      <div className="GA-projects-container grid">
        <div className="simon-project">
          <img src={Simon} alt="Simon" />
          <h3>Simon</h3>
          <p>Description for Simon...</p>
        </div>
        <div className="TTT-project">
          <img src={TicTacToe} alt="Tic Tac Toe" />
          <h3>Tic Tac Toe</h3>
          <p>Description for Tic Tac Toe...</p>
        </div>
      </div>
    </div>
  )
}

export default Project
