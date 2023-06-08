import { useState } from 'react'
import Category from './components/Category'
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
