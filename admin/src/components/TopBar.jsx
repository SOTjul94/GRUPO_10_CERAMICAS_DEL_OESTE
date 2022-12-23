import React from 'react'

export const TopBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

					
    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
        <i className="fa fa-bars"></i>
    </button>

    
    <ul className="navbar-nav ml-auto">

        
        <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                <i className="fas fa-bell fa-fw"></i>
                
                <span className="badge badge-danger badge-counter">3+</span>
            </a>
        </li>

        
        <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
                <i className="fas fa-envelope fa-fw"></i>
                
                <span className="badge badge-danger badge-counter">7</span>
            </a>
        </li>

        <div className="topbar-divider d-none d-sm-block"></div>

        
        <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Uriel</span>
                <img className="img-profile rounded-circle" src="https://www.wradio.com.co/resizer/TKQzHq1YfWNg2qa6Q4KZ86okHK8=/105x0/filters:format(jpg):quality(70):focal(497x111:507x121)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/MXYRDJFTGNHWPAN2B7YZU6R62M.jpg" width="60"/>
            </a>
        </li>

    </ul>

</nav>
  )
}
