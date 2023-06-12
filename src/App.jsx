import { useState } from 'react'
import { BrowserRouter, NavLink, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Contactos from './pages/Contactos.jsx'
import Descuento from './pages/Descuento.jsx'
import Ofertas from './pages/Ofertas.jsx'
import Resenas from './pages/Resenas.jsx'
import LoginPage from './pages/LoginPage.jsx'
import Register from './pages/Register.jsx'
import Categorias from './pages/Categorias.jsx'
import Header from './components/Header.jsx'
function App() {
const [count, setCount] = useState(0)
  return (
    <>
      <BrowserRouter>
      <div className='cabecera'>
        <Header/>
      </div>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contactos' element={<Contactos/>}/>
        <Route path='/descuentos' element={<Descuento/>}/>
        <Route path='/ofertas' element={<Ofertas/>}/>
        <Route path='/reseñas' element={<Resenas/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/categorias' element={<Categorias/>}/>
        <Route path='*' element={<p>Page Not found</p>}/>
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
