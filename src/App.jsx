import { useState } from 'react'
import Category from './components/Category'
import Contact from './components/Contact'
import Contactos from './pages/Contactos'
import Home from './pages/Home'
import Categorias from './pages/Categorias'
import Login from './components/Login'
import CrearCuenta from './components/CrearCuenta'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CrearCuenta/>
    </>
  )
}

export default App
