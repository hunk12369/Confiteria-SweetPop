import { useState } from 'react'
import Home from './assets/components/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
    </>
  )
}

export default App
