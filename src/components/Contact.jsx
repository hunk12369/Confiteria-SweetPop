import React from 'react'
import "./Contact.css"
import Bot from './Bot'
import Header from './Header'
const Contact = () => {
  return (
    <div className='pagina'>
      
          <div className='pantalla'>
            <Bot/>
        <h1>Contactanos</h1>
        <h2>SweetPop</h2>
        <div className='linea'></div>     
    </div>
    
    <div className='relleno1'>
        <img src="src/assets/images/1.jpg" alt="" />
    </div>
    <div className='relleno2'>
        <img src="src/assets/images/masas1.jpg" alt="" />
    </div>
    <img src="src/assets/images/2.jpg" alt=''/>
      </div>

  )
}

export default Contact