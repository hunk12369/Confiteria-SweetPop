import { useState } from 'react'
import ProductosDiscount from './components/ProductosDiscount'

import Descuento from './pages/Descuento'
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
