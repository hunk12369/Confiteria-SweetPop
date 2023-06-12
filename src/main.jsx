import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, NavLink, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contactos from './pages/Contactos.jsx'
import Descuento from './pages/Descuento.jsx'
import Ofertas from './pages/Ofertas.jsx'
import Resenas from './pages/Resenas.jsx'
import LoginPage from './pages/LoginPage.jsx'
import Register from './pages/Register.jsx'
import Categorias from './pages/Categorias.jsx'
import Header from './components/Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
