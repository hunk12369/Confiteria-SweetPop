import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contactos from './pages/Contactos.jsx'
import Descuento from './pages/Descuento.jsx'
import Ofertas from './pages/Ofertas.jsx'
import Resenas from './pages/Resenas.jsx'
import Login from './components/Login.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contactos' element={<Contactos/>}/>
        <Route path='/descuentos' element={<Descuento/>}/>
        <Route path='/ofertas' element={<Ofertas/>}/>
        <Route path='/reseñas' element={<Resenas/>}/>
        <Route path='/login' element={<Login/>}/>

        <Route path='*' element={<p>Page Not found</p>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
