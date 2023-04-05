import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Rutas} from "./routes"


export default function AppEmpleado() {
  return (
   <BrowserRouter>
    <Rutas/>
   </BrowserRouter>
  )
}