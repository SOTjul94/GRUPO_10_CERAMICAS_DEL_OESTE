import React from 'react'

export const Info = ({name,model,price,box,discount,description,color,style,dimension,transit,origin,pei,recomendation,code,category}) => {
  return (
    <div className="card">
              <div className="card">
              
              <div className="card-header">
              <h4>Informacion</h4>
              <div className="card-body">
                <div className="list-group list-group-flush">
                  <li className="list-group-item">
                    <label>Nombre:</label>
                    <p className="m-0"><b>{name}</b></p>
                  </li>
                  <li className="list-group-item">
                    <label>Modelo:</label>
                    <p className="m-0"><b>{model}</b></p>
                  </li>
                  <li className="list-group-item">
                    <label>Precio:</label>
                    <p className="m-0"><b>{price}</b></p>
                  </li>
                  <li className="list-group-item">
                    <label>Precio x Caja:</label>
                    <p className="m-0"><b>{box}</b></p>
                  </li>
                  <li className="list-group-item">
                    <label>Descuento:</label>
                    <p className="m-0"><b>{discount}</b></p>
                  </li>
                  <li className="list-group-item">
                    <label>Descripcion:</label>
                    <p className="m-0"><b>{description}</b></p>
                  </li>
                  <li className="list-group-item">
                    <label>Color:</label>
                    <p className="m-0"><b>{color}</b></p>
                  </li>
                  <li className="list-group-item">
                    <label>Estilo:</label>
                    <p className="m-0"><b>{style}</b></p>
                  </li>
                  <li className="list-group-item">
                    <label>Dimensiones:</label>
                    <p className="m-0"><b>{dimension}</b></p>
                  </li>
                  <li className="list-group-item">
                    <label>Tipo de Transito:</label>
                    <p className="m-0"><b>{transit}</b></p>
                  </li>
                  <li className="list-group-item">
                    <label>Origen:</label>
                    <p className="m-0"><b>{origin}</b></p>
                  </li>
                  <li className="list-group-item">
                    <label>Pei:</label>
                    <p className="m-0"><b>{pei}</b></p>
                  </li>
                  <li className="list-group-item">
                    <label>Recomendacion de :</label>
                    <p className="m-0"><b>{recomendation}</b></p>
                  </li>
                  <li className="list-group-item">
                    <label>Codigo:</label>
                    <p className="m-0"><b>{code}</b></p>
                  </li>
                  <li className="list-group-item">
                    <label>Catehoria:</label>
                    <p className="m-0"><b>{category}</b></p>
                  </li>
                </div>
              </div>
              </div>
             </div>
    </div>
  )
}
