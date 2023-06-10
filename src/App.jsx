import { useState } from 'react'
import Discount from './components/Discount'
import Header from './components/Header'
import Menu from './components/Menu'
import ProductosDiscount from './components/ProductosDiscount'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Discount/>
     
    </div>
  )
}

export default App
