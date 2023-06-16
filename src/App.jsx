import { useState } from 'react'
import Contact from './components/Contact'
import Fotter from './components/Fotter'
import Header from './components/Header'
import Information from './components/Information'
import NetworkButtons from './components/NetworkButtons'
import Info from './components/Info'
import Contactanos from './components/Contactanos'
import Visitanos from './components/Visitanos'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Info/>
      <Contactanos/>
      <Visitanos/>
      {/* <Contact/> */}
      <Fotter/>
      <Header/>
      {/* <Information/> */}
      {/* <NetworkButtons/> */}
    </>
  ) 
}

export default App
