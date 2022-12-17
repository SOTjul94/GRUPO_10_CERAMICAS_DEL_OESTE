import React from 'react'

export const RowUser = (id,firstname, email, getInfoUser) => {
  return (
    <tr>
          <th scope="row">{id}</th>
          <td>{firstname}</td>
          <td>{email}</td>
          
          <td>
         
          <button className='btn btn-sm btn-primary mx-1' style={{ width: '30px' }}
          onClick={()=>getInfoUser(id)}>
            <i className='fas fa-edit'></i>
            <p>Detalles del Usuario</p>
            </button>
         
          
          </td>
    </tr>
  )
}
