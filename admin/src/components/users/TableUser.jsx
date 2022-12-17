import React from 'react'
import { RowUser } from './RowUser'

export const TableUser = (users, getInfoUser) => {
  return (
    <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
        {
            //users.map((user, index) => <RowUser getInfoUser={getInfoUser} {...user} key={index}/>) 
          }
          
        </tbody>

      </table>
  )
}
