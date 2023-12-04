// Solicitudes.js
import React, { useState, useEffect } from "react";
import axios from "axios"; // Importa axios en lugar de '../../services/Axios'
import './solicitudes.css';

export function Solicitudes() {
  const [solicitudes, setSolicitudes] = useState([]);

  const cargarSolicitudes = async () => {
    try {
      // Utiliza axios.get en lugar de Axios.get
      const response = await axios.get("/solicitudes"); // Asume que hay un endpoint '/solicitudes' que devuelve la lista de solicitudes
      setSolicitudes(response.data);
    } catch (error) {
      console.error("Error al cargar las solicitudes:", error);
    }
  };

  useEffect(() => {
    cargarSolicitudes();
  }, []);

  const manejarAceptacion = async (idSolicitud) => {
    try {
      // Lógica para aceptar la solicitud
      await axios.put(`/solicitudes/${idSolicitud}`, { estado: 'Aceptado' });
      cargarSolicitudes(); // Recargar la lista después de la aceptación
    } catch (error) {
      console.error("Error al aceptar la solicitud:", error);
    }
  };

  const manejarRechazo = async (idSolicitud) => {
    try {
      // Lógica para rechazar la solicitud
      await axios.put(`/solicitudes/${idSolicitud}`, { estado: 'Rechazado' });
      cargarSolicitudes(); // Recargar la lista después del rechazo
    } catch (error) {
      console.error("Error al rechazar la solicitud:", error);
    }
  };

  return (
    <div>
      <h2>Solicitudes de amistad</h2>
      <div className="solicitudes-list">
        {solicitudes.map((solicitud) => (
          <div key={solicitud.id} className="solicitud-item">
            <div className="usuario-info">
              {/* Mostrar la información del usuario que envió la solicitud */}
              <img src={solicitud.usuario.avatar} alt="Avatar" />
              <p>{solicitud.usuario.nombre}</p>
            </div>
            <div className="estado-solicitud">
              {/* Mostrar el estado de la solicitud */}
              {solicitud.estado === 'Enviado' && (
                <span className="enviado">Enviado</span>
              )}
              {solicitud.estado === 'Aceptado' && (
                <span className="aceptado">Aceptado</span>
              )}
              {solicitud.estado === 'Rechazado' && (
                <span className="rechazado">Rechazado</span>
              )}
            </div>
            <div className="acciones">
              {/* Botones para aceptar y rechazar la solicitud */}
              {solicitud.estado === 'Enviado' && (
                <>
                  <button onClick={() => manejarAceptacion(solicitud.id)}>Aceptar</button>
                  <button onClick={() => manejarRechazo(solicitud.id)}>Rechazar</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
