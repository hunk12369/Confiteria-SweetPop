import { useState } from 'react'
import Category from './components/Category'
import Contact from './components/Contact'
import Categorias from './pages/Categorias'
import Contactos from './pages/Contactos'
import Descuento from './pages/Descuento'
import Home from './pages/Home'
import Ofertas from './pages/Ofertas'
import Resenas from './pages/Resenas'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div></div>
    <Descuento/>
    </>
  )
}

export default App
