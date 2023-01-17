import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink, useParams } from 'react-router-dom'
import "react-loading-skeleton/dist/skeleton.css";
import useFetch from '../hooks/useFetch';

/* Este componente muestra el producto cuando le das a 'Ver Producto' en Products.jsx
Utilize el useState y useEffect para mi API (la cual se localiza en useFetch) [tambien async await] 
La API en si es de una tienda falsa la cual ya contiene muchos datos de utilidad
Estilizado con Bootstrap y Skeleton (para cuando carga el sitio) */

export const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect((componentMounted = true) => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`${useFetch}/products/${id}`);
            if (componentMounted) {
                setProduct(await response.json());
                setLoading(false);
            }
        }
        getProduct();

        return () => {
            componentMounted = false;
        }
    },[]);
    //No quitar las [] porque si faltan NO RENDERIZARA
    
    const Loading = () => {
        return (
            <>
                <div className='col-md-6'>
                    <Skeleton height={400} />
                </div>
                <div className='col-md-6' style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </div>
            </>
        )
    }
    const ShowProduct = () => {
        return (
            <>
                
                    <div className='col-md-6'>
                        <img src={product.image} alt={product.title} height='500px' width='400px' />
                    </div>
                    <div className='col-md-6'>
                        <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                        <h1 className='display-5'>{product.title}</h1>
                        <p className='lead fw-bolder'>Valoracion {product.rating && product.rating.rate}
                            <i className='fa fa-star'></i></p>
                        <h3 className='display-6 fw-bold my-4'>$ {product.price}</h3>
                        <p className='lead'>{product.description}</p>
                        <button className='btn btn-outline-dark px-4 py-2'>Agregar al carrito</button>
                        <NavLink type='button' to='/cart' className='btn btn-dark ms-2 px-3 py-2'>Ir al carrito</NavLink>
                        <NavLink to='/error404' className='btn btn-primary ms-2 py-2 mg-2'>Comprar ahora</NavLink>
                    </div>
                
            </>
        )
    }

    return (
        <div>
            <div className='container py-5'>
                <div className='row'>
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}
