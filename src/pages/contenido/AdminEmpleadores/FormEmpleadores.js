import React, { useState, useEffect } from "react";
import Axios from "../../../services/Axios";

import { useParams} from "react-router-dom";

export function FormEmpleadores() {
  const variables = {
    curp: "",
    nombre: "",
    apellidos: "",
    fechana: "",
    sexo: "",
    telefono: "",
    email: "",
    password: ""
  }

  const [empleadores, setEmpleadores] = useState(variables);
  //Variable para obtener los datos del parámetro especificado en admin
  const params = useParams();

  const onChange = (e) => {
    const { name, value } = e.target;
    setEmpleadores({ ...empleadores, [name]: value });
  };

  const guardarDatos = (e) => {
    const formulario = document.getElementById("personales");
    const formData = new FormData(formulario);

    Axios.post("/empleador", empleadores).then(() => {
      console.log("Registros guardados exitosamente");
    });
    console.log(formData);
  };

  const obtenerEmpleador = async (id) => {
    const empleador = await Axios.get("/empleador/" + id);
    setEmpleadores(empleador.data);
    console.log(empleador);
  };

  const updateEmpleador=async()=>{
    await Axios.patch(`/empleador/${params.id}`, empleadores).then(
      ()=>{
        console.log("Datos actualizados correctamente")
      }
    )
  }

  const Enviar = (e) => {
    e.preventDefault();

  guardarDatos();
  };
  

  useEffect(() => {
    obtenerEmpleador(params.id);
  }, [params.id]);

  return (
    <div className="container-fluid p-3">
      <div class="card">
        <div class="card-header"><h4>Datos personales</h4></div>
        <div class="card-body">
          <form class="row g-3 p-2" onSubmit={Enviar} id="personales">
            <div class="mb-3 row">
              <label for="curp" class="col-sm-2 col-form-label">
                Curp
              </label>
              <div class="col-sm-10">
                <input
                  name="curp"
                  type="text"
                  class="form-control"
                  id="curp"
                  placeholder="Ingrese su curp"
                  value={empleadores.curp}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="nombre" class="col-sm-2 col-form-label">
                Nombre
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="nombre"
                  id="nombre"
                  placeholder="Ingrese su nombre"
                  value={empleadores.nombre}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="apellidos" class="col-sm-2 col-form-label">
                Apellidos
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="apellidos"
                  id="apellidos"
                  placeholder="Ingresa los apellidos"
                  value={empleadores.apellidos}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="fechana" class="col-sm-2 col-form-label">
                Fecha de Nacimiento
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="fechana"
                  id="fechana"
                  placeholder="Ingrese su Fecha de Nacimiento"
                  value={empleadores.fechana}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="sexo" class="col-sm-2 col-form-label">
                Sexo
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="sexo"
                  id="sexo"
                  placeholder="Ingresa sexo"
                  value={empleadores.sexo}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="telefono" class="col-sm-2 col-form-label">
                Teléfono
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="telefono"
                  id="telefono"
                  placeholder="Ingresa tu numero de telefono"
                  value={empleadores.telefono}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="email" class="col-sm-2 col-form-label">
                Correo Electronico
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="email"
                  id="email"
                  placeholder="Ingrese su Correo Electronico"
                  value={empleadores.email}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="password" class="col-sm-2 col-form-label">
                Contraseña
              </label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  id="password"
                  placeholder="Ingrese su Contraseña"
                  value={empleadores.password}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="password" class="col-sm-2 col-form-label">
                Contraseña
              </label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  name="repeatpassword"
                  id="password"
                  placeholder="Ingrese su Contraseña"
                  value={empleadores.password}
                  onChange={onChange}
                />
              </div>
            </div>
            

            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                {empleadores.curp=== "" ? "Guardar" : "Actualizar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
