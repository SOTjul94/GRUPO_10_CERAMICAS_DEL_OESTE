import { useState } from 'react'
import { UseFetch } from '../hooks/UseFetch'
import React, { useEffect } from 'react'
import { Table } from '../components/products/Table';

export const Products = () => {
  const [products, setProducts] = useState({
    loading : true,
    data: []
  });

  useEffect(() => {
    UseFetch('/products')
     .then(({meta, data}) =>{
      console.log(data);
      if (meta.ok) {
        setProducts({
          loading : false,
          data 
        })
      }
     }).catch(() => console.error)
   
  }, []);

  return (
    
    <div className="container">
      <div className="card">
        <div className="card-body">
          {
            products.loading
            ?
            <p>Cargando...</p>
            :
            <Table
            products={products.data}
            />
          }
          
        </div>
      </div>

      

    </div>
  )
}
