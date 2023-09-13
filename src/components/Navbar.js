import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {

  const handleDanger = ()=>{
    document.body.style.backgroundColor= `#750000`;
  }
  const handleSecondary = ()=>{
    document.body.style.backgroundColor='grey';
  }
  const handleSuccess = ()=>{
    document.body.style.backgroundColor='#3D550C';
  }
  return (
    <div>
       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Us">{props.aboutText}</Link>
        </li>
      </ul>
        <div className="btn-group mx-2" role="group" aria-label="Small button group">
          <button type="button" onClick={handleDanger} className="btn btn-danger">Red</button>
          <button type="button" onClick={handleSecondary} className="btn btn-secondary">Grey</button>
          <button type="button" onClick={handleSuccess} className="btn btn-success">Green</button>
        </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes= {
    title : PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
};

Navbar.defaultProps={
    title: 'Set title here',
    aboutText: 'Set about text'
}