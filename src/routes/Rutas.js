import React from 'react'
import {Routes,Route} from "react-router-dom";
import {Layout} from "../layouts";
import { Servicios, Footer, AdminEmpleados, FormEmpleados, AdminEmpleadores, FormEmpleadores } from '../pages';
import {Home} from '../pages';

export function Rutas() {
    const loadLayouts=(Layout,Page)=>{
        return(
            <Layout>
                <Page/>
            </Layout>
        )
    }
  return (
   <Routes>
    <Route path='/' element={loadLayouts(Layout, Servicios)}/>
    <Route path='/home' element={loadLayouts(Layout, Home)}/>
    <Route path='/empleador' element={loadLayouts(Layout, AdminEmpleadores)}/>
    <Route path='/empleado' element={loadLayouts(Layout, AdminEmpleados)}/>
    <Route path='/formempleado' element={loadLayouts(Layout, FormEmpleados)}/>
    <Route path='/formempleado/:id' element={loadLayouts(Layout, FormEmpleados)}/>
    <Route path='/formempleado/:id' element={loadLayouts(Layout, FormEmpleados)}/>
    <Route path='/formempleador' element={loadLayouts(Layout, FormEmpleadores)}/>
    <Route path='/formempleador/:id' element={loadLayouts(Layout, FormEmpleadores)}/>
    <Route path='/formempleador/:id' element={loadLayouts(Layout, FormEmpleadores)}/>
   </Routes> 
  )
}
