import React, { useEffect, useState } from "react";
import Axios from "../../../services/Axios";
import {Link} from "react-router-dom";

export function AdminEmpleadores() {
  const [empleadores, setEmpleadores] = useState([]);


  const consultarEmpleadores = async () => {
    const consultar = await Axios.get("/empleador");
    console.log(consultar.data)
    setEmpleadores(consultar.data);
  };


  const deleteEmpleadores = async (id) => {
    if (window.confirm("¿Esta seguro de eliminar al empleado?")) {
      const eliminar = await Axios.delete("/empleadores/" + id);
      eliminar.status(200).send({msg: "Datos eliminados"});
    }
    consultarEmpleadores();
  };

  useEffect(() => {
    consultarEmpleadores();
  }, []);

  return (
    <div className="container-fluid">
      <div>
        <h1>Registrate de Empleador</h1>
      </div>
      <div class="container text-center">
        <div class="row row-cols-4">
          <div class="col-md-3">
            <button type="button" class="btn btn-primary">
              <Link class="dropdown-item" to="/formempleador">
                Agregar Empleadores...
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
                <th scope="col">Telefono</th>
                <th scope="col">Correo Electronico</th>
              </tr>
            </thead>
            <tbody>
              {empleadores.map((empleador) => {
                return (
                  <tr>
                    <th scope="row">1</th>
                    <td>{empleador.curp}</td>
                    <td>{empleador.nombre}</td>
                    <td>{empleador.apellidos}</td>
                    <td>{empleador.fechana}</td>
                    <td>{empleador.sexo}</td>
                    <td>{empleador.telefono}</td>
                    <td>{empleador.email}</td>
                    <td>{empleador.password}</td>
                    <td>
                      <button type="button" class="btn btn-info">
                        Editar
                      </button>
                    </td>
                    <td>
                      <button type="button" class="btn btn-danger"
                      onClick={()=>deleteEmpleadores(empleador.curp)}
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