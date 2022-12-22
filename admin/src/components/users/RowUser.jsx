import React from 'react'

export const RowUser = ({id,firstname,lastname,email,nacionality,document,gender}) => {
  return (
    <tr>
            <th>{id}</th>
            <th>{firstname}</th>
            <th>{email}</th>
            <th>{lastname}</th>
            <th>{nacionality}</th>
            <th>{document}</th>
            <th>{gender}</th>
            
      </tr>
  )
}
