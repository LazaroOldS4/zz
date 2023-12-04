import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../layouts';
import {Servicios,Footer,Home,Solicitudes,Notificacion,Buscador} from '../pages';
import Mensajeria from '../pages/contenido/pagina/Mensajeria';
import Amistades from '../pages/contenido/pagina/Amistades';


  

export function Rutas() {
  const loadLayouts = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };

  return (
    <Routes>
      <Route path='/' element={loadLayouts(Layout, Servicios)} />
      <Route path='/home' element={loadLayouts(Layout, Home)} />
      <Route path='/mensajes' element={loadLayouts(Layout, Mensajeria)}/>
      <Route path='/solicitudes' element={loadLayouts(Layout, Solicitudes)} />
      <Route path='/notificacion' element={loadLayouts(Layout, Notificacion)} />
      <Route path='/buscador' element={loadLayouts(Layout, Buscador)} />
      <Route path='/amistad' element={loadLayouts(Layout, Amistades)} />
      

    </Routes>
  );
}