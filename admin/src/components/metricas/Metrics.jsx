import React, { useEffect, useState } from 'react'
import { UseFetch } from '../../hooks/UseFetch';
import { Metric } from './Metric'

export const Metrics = () => {

    const [state, setState] = useState({
        products : {
            title : "Total Productos",
            icon : "fa-boxes",
            value : 53,
            color : "primary"
        },
        users : {
            title : "Usuarios registrados",
            icon : "fa-users",
            value : 5,
            color : "success"
        },
        categories : {
            title : "Categorias activas",
            icon : "fa-folder",
            value : 3,
            color : "warning"
        }
    });

    useEffect(() => {
       
        UseFetch('/totals')
            .then(({data}) => {
                setState({
                    products : {
                        ...state.products,
                        value : data.totalProducts
                    },
                    users : {
                        ...state.users,
                        value : data.totalUsers
                    },
                    categories : {
                        ...state.categories,
                        value : data.totalCategories
                    }
                })
            }).catch(error => console.error)
    
    }, []);
    
  return (
    <div className="row">
        <Metric {...state.products}/>
        <Metric {...state.users}/>
        <Metric {...state.categories}/>
    </div>

  )
}
