import React from 'react'

export const Row = ({id,name, price, category, getInfo}) => {
  return (
    <tr>
          <th scope="row">{id}</th>
          <td>{name}</td>
          <td>${price}</td>
          <td>{category}</td>
          <td>
         
          <button className='btn btn-sm btn-primary mx-1' style={{ width: '30px' }}
          onClick={()=>getInfo(id)}>
            <i className='fas fa-edit'></i>
            </button>
          <button className='btn btn-sm btn-success mx-1' style={{ width: '30px' }}>
              <i className='fas fa-trash'></i></button>
          <button className='btn btn-sm btn-danger mx-1' style={{ width: '30px' }}>
              <i className='fas fa-trash'></i></button>
          
          </td>
    </tr>
   
  )
}
