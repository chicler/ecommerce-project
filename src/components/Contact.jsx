import React from 'react'
import { useNavigate } from 'react-router-dom';


export const Contact = () => {

    /* Este es un form donde puedes contactar con la empresa (en realidad no funciona)
    Y la validacion es por el mismo navegador */

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        navigate('/error404');
    }

    return (
        <div className='container p-5'>
            <form onSubmit={handleSubmit}>
                <div className='title'>
                    <h1 className='display-3'>Contacto</h1>
                    <p className='medium'>Dudas, comentarios o sugerencias? Envianos un mensaje con el siguiente formulario:</p>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" required />
                    <label for="floatingInput">Nombre(s)</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" required />
                    <label for="floatingInput">Apellido</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" required/>
                    <label for="floatingInput">Correo electronico</label>
                </div>
                <div className="form-floating">
                    <textarea className="form-control" id="floatingTextarea2" height="300px" required></textarea>
                    <label for="floatingTextarea2">Comentarios</label>
                </div>
                <br/>
                <div>
                    <input className='btn btn-primary' value='Enviar' type='submit'/>
                </div>
            </form>
        </div>
    )
}
