import React from 'react'
import repl from "./images/replica.png"
import piano from "./images/piano.png"
import car from "./images/productos.png"
import  "./css/Proyects.css"

 const Proyects =() => {
  return (
    <div className='card' >
       <h2>Algunos Proyectos Realizados</h2> 
<div class="row row-cols-1 row-cols-md-3 g-4"  id="Proyectos">
  <div class="col">
    <div class="card h-100">
      <img src={car} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Ecommerce</h5>
        <p class="card-text">Tecnologías usadas: React-Boostrap</p>
        <a href="https://github.com/JocelynRincon/Mi-r-plica-web"> </a>
      </div>
      <div class="card-footer">
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={piano} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Toquen el Dom</h5>
        <p class="card-text"> Tecnologías usadas HTML5 - CSS3 - JavaScript </p>
      </div>
      <div class="card-footer">
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
        <a href="https://github.com/JocelynRincon/Mi-r-plica-web"> </a>
      <img src={repl} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"> Mi Réplica Web</h5>
        <p class="card-text">Tecnologías usadas HTML5 - CSS3</p>
      </div>
      <div class="card-footer">

      </div>
          </div>
  </div>
</div>
<br></br>
    </div>
  )
}


export default Proyects;