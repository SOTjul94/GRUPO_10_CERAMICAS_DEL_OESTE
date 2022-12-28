import React from 'react'
import { RowUser } from './RowUser'

export const TableUser = ({users}) => {
  return (
    <table  className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Apellido</th>
            <th scope="col">Nacionalidad</th>
            <th scope="col">Número de documento</th>
            <th scope="col">Genero</th>
            
          </tr>
        </thead>
        <tbody>
        {
            users.map(user => <RowUser {...user}/>) 
          }
          
        </tbody>

      </table>
  )
}
