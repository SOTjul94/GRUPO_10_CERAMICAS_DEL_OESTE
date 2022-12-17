import { useState } from 'react'
import { UseFetch } from '../hooks/UseFetch'
import React, { useEffect } from 'react'
import { TableUser } from '../components/users/TableUser';
import { InfoUser } from '../components/users/InfoUser';

export const Users = () => {
  const [users, setUsers] = useState({
    loading : true,
    data: []
  });
  const [user, setUser] = useState({});

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

  const getInfoUser = (id) => {
    UseFetch(`/users/${id}`)
     .then(({ok, data}) =>{
      console.log(data);
      if (ok) {
        setUser(
          data 
        )
      }
     }).catch(() => console.error)
  }
  return (
    <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="card">
                <div className="card-header">
                <h4>Productos</h4>
                </div>
                
                <div className="card-body">
                {
            users.loading
            ?
            <p>Cargando...</p>
            :
            <TableUser
            users={users.data}
            getInfoUser={getInfoUser}
            />
       
            
          }
                </div>
              </div>
            
            </div>
            <div className="col-4">
              {
                user
                &&
                <InfoUser
                {...user}
                />
               
              

              }
            </div>
          </div>
    </div>
  )
}
