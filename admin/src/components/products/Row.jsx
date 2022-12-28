import React from 'react'

export const Row = ({id,name, price, category, getInfo}) => {
  return (
    <tr>
          <th scope="row">{id}</th>
          <td>{name}</td>
          <td>${price}</td>
          <td>{category}</td>
          <td>
          <p>Informacion</p>
          <button className='btn btn-sm btn-primary mx-1' style={{ width: '30px' }}
          onClick={()=>getInfo(id)}>
            <i className='fas fa-edit'></i>
            
            </button>
            
          </td>
    </tr>
   
  )
}
