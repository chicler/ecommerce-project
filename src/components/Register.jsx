import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

/* Lamentablemente este form no tiene todas las funcionalidades que queria ponerle
Se trata de un form para "Registrarse" (aunque no se recopilan datos para uso posterior)
Tiene un boton que usa el useNavigate para llevarlo al DemoPage.jsx (/error404)
Esta tiene validacion del navegador por defecto
Tiene un NavLink que lleva a TermsNConditions.jsx */

export const Register = () => {

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        navigate('/error404');
    }

    return (
        <div className='container p-5 display-flex'>
            <div className='title'>
                <h1 className='display-3'>Crea una cuenta</h1>
                <p className='medium'>Bienvenido, para crear una cuenta, por favor rellena el siguiente formulario con los datos correspondientes.</p>
                <p className='medium'>Si ya tienes una cuenta creada, puedes iniciar sesion <NavLink to='/login'>aqui</NavLink>.</p>
            </div>


            <form onSubmit={handleSubmit}>

                <br />
                <p className='small'>Los campos con "*" son obligatorios</p>

            <div>
                <div className='form-floating mb-3'>
                    <input type='text' className='form-control' id='floatingName' required />
                    <label for='floatingName'>Nombre(s)*</label>
                </div>
                <div className='form-floating mb-3'>
                    <input type='text' className='form-control' id='floatingLastName' required />
                    <label for='floatingLastName'>Apellido*</label>
                </div>
                <div  className="form-floating mb-3">
                    <input type="email"  className="form-control" id="floatingInput" required />
                    <label for="floatingInput">Correo electronico*</label>
                </div>
                <div  className="form-floating">
                    <input type="password"  className="form-control" id="floatingPassword" required />
                    <label for="floatingPassword">Cree una contraseña segura*</label>
                </div>
                <br />
                <div  className="form-check">
                    <input  className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label  className="form-check-label" for="flexCheckDefault">
                        Deseo ser notificado a mi correo electronico sobre informacion, ofertas y nuevos productos (opcional).
                    </label>
                </div>
                <div  className="form-check">
                    <input  className="form-check-input" type="checkbox" value="" id="flexCheckDefault" required />
                    <label  className="form-check-label" for="flexCheckDefault">
                        Acepto los <NavLink to='/termsnconditions'>Terminos y Condiciones</NavLink>.*
                    </label>
                </div>
                <br />
                <div>
                    <input to='/' className='btn btn-primary' value='Crear cuenta' type='submit' />
                </div>
                </div>
            </form>
        </div>
    )
}
