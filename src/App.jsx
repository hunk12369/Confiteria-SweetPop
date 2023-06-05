import { useState } from 'react'
import Contact from './components/Contact'
import Fotter from './components/Fotter'
import Header from './components/Header'
import Information from './components/Information'
import NetworkButtons from './components/NetworkButtons'
import Login from './components/Login'
import Cuenta from './components/Cuenta'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cuenta/>
    </>
  )
}

export default App
