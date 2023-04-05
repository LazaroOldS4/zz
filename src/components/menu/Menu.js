import React from 'react';
import {Link} from "react-router-dom";

export function Menu() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <img className="message-image" src="/imagen/bandicam 2023-03-29 11-15-06-403.jpg" style={{width: '55px' }} />
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div style={{ bottom: '0px', right: '50%', width: '1200px'}}>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            
            <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Servicios</Link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Administración de servicio
            </a>
            <ul class="dropdown-menu">
              <li><Link class="dropdown-item" to="/empleado">Admin Empleados</Link></li>
              <li><Link class="dropdown-item" to="/empleador">Admin Empleadores</Link></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Usuarios</a></li>
            </ul>
          </li>
         
        </ul>
      </div>
    </div>
  </div>
  </nav>
  )
}

