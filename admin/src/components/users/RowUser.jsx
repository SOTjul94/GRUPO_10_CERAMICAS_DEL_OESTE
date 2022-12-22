import React from 'react'

export const RowUser = ({id,firstname,lastname,email,nacionality,gender,document,birthday}) => {
  return (
    <tr>
            <th>{id}</th>
            <th>{firstname}</th>
            <th>{email}</th>
            <th>{lastname}</th>
            <th>{nacionality}</th>
            <th>{document}</th>
            <th>{gender}</th>
            <th>{birthday}</th>
      </tr>
  )
}
