import React, { useState, useEffect } from 'react';
import './perfil.css'; // Importa el archivo CSS

const Perfil = () => {
  // Supongamos que tienes estas variables de estado
  const [nombre, setNombre] = useState('John');
  const [apellidos, setApellidos] = useState('Doe');
  const [fechaNacimiento, setFechaNacimiento] = useState('01/01/1990');
  const [sexo, setSexo] = useState('Masculino');
  const [telefono, setTelefono] = useState('123-456-7890');
  const [biografia, setBiografia] = useState('¡Hola! Soy John Doe.');

  return (
    <div className="container">
      <h2>Perfil</h2>
      <div className="info-container">
        <label>Nombre:</label>
        <p>{nombre}</p>
      </div>
      <div className="info-container">
        <label>Apellidos:</label>
        <p>{apellidos}</p>
      </div>
      <div className="info-container">
        <label>Fecha de Nacimiento:</label>
        <p>{fechaNacimiento}</p>
      </div>
      <div className="info-container">
        <label>Sexo:</label>
        <p>{sexo}</p>
      </div>
      <div className="info-container">
        <label>Teléfono:</label>
        <p>{telefono}</p>
      </div>
      <div className="info-container">
        <label>Biografía:</label>
        <p>{biografia}</p>
      </div>
    </div>
  );
};

export default Perfil;
