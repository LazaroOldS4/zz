import React, { useState, useEffect } from "react";
import Axios from "../../../services/Axios";

import { useParams, useNavigate } from "react-router-dom";

export function FormPersonas() {
  const variables = {
    _id: "",
    curp: "",
    nombre: "",
    apellidos: "",
    sexo: "",
    telefono: "",
  };

  const [personas, setPersonas] = useState(variables);
  //Variable para obtener los datos del parámetro especificado en admin
  const params = useParams();
  const navigate=useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setPersonas({ ...personas, [name]: value });
  };

  const guardarDatos = (e) => {
    const formulario = document.getElementById("personales");
    const formData = new FormData(formulario);

    /*Axios.post("/persona", formData).then(() => {
      console.log("Registros guardados exitosamente");
    });*/
    console.log(formData);
  };

  const obtenerPersona = async (id) => {
    const persona = await Axios.get("/persona/" + id);
    setPersonas(persona.data);
    console.log(persona);
  };

  const updatePersona=async()=>{
    await Axios.patch(`/persona/${params.id}`, personas).then(
      ()=>{
        console.log("Datos actualizados correctamente")
      }
    )
    navigate("/persona");
  }

  const Enviar = (e) => {
    e.preventDefault();
if(params._id===""){
  guardarDatos();
}else{
  updatePersona();
}
    
  };

  useEffect(() => {
    obtenerPersona(params.id);
  }, [params.id]);

  return (
    <div className="container-fluid p-3">
      <div class="card">
        <div class="card-header">Datos personales</div>
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
                  placeholder="Ingresa la matricula"
                  value={personas.curp}
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
                  placeholder="Ingresa tu nombre"
                  value={personas.nombre}
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
                  value={personas.apellidos}
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
                  value={personas.sexo}
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
                  value={personas.telefono}
                  onChange={onChange}
                />
              </div>
            </div>

            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                {personas._id==="" ? "Guardar":"Actualizar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
