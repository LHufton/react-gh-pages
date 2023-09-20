import React from 'react'

const Project = () => {
  return (
    <div id="Projects" className="background-alt">
      <h2 className="heading">General Assembly Projects</h2>
      <div className="container">
        <div className="row">
          <div className="project shadow-large">
            {/* github link until deployed then replace */}
            <div id="shareYourThoughts">
              <h3>Share your thoughts</h3>
              {/* <img src="images/DeepThought.jpeg" alt="Deep Thought" /> */}
              <p>
                I developed this ME stack application to allow users to share
                their thoughts with the world and to encourage freewriting and
                journaling.
              </p>
            </div>
          </div>

          <div className="project shadow-large">
            <a
              href="https://lhufton.github.io/Simon/"
              className="project-image"
            >
              <p>
                <a href="https://lhufton.github.io/Simon/">View Project</a>
              </p>
            </a>
            <div className="project-info">
              <h3>Simon</h3>
              <img src="images/Simon.png" alt="Simon" />
              <p>
                The classic memory game developed using javascript, html and
                css.
              </p>
              <p>
                <a href="https://lhufton.github.io/Simon/">View Project</a>
              </p>
            </div>
          </div>

          <div className="project shadow-large">
            <div className="project-info">
              <h3>"Tic-Tac-Toe"</h3>
              <img src="images/TTT.png" alt="Tic-Tac-Toe" />
              <p>
                I used javascript, html and css to develop this classic
                two-player game.
              </p>
              <p>
                <a href="https://unit1ttt-app.surge.sh/">View Project</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
