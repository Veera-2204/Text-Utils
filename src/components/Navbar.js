import React,{useState} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [darkMode, setdarkMode] = useState('Light Mode');
  const change = ()=>{
    if(darkMode === 'Dark Mode'){
      setdarkMode('Light Mode');
    }
    else{
      setdarkMode('Dark Mode');
    }
  }
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'dark'?'white':'dark'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onClick={props.toggle}
                onChange={change}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                {darkMode}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

// Navbar.defaultProps = {
//   title: "Set title here",
//   aboutText: "Set about here",
// };
