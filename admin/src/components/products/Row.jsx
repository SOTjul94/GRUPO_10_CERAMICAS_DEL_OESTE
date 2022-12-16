import React from 'react'

export const Row = () => {
  return (
    <tr>
          <th scope="row">1</th>
          <td>Ceramica</td>
          <td>Del</td>
          <td>Oeste</td>
          <td>
         
          <button className='btn btn-sm btn-primary mx-1' style={{ width: '30px' }}>
            <i className='fas fa-edit'></i></button>
          <button className='btn btn-sm btn-success mx-1' style={{ width: '30px' }}>
              <i className='fas fa-trash'></i></button>
          <button className='btn btn-sm btn-danger mx-1' style={{ width: '30px' }}>
              <i className='fas fa-trash'></i></button>
          
          </td>
    </tr>
   
  )
}
