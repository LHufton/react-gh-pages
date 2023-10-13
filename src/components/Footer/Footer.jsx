import React from 'react'
import './Footer.css'

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-5 copyright">
            <p>
              Copyright &copy; <span id="current-year">2023</span> Luke Hufton
            </p>
          </div>
          <div className="col-sm-2 top">
            {/* Added onClick event here */}
            <span id="to-top" onClick={scrollToTop}>
              <i className="fa fa-chevron-up" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
