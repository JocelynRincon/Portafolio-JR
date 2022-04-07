import React from "react";
import "./css/Home.css";
import logo from "./images/mariposas.png";

const Home = () => {
  return (
    <div>
      <nav class="home navbar navbar-expand-lg navbar-light bg-light">
        <div class="cont-nav container-fluid">
          <img className="but-log" src={logo} alt="logo" />
          {/* <navLink class="navbar-brand" to="#">Portafolio</navLink> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="list-nav collapse navbar-collapse" id="navbarNav">
            <ul class=" navbar-nav">
              <li class="nav-item">
                <navLink class="nav-link active" aria-current="page" to="#">
                  Acerca De Mí
                </navLink>
              </li>
              <li class="nav-item">
                <navLink class="nav-link active" to="Proyectos">
                  Proyectos
                </navLink>
              </li>
              <li class="nav-item">
                <navLink class="nav-link active" to="Skills">
                  Habilidades
                </navLink>
              </li>
              <li class="nav-item">
                <navLink class="nav-link active" to="#">
                  Curriculum
                </navLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <span className="me-text" >
          Bienvenid@... <br></br>
          Soy Jocelyn Rincón, desarrolladora fullStack  <br/>
          apasionada por el mundo de la tecnología. <br />
          
          <br/> <br/>
      </span>
    </div>
  );
};

export default Home;
