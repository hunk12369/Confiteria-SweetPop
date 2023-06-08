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
            <Header/>
            <div className='contanctanos'>
              <div><span>Contactanos</span></div>
              <div><h10>SweetPop</h10></div>
        <div className='linea'></div>
            </div>
        <div className='fotoPortada'>
    <img src="src/assets/images/2.jpg" alt=''/>
    </div> 
    </div>
    <OlasAdorno/>
    <div className='fotitos'>
     <Information/>
    <div className='relleno1'>
        <img src="src/assets/images/1.jpg" alt="" />
    </div>
    <NetworkButtons/>
    <div className='relleno2'>
        <img src="src/assets/images/masas1.jpg" alt="" />
    </div>
    <Fotter/>
    </div>
  
    
      </div>
      

  )
}

export default Contact