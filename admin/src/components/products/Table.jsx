import React from 'react'
import { Row } from './Row'

export const Table = ({products, getInfo}) => {
  return (
    <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Categoria</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
        {
            products.map((product, index) => <Row getInfo={getInfo} {...product} key={index}/>) 
          }
          
        </tbody>

      </table>
  )
}
