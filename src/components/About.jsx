import React from 'react'
import { NavLink } from 'react-router-dom'

/* Este componente es el About de la pagina, con su path en /about
Porque no tenia mucho texto que colocar utilize el texto de ejemplo Lorem Ipsum
Utilize el NavLink para llevar a determinados sitios como a /contact */

export const About = () => {
    return (
        <div className='display-flex'>
            <div className="card text-bg-dark ">
                <img id='about-image' src="/assets/about.jpg" className="card-img bg-dark" alt="about-background" height='550em' />
                <div id='about-card' className="bg-dark-tertiary card-img-overlay text-center position-absolute top-50 start-50 translate-middle">
                    <h1 id='about-title' className="card-title display-2">DA SHOP</h1>
                    <p className="card-text display-4">Quienes somos?</p>
                </div>
            </div>
            <div className='container p-5'>
                <p className='bs-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className='text-center p-3'>Dudas? Envianos un mensaje por <NavLink to='/contact'>correo</NavLink>.</p>
            </div>
        </div>
    )
}
