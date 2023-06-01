import { useState } from 'react'
import Category from './components/Category'
import Contact from './components/Contact'
import Contactos from './pages/Contactos'
import Home from './pages/Home'
import Categorias from './pages/Categorias'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Categorias/>
    </>
  )
}

export default App
