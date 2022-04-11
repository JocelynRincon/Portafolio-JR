import React from 'react'
import logo from "../images/mariposas.png"
import "../css/Header.css"
import Cv from "../assets/cv/cv-JocelynRincon.pdf"



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
                <a className="nav-link active" aria-current="page" href='#home'>
                  Acerca De Mí            </a>
              </li>
              <li className="nav-item">
                <navLink className="nav-link active" href="proyects">
                  Proyectos <a href="#proyects"> </a>
                </navLink>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#skills">
                  Habilidades 
                </a>
              </li>
              <li className="nav-item">
                <a href={Cv} download={'cv-JocelynRincón'} className="nav-link active" >
                  Curriculum
                </a>
            
              </li>
            </ul>
             </div>
        </div>
      </nav>
      </div>
  )
}

export default Header