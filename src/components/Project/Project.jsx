import React from 'react'

const Project = () => {
  return (
    <div id="Projects" className="background-alt">
      <h2>My Work</h2>
      <div className="GA-projects-container">
        <div className="row">
          <div className="project shadow-large">
            {/* github link until deployed then replace */}
            <div id="GA-Projects">
              <h3>Share your thoughts</h3>
              {/* <img src="images/DeepThought.jpeg" alt="Deep Thought" /> */}
              <p>
                A MERN application that encourages users to share <br />
                their thoughts and feelings with others.I want to promote <br />
                the health benefits of journaling and free-writing.
                <br />
                <br />
              </p>
            </div>
          </div>

          <div className="project shadow-large">
            <a
              href="https://github.com/LHufton/ShareYourThoughts"
              className="project-image"
            >
              <p>
                <a href="https://github.com/LHufton/ShareYourThoughts">
                  GitHub
                </a>
              </p>
            </a>
            <div className="project-info">
              <h3>Simon</h3>
              <img src="images/Simon.png" alt="Simon" />
              <p>
                This was the first application I built at General Assembly. The
                flashing lights memory game Simon. I developed using javascript,
                html and css.
              </p>
              <p>
                <a href="https://github.com/LHufton/Simon">GitHub</a>
                <a href="https://lhufton.github.io/Simon/">View Project</a>
              </p>
            </div>
          </div>

          <div className="project shadow-large">
            <div className="project-info">
              <h3>"Tic-Tac-Toe"</h3>
              <img src="images/TTT.png" alt="Tic-Tac-Toe" />
              <p>
                This was my first project at General Assembly. I developed using
                javascript, html and css.
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
