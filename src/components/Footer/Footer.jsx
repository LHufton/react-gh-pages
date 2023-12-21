import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-5 copyright">
            <p>
              Copyright &copy; <span id="current-year">2023</span> Luke Hufton
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
