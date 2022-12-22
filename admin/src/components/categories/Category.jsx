import React from 'react'

export const Category = ({ name }) => {
    return (
        <div className="col-lg-6 mb-3">
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                    <p>Exterior</p>
                </div>
            </div>
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                <p>Interior</p>
                </div>
            </div>
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                    <p>Baños</p>
                </div>
            </div>
        </div>
    )
}
