import React from 'react'
import { Products } from './Products'

/* Este componente es el inicio del sitio web
Aqui esta colocado un hero con texto
Y tambien importe el componente de Products para mostrar los productos debajo */

export const Home = () => {
  return (
    <div>
      <div className='hero'>
        <div className="card text-bg-dark text-white border-0">
          <img id='hero-image' src="/assets/bg.jpg" className="card-img" alt="background"
            height='550em' />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className='container'>
              <h5 id='hero-text' className="card-title display-3 fw-bolder mb-0">NUEVAS PRENDAS</h5>
              <p id='hero-text' className="card-text lead fs-2">PARA QUE ESTES ACTUALIZADO</p>
            </div>
          </div>
        </div>
      </div>
      <Products />
    </div>
  )
}
