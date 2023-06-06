import { useState } from 'react'
import Category from './components/Category'
import Contact from './components/Contact'
import Contactos from './pages/Contactos'
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Category/>
    </>
  )
}

export default App
