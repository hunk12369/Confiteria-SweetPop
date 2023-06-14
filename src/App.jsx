import { useState } from 'react'
import ChocolateCard from './components/ChocolateCard'
import Discount from './components/Discount'
import Header from './components/Header'
import Menu from './components/Menu'
import ProductosDiscount from './components/ProductosDiscount'
import Sale from './components/Sale'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Sale/>
     
    </div>
  )
}

export default App
