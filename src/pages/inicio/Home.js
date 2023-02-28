import React, { useState } from "react";

function Datos(props) {
  console.log(props);
  return (
    <div>
      <h1>Nombre: {props.nombre}</h1>
      <h1>Apellido:{props.apellidos} </h1>
    </div>
  );
}

export function Home() {
  const [accion, setAccion] = useState(true);

  const encederapagar = () => {
    setAccion(!accion);
  };

  return (
    <>
    ombre: Dany
Nombre: Cambrano  <div>
        <h1>Página de inicio</h1>
        <h1>Encender/Apaga: {accion ? "Encendido" : "Apagado"}</h1>
        <button onClick={encederapagar}>Accion</button>
      </div>
      <div className="Datos">
        <Datos nombre="Dany" apellidos="Cambrano" />
        <Datos nombre="Alberto" apellidos="Morales" />
      </div>
    </>
  );
}
