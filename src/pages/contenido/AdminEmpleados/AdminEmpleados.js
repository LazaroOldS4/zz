import React, { useEffect, useState } from "react";
import Axios from "../../../services/Axios";
import {Link} from "react-router-dom";

export function AdminEmpleados() {
  const [empleados, setEmpleados] = useState([]);


  const consultarEmpleados = async () => {
    const consultar = await Axios.get("/empleado");
    console.log(consultar.data)
    setEmpleados(consultar.data);
  };


  const deleteEmpleados = async (id) => {
    if (window.confirm("¿Esta seguro de eliminar al empleado?")) {
      const eliminar = await Axios.delete("/empleados/" + id);
      eliminar.status(200).send({msg: "Datos eliminados"});
    }
    consultarEmpleados();
  };

  useEffect(() => {
    consultarEmpleados();
  }, []);

  return (
    <div className="container-fluid">
      <div>
        <h1>Registrate de Empleado</h1>
      </div>
      <div class="container text-center">
        <div class="row row-cols-4">
          <div class="col-md-3">
            <button type="button" class="btn btn-primary">
              <Link class="dropdown-item" to="/formempleado">
                Agregar Empleados...
              </Link>
            </button>
          </div>
        </div>
        <div class="row row-cols-12">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">CURP</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Fecha de Nacimiento</th>
                <th scope="col">Sexo</th>
                <th scope="col">Trabajo</th>
                <th scope="col">Telefono</th>
                <th scope="col">Correo Electronico</th>
              </tr>
            </thead>
            <tbody>
              {empleados.map((empleado) => {
                return (
                  <tr>
                    <th scope="row">1</th>
                    <td>{empleado.curp}</td>
                    <td>{empleado.nombre}</td>
                    <td>{empleado.apellidos}</td>
                    <td>{empleado.fechana}</td>
                    <td>{empleado.sexo}</td>
                    <td>{empleado.trabajo}</td>
                    <td>{empleado.telefono}</td>
                    <td>{empleado.email}</td>

                    <td>
                      <button type="button" class="btn btn-info">
                        Editar
                      </button>
                    </td>
                    <td>
                      <button type="button" class="btn btn-danger"
                      onClick={()=>deleteEmpleados(empleado.curp)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
