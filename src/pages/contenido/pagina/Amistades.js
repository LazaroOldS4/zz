import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Amistades = () => {
  const [amigos, setAmigos] = useState([]);

  useEffect(() => {
    // Aquí deberías hacer una solicitud a tu API para obtener la lista de amigos del usuario en sesión
    // Puedes ajustar la URL según tu configuración
    axios.get('http://jzm4hkkh-4000.usw3.devtunnels.ms//amigos')
      .then(response => {
        setAmigos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener la lista de amigos:', error);
      });
  }, []); // La dependencia vacía asegura que esta solicitud se realice solo una vez al montar el componente

  return (
    <div>
      <h2>Mis Amigos</h2>
      <ul>
        {amigos.map(amigo => (
          <li key={amigo.idamistad}>
            {amigo.nombre} {amigo.apellido}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Amistades;