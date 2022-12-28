import { useState } from 'react'
import { UseFetch } from '../hooks/UseFetch'
import React, { useEffect } from 'react'
import { TableUser } from '../components/users/TableUser';


export const Users = () => {
  const [users, setUsers] = useState({
    loading : true,
    data: []
  });
 

  useEffect(() => {
    UseFetch('/users')
     .then(({ok, data}) =>{
      console.log(data);
      if (ok) {
        setUsers({
          loading : false,
          data 
        })
      }
     }).catch(() => console.error)
   
  }, []);

  
  return (
    <div className="container">
          <div className="row">
            <div className="">
              <div className="card">
                <div className="card-header">
                <h4>Usuarios</h4>
                </div>
                
                <div style={{ width: '100%' }} className="card-body" id='cardbody'>
                {
            users.loading
            ?
            <p>Cargando...</p>
            :
            <TableUser
            users={users.data}
             />
       
            
          }
                </div>
              </div>
            
            </div>
            <div className="col-4">
              </div>
          </div>
    </div>
  )
}
