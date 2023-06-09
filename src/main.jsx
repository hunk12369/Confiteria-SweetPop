import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contactos from './pages/Contactos.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contactos' element={<Contactos/>}/>
        <Route path='*' element={<p>Page Not found</p>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
