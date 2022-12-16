import React from 'react'
import { Row } from './Row'

export const Table = ({products}) => {
  return (
    <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Categoria</th>
          </tr>
        </thead>
        <tbody>
        {
            products.map((product) => <Row/>) 
          }
          
        </tbody>

      </table>
  )
}
