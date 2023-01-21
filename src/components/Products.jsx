import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

/* Hay un poco de codigo comentado por si las cosas no salian bien
Aqui importe mi API por medio de useFetch (/hooks)
Gracias a la API se puede obtener mucha informacion para mostrar
Tambien gracias a la API se pueden obtener los productos de acuerdo al filtro
Fue estilizado con Bootstrap y Skeleton (al cargar la pagina) */

export const Products = () => {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  //let componentMounted = true;


  useEffect((componentMounted = true) => {
    const getProducts = async () => {
      setLoading(true);
      //const response = await fetch(`https://fakestoreapi.com/products`)
      const response = await fetch(`${useFetch}/products`)
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      }
    }
    getProducts();

    return () => {

    }
  },[])
  //No quitar las [] porque si faltan NO RENDERIZARA

  const Loading = () => {
    return (
      <>
        <div className='col-md-3'>
          <Skeleton height={350} />
        </div>
        <div className='col-md-3'>
          <Skeleton height={350} />
        </div>
        <div className='col-md-3'>
          <Skeleton height={350} />
        </div>
        <div className='col-md-3'>
          <Skeleton height={350} />
        </div>
      </>
    )
  }

  //cat = category
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  }

  const ShowProducts = () => {
    return (
      <>
        <div className='buttons d-flex justify-content-center mb-5 pb-5 col-md-2 col-xs-1'>
          <button className='btn btn-outline-dark me-2' onClick={() => setFilter(data)}>Todo</button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>Damas</button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")}>Caballeros</button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct('jewelery')}>Joyeria</button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct('electronics')}>Electronicos</button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className='col-md-3 mb-4'>
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img src={product.image} className="card-img-top" alt={product.title} height='250px' />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <NavLink to={`/products/${product.id}`} className="btn btn-primary">Ver producto</NavLink>
                  </div>
                </div>
              </div>
            </>
          )
        })
        }
      </>
    )
  }

  return (
    <div>
      <div className='container my-5 py-5'>
        <div className='row'>
          <div className='col-12 mb-5'>
            <h1 className='display-6 fw-bolder text-center'>Lo mas reciente</h1>
            <hr />
          </div>
        </div>
        <div className='row justify-content-center'>
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>

    </div>
  )
}
