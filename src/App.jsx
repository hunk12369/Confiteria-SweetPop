import { useState } from 'react'
import ChocolateCard from './components/ChocolateCard'
import Discount from './components/Discount'

import Sale from './components/Sale'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ChocolateCard/>
     
    </div>
  )
}

export default App
