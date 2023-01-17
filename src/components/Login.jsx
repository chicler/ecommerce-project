import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

/* Este es un form de Login (solo que aqui no se pueden importar datos)
Tiene validacion del navegador (por algunas circunstancias no pude utilizar Formik y Yup como queria) 
Se tenia planeado usar Formik y Yup */

export const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        navigate('/error404');
    }
    return (
        <div className='container p-5'>
            <form onSubmit={handleSubmit}>
                <div className='title'>
                    <h1 className='display-3'>Inicia Sesion</h1>
                    <p className='medium'>Aun no tienes cuenta? Crea una <NavLink to='/register'>aqui</NavLink>.</p>
                </div>
                <div  className="form-floating mb-3">
                    <input type="email"  className='form-control' id="floatingInput" required />
                    <label for="floatingInput">Correo electronico</label>
                </div>
                <div  className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" required />
                    <label for="floatingPassword">Contraseña</label>
                </div>
                <br/>
                <div  className="form-check">
                    <input  className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label  className="form-check-label" for="flexCheckDefault">
                        Recuerdame
                    </label>
                </div>
                <br/>
                <div>
                    <input className='btn btn-primary' value='Iniciar Sesion' type='submit'/>
                </div>
            </form>
        </div>
    )
}
