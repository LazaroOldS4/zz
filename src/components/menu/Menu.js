import React from 'react';
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <img className="message-image" src="/zetta.jpeg" style={{ width: '55px', height: '25px' }} />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div style={{ bottom: '0px', right: '50%', width: '1200px' }}>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">CENTRO DE PUBLICACIONES</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/amistad">Amistad</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/mensajes">
                  MENSAJES
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/perfil">
                  
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/solicitudes">
                  Solicitudes
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Notificaciones
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/notificacion">Notificaciones recientes</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/notificacion">Todas las Notificaciones</Link></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  )
}
