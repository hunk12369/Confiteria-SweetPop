import { useState } from 'react'
import ChocolateCard from './components/ChocolateCard'
import Sale from './components/Sale'
import VentaProductos from './pages/VentaProductos'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <VentaProductos/>
     
    </div>
  )
}

export default App
