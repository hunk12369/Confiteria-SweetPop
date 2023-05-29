import React from 'react'
import "./Contact.css"
import Fotter from './Fotter'
import Header from './Header'
import Information from './Information'
import NetworkButtons from './NetworkButtons'
import OlasAdorno from './OlasAdorno'
const Contact = () => {
  return (
    <div className='pagina'>
          <div className='pantalla'>
        <h1>Contactanos</h1>
        <h2>SweetPop</h2>
        <div className='linea'></div>
        <div className='header'>
        <Header/>
        </div>
    </div>    
    <div className='relleno1'>
        <img src="src/assets/images/1.jpg" alt="" />
    </div>
    <OlasAdorno/>
    <div className='relleno2'>
        <img src="src/assets/images/masas1.jpg" alt="" />
    </div>
    <img src="src/assets/images/2.jpg" alt=''/>
    <Fotter/>
    <Information/>
    <NetworkButtons/>
      </div>
      

  )
}

export default Contact