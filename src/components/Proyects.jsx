import React from 'react'
import repl from "../images/replica.png"
import piano from "../images/piano.png"
import car from "../images/productos.png"
import  "../css/Proyects.css"

 const Proyects =() => {
  return (
    <div className='card' id="Proyects" >
       <h2>Algunos Proyectos Realizados<i className="bi bi-brush"></i></h2> 
<div className="row row-cols-1 row-cols-md-3 g-4"  >
  <div className="col">
    <div className="card h-100">
      <img src={car} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Ecommerce</h5>
        <p className="card-text">Tecnologías usadas: React-Boostrap</p>
        <a href="https://naughty-banach-fe5aa9.netlify.app/"> click aquí </a>
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
        <a href="https://github.com/diegoabt18/Toquen_el_Dom"> </a>
      </div>
      <div className="card-footer">
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
             <img src={repl} className="card-img-top" alt="..."/>
      <div className="card-body">
      
        <h5 className="card-title"> Mi Réplica Web</h5>
        <p className="card-text">Tecnologías usadas HTML5 - CSS3
        </p>
        <a href="https://github.com/JocelynRincon/Mi-r-plica-web"> </a>       
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