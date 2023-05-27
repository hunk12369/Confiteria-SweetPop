import { useState } from 'react'
import Contact from './components/Contact'
import Fotter from './components/Fotter'
import Header from './components/Header'
import Information from './components/Information'
import NetworkButtons from './components/NetworkButtons'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Contact/>
      <Fotter/>
      <Header/>
      <Information/>
      <NetworkButtons/>
    </>
  )
}

export default App
