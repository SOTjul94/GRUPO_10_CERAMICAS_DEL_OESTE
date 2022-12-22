import { useState } from 'react'
import { UseFetch } from '../hooks/UseFetch'
import React, { useEffect } from 'react'
import { Table } from '../components/products/Table';
import { Info } from '../components/products/Info';

export const Products = () => {
  const [products, setProducts] = useState({
    loading : true,
    data: []
  });
  const [product, setProduct] = useState({});

  useEffect(() => {
    UseFetch('/products')
     .then(({ok, data}) =>{
      console.log(data);
      if (ok) {
        setProducts({
          loading : false,
          data 
        })
      }
     }).catch(() => console.error)
   
  }, []);

  const getInfo = (id) => {
    UseFetch(`/products/${id}`)
     .then(({ok, data}) =>{
      console.log(data);
      if (ok) {
        setProduct(
          data 
        )
      }
     }).catch(() => console.error)
  }

  return (
    
    <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="card">
                <div className="card-header">
                <h4>Productos</h4>
                </div>
                
                <div className="card-body">
                {
            products.loading
            ?
            <p>Cargando...</p>
            :
            <Table
            products={products.data}
            getInfo={getInfo}
            />
          }
                </div>
              </div>
            
            </div>
            <div className="col-4">
              {
                product
                &&
                <Info
                {...product}
              />

              }
            </div>
          </div>
    </div>
  )
}
