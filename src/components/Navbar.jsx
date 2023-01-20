import React from 'react';
import { NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";

/* Este Navbar tiene el logo de la empresa ficticia y ademas una lista para ir a otros sitios
Los otros sitios donde lleva la lista es al Inicio, Productos, Info y Contacto
Ademas tiene algunos botones que tienen iconos por Font Awesome
El Navbar y todo lo que contiene fue estilizado con Bootstrap */
//El Navbar collapse de moviles no sirve :c
export const Navbar = () => {
    return (
        <div>
            <head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous" />
            </head>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light bg-light py-3 shadow-sm">
                <div className="container">
                    <NavLink id='logo' className="navbar-brand fw-bold fs-12" to="/">DA SHOP</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/products">Productos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/about">Info</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contacto</NavLink>
                            </li>
                        </ul>
                        <div className='buttons'>
                            <NavLink to='/login' className='btn btn-outline-dark'>
                                <i className='fa fa-sign-in me-1'></i>Ingresa</NavLink>
                            <NavLink to='/register' className='btn btn-outline-primary ms-2'>
                                <i className='fa fa-user-plus me-1'></i>Registrate</NavLink>
                            <NavLink to='/cart' className='btn btn-outline-dark ms-2'>
                                <i className='fa fa-shopping-cart me-1'></i>Carrito (0)</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
