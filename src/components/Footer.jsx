import React from 'react'

/* Un footer sencillo con el logo de la empresa ficticia
El cual tambien contiene mi nombre y un icono obtenido de Font Awesome */

export const Footer = () => {
    return (
        <div className='container-fluid'>
            <div className='row p-5 bg-dark text-white'>
                <div className='col-md-6'>
                    <p id='footer-logo' className='display-5'>DA SHOP</p>
                </div>
                <div className='col-md-6'>
                    <p className='h5 mb-3'>Hecho con <i className='fa fa-heart'></i> por Angel Maravilla</p>
                </div>
            </div>
        </div>
    )
}
