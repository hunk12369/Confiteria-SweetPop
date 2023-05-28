import { useState } from 'react'
import Home from './pages/Home.jsx'
import Contactos from './pages/Contactos'
import OlasAdorno from './components/OlasAdorno.jsx'
import Fotter from './components/Fotter.jsx'
import Header from './components/Header.jsx'
import Information from './components/Information.jsx'
import NetworkButtons from './components/NetworkButtons.jsx'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Contactos/>
      <Fotter/>
      <Header/>
      <Information/>
      <NetworkButtons/>
         
    </>
  )
}

export default App
