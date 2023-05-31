import React from 'react'

import Contact from '../components/Contact'
import Fotter from '../components/Fotter'
import Header from '../components/Header'
import Information from '../components/Information'
import NetworkButtons from '../components/NetworkButtons'
import OlasAdorno from '../components/OlasAdorno'

const Contactos = () => {
  return (
    <div>
        <Contact/>
        <Fotter/>
        <Header/>
        <Information/>
        <NetworkButtons/>
    </div>
  )
}

export default Contactos