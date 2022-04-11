import React from 'react'
import logo from "../images/mariposas.png"
import "../css/Header.css"


 const Header=() =>{
  return (
    <div  id="about">
      <nav className="header navbar navbar-expand-lg navbar-light bg-light">
        <div  className="cont-nav container-fluid">
          <img className="but-log" src={logo} alt="logo" />
          {/* <navLink className="navbar-brand" to="#">Portafolio</navLink> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="list-nav collapse navbar-collapse" id="navbarNav">
            <ul className=" navbar-nav">
              <li className="nav-item">
                <navLink className="nav-link active" aria-current="page" to="#">
                  Acerca De Mí                </navLink>
              </li>
              <li className="nav-item">
                <navLink className="nav-link active" to="Proyects">
                  Proyectos <a href="Proyects"> </a>
                </navLink>
              </li>
              <li className="nav-item">
                <navLink className="nav-link active" to="Skills">
                  Habilidades <a href="./Skills.jsx" > </a>
                </navLink>
              </li>
              <li className="nav-item">
                <navLink className="nav-link active" to="#">
                  Curriculum
                </navLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
  )
}

export default Header