import React from 'react'
import { NavLink } from 'react-router-dom'

/* Aqui cree un componente llamado DemoPage con su propio path /error404 y /cart 
Este tiene un spinner de Bootstrap y un NavLink que lleva al inicio de la pagina*/

export const DemoPage = () => {
    return (
        <div className='container p-5 content-center text-center'>
            <div>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                <br />
                <h1 className='display-3'>404</h1>
                <p className='display-5'>Oops!... Parece que llegaste al final de nuestra pagina</p>

                <div>
                    <p>Estamos trabajando arduamente para tener el sitio completo</p>
                    <p>Agradecemos su paciencia!</p>
                    <NavLink to='/'>Regresar a Inicio</NavLink>
                </div>
                <div>
                    <img src='assets/404angry.gif' alt='Error 404' width='20em' />
                </div>
            </div>
        </div>
    )
}
