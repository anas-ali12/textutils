import React from 'react'
import PropTypes from 'prop-types';

const NavBar = (props) => {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid" >
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.about}</a>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':"light"}`}>
            <input className="form-check-input" onClick={props.BlueToggleMode} type="checkbox" id="switchCheckDefault"/>
            <label className="form-check-label" htmlFor="switchCheckDefault">Blue Dark Mode</label>
          </div>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':"light"}`}>
            <input className="form-check-input" onClick={props.GreenToggleMode} type="checkbox" id="switchCheckDefault"/>
            <label className="form-check-label" htmlFor="switchCheckDefault">Green Dark Mode</label>
          </div>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':"light"}`}>
            <input className="form-check-input" onClick={props.RedToggleMode} type="checkbox" id="switchCheckDefault"/>
            <label className="form-check-label" htmlFor="switchCheckDefault">red Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string
}

NavBar.defaultProps = {
  title: 'Default Title',
  about: 'Default About'
};

export default NavBar
