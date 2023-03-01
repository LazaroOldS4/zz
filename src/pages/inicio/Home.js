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
    <div>P+agina de inicio</div>

  );
}
