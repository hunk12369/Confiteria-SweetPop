import React from 'react'
import "./Information.css"
const Information = () => {
  return (
    <div className='informacion'>
        <p className='tituloInfo'>Contactanos</p>
    <div className='linea4'></div>
    <div className='texto'>
    <p><b>CALLE:</b> 4517 Washington Ave. Manchester, Kentucky 39495</p>
    <p><b>NUMERO:</b> 72551345</p>
    <p><b>EMAIL:</b>sweetpop.lapaz@gmail.com</p>
    </div>
    <div className='botonInf'>
        <button>
            <p>Envianos Mensaje</p>
        </button>
    </div>
    </div>

  )
}

export default Information