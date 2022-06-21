import React from 'react'
import piano from "../images/piano.png"
import repl from "../images/replica.png"
import car from "../images/productos.png"
import covid from "../images/impactocovid.png"
import logo from "../images/logo-a-color- (1).jpg"
import  "../css/Proyects.css"

 const Proyects =() => {
  return (
    <div className='card' id="proyects" >
             <h2>Algunos Proyectos Realizados<i className="bi bi-brush"></i></h2> 
<div className="row row-cols-1 row-cols-md-3 g-4"  >
<div className="col">
    <div className="card h-100">
             <img src={logo} className="logo-card" alt="..."/>
      <div className="card-body">
      
        <h5 className="card-title"> Proyecto Legacy Selección</h5>
        <p className="card-text">Tecnologías usadas MERN
        </p>
        <a href="https://legacy-proceso-seleccion.netlify.app/"> Ir al Proyecto </a>       
      </div>
      <div className="card-footer">

      </div>
          </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={car} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Ecommerce</h5>
        <p className="card-text">Tecnologías usadas: React-Boostrap</p>
        <a href="https://naughty-banach-fe5aa9.netlify.app/"> Ir al Proyecto </a>
      </div>
      <div className="card-footer">
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={covid} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Impacto Covid</h5>
        <p className="card-text">Tecnologías usadas: Javascript-Css</p>
        <a href="https://ielectro13.github.io/impacto-covid/"> Ir al Proyecto </a>
      </div>
      <div className="card-footer">
      </div>
    </div>
  </div>
  
  <div className="col">
    <div className="card h-100">
      <img src={piano} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Toquen el Dom</h5>
        <p className="card-text"> Tecnologías usadas HTML5 - CSS3 - JavaScript </p>
        <a href="https://diegoabt18.github.io/Toquen_el_Dom/"> Ir al Proyecto </a>
      </div>
      <div className="card-footer">
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card h-100">
      <img src={repl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Réplica Web</h5>
        <p className="card-text">Tecnologías usadas: Html5-Css</p>
        <a href="https://github.com/JocelynRincon/Mi-r-plica-web.git"> Ir al Proyecto </a>
      </div>
      <div className="card-footer">
      </div>
    </div>
  </div>
  
</div>
<br></br>
    </div>
  )
}


export default Proyects;