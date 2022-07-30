import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
<nav className={`navbar mb-1 navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.NavTitle}-App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tools
          </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/">TextUtils</Link></li>
            </ul>
        </li>
      </ul>
      <form className={`d-flex text-${props.mode==='light'?'dark':'light'}`}>
      <div className="form-check form-switch">
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="SwitchMode" />
        <label className="form-check-label" htmlFor="SwitchMode">{props.mode==='light'?'Enable Dark Mode':'Disable Dark Mode'}</label>
      </div>
      </form>
    </div>
  </div>
</nav>
  )
}

// Define Incoming value type
Navbar.propTypes = {
    NavTitle:PropTypes.string
    // NavTitle:PropTypes.string.isRequired
};

// Set Default Value in props
Navbar.defaultProps = {
    NavTitle:'This is Default value set prop'
};